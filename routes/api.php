<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
    "middleware" => ["cors"],
], function () {
    Route::prefix("/auth")->group(function () {
        Route::post("/", [AuthController::class, "login"]);
    });
});

Route::group([
    "middleware" => ["cors"],
], function () {
    Route::prefix("/user")->group(function(){
        Route::get("/", [UserController::class, "index"]);
        Route::post("/", [UserController::class, "store"]);
        Route::put("/{id}",[UserController::class, "update"]);
        Route::delete("/{id}", [UserController::class, "destroy"]);
    });
});
