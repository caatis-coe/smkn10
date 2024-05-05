<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $validateUser = Validator::make(
                $request->all(),
                [
                    'email' => 'required|email',
                    'password' => 'required'
                ]
            );

            if ($validateUser->fails()) {
                return response()->json([
                    'status' => "Failed",
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            if (!Auth::attempt($request->only(["email", "password"]))) {
                return response()->json([
                    'status' => "Failed",
                    'message' => 'Email & Password does not match with our record.',
                ], 401);
            }

            $user = User::where("email", $request->email)->first();

            return response()->json(
                [
                    "message" => "Login user success",
                    "status" => "Success",
                    "token" => $user->createToken("API TOKEN")->plainTextToken
                ]
            );
        } catch (Exception $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }
}
