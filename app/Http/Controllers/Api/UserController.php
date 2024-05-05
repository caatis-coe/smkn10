<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function index(Request $request){
        try {
            $data = User::select(
                "id",
                "name",
                "email",
                "username",
                "role",
                "created_at"
            )
                ->where(function ($query) use ($request) {
                    if ($request->id != null) {
                        $query->where("id", $request->id);
                    }
                })
                ->orderByDesc("created_at")
                ->get();

            if($request->id != null){
                $user = User::find($request->id);

                if (!$user) {
                    return response()->json(
                        [
                            "message" => "User not found",
                            "status" => false
                        ],
                        404
                    );
                }
                return response()->json(
                    [
                        "message" => "Get user success",
                        "status" => true,
                        "data" => $data
                    ],
                    200
                );
            } else {
                return response()->json(
                    [
                        "message" => "Get all user success",
                        "status" => true,
                        "data" => $data
                    ],
                    200
                );
            }
        } catch (Exception $th) {
            return response()->json(
                [
                    "message" => "Get all user failed",
                    "status" => false,
                    "error" => $th->getMessage()
                ],
                500
            );
        }
    }

    public function store(Request $request)
    {
        try {
            $validate = Validator::make(
                $request->all(),
                [
                    "name" => "required",
                    "email" => "required|unique:users,email|email",
                    "username" => "required|unique:users,username",
                    "password" => "required",
                    "role" => "required"
                ]
            );

            if ($validate->fails()) {
                throw new Exception($validate->errors(), 1);
            }

            User::create(
                [
                    "id" => Str::uuid()->toString(),
                    "name" => $request->name,
                    "email" => $request->email,
                    "username" => $request->username,
                    "password" => Hash::make($request->password),
                    "role" => $request->role,
                    "email_verified_at" => now(),
                    "remember_token" => Str::random(10)
                ]
            );

            return response()->json(
                [
                    "message" => "Create new user success",
                    "status" => true,
                ],
                200
            );
        } catch (Exception $th) {
            return response()->json(
                [
                    "message" => "Create new user failed",
                    "status" => false,
                    "error" => $th->getMessage()
                ],
                500
            );
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $user = User::find($id);

            if (!$user) {
                return response()->json(
                    [
                        "message" => "User not found",
                        "status" => false
                    ],
                    404
                );
            }

            $validate = Validator::make(
                $request->all(),
                [
                    "name" => "required",
                    "email" => [
                        'required',
                        'email',
                        Rule::unique('users')->ignore($id)
                    ],
                    "username" => [
                        'required',
                        Rule::unique('users')->ignore($id)
                    ],
                    "role" => "required"
                ]
            );

            if ($validate->fails()) {
                throw new Exception($validate->errors(), 1);
            }

            $user->name = $request->name;
            $user->email = $request->email;
            $user->username = $request->username;
            $user->role = $request->role;

            $user->save();

            return response()->json(
                [
                    "message" => "Update user success",
                    "status" => true
                ], 200
            );
        } catch (Exception $th) {
            return response()->json(
                [
                    "message" => "Update user failed",
                    "status" => false,
                    "error" => $th->getMessage()
                ]
            );
        }
    }

    public function destroy($id)
    {
        try {
            $user = User::find($id);

            if (!$user) {
                return response()->json(
                    [
                        "message" => "User not found",
                        "status" => false
                    ],
                    404
                );
            } else {
                User::destroy($id);
            }


            return response()->json(
                [
                    "message" => "Delete user success",
                    "status" => true
                ],
                200
            );
        } catch (Exception $th) {
            return response()->json(
                [
                    "message" => "Delete user failed",
                    "status" => false
                ],
                500
            );
        }
    }
}
