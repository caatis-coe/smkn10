<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class PostController extends Controller
{
    public function index(Request $request){
        try {
            $data = Post::select(
                "posts.id as id",
                "title",
                "slug",
                "content",
                "thumbnail",
                "posts.status as status",
                "posts.created_at as created_at"
            )
                ->join("users", "posts.user_id", "=", "users.id")
                ->where(function ($query) use ($request) {
                    if ($request->id != null) {
                        $query->where("posts.id", $request->id);
                    }
                })
                ->orderByDesc("created_at")
                ->get();

            if($request->id != null){
                $post = Post::find($request->id);

                if (!$post) {
                    return response()->json(
                        [
                            "message" => "Post not found",
                            "status" => false
                        ],
                        404
                    );
                }

                return response()->json(
                    [
                        "message" => "Get post success",
                        "status" => true,
                        "data" => $data
                    ],
                    200
                );
            } else {
                return response()->json(
                    [
                        "message" => "Get all post success",
                        "status" => true,
                        "data" => $data
                    ],
                    200
                );
            }
        } catch (Exception $th) {
            return response()->json(
                [
                    "message" => "Get all post failed",
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
                    "title" => "required|unique:posts,title",
                    "slug" => "required|unique:posts,slug",
                    "content" => "required",
                    "thumbnail" => "required|image|mimes:jpeg,png,jpg|max:2048",
                    //"user_id" => "required",
                    "status" => "required",
                ]
            );

            if ($validate->fails()) {
                throw new Exception($validate->errors(), 1);
            }

            //upload image
            $image = $request->file('thumbnail');
            $image->storeAs('public/posts', $image->hashName());

            Post::create(
                [
                    "id" => Str::uuid()->toString(),
                    "title" => $request->title,
                    "slug" => $request->slug,
                    "content" => $request->content,
                    "status" => $request->status,
                    "thumbnail" => $image->hashName(),
                    //"user_id" => $request->user_id
                    "user_id" => User::first()->id
                ]
            );

            return response()->json(
                [
                    "message" => "Create new post success",
                    "status" => true,
                ],
                200
            );
        } catch (Exception $th) {
            return response()->json(
                [
                    "message" => "Create new post failed",
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
            $post = Post::find($id);

            if (!$post) {
                return response()->json(
                    [
                        "message" => "Post not found",
                        "status" => false
                    ],
                    404
                );
            }

            $validate = Validator::make(
                $request->all(),
                [
                    "title" => [
                        'required',
                        Rule::unique('posts')->ignore($id)
                    ],
                    "slug" => [
                        'required',
                        Rule::unique('posts')->ignore($id)
                    ],
                    "content" => "required",
                    // "thumbnail" => "required|image|mimes:jpeg,png,jpg|max:2048",
                    "status" => "required",
                ]
            );

            if ($validate->fails()) {
                throw new Exception($validate->errors(), 1);
            }

            //check if image is not empty   
            if ($request->hasFile('thumbnail')) {

                //upload image
                $image = $request->file('thumbnail');
                $image->storeAs('public/posts', $image->hashName());

                //delete old image
                Storage::delete('public/posts/'.$post->thumbnail);

                //update post with new image
                $post->thumbnail = $image->hashName();
                $post->title = $request->title;
                $post->slug = $request->slug;
                $post->content = $request->content;
                $post->status = $request->status;
                $post->save();
            } else {
                //update post without image
                $post->title = $request->title;
                $post->slug = $request->slug;
                $post->content = $request->content;
                $post->status = $request->status;
                $post->save();
            }

            return response()->json(
                [
                    "message" => "Update post success",
                    "status" => true
                ], 200
            );
        } catch (Exception $th) {
            return response()->json(
                [
                    "message" => "Update post failed",
                    "status" => false,
                    "error" => $th->getMessage()
                ]
            );
        }
    }

    public function destroy($id)
    {
        try {
            $post = Post::find($id);

            if (!$post) {
                return response()->json(
                    [
                        "message" => "Post not found",
                        "status" => false
                    ],
                    404
                );
            } else {
                Storage::delete('public/posts/'.$post->thumbnail);
                Post::destroy($id);
            }

            return response()->json(
                [
                    "message" => "Delete post success",
                    "status" => true
                ],
                200
            );
        } catch (Exception $th) {
            return response()->json(
                [
                    "message" => "Delete post failed",
                    "status" => false
                ],
                500
            );
        }
    }
}
