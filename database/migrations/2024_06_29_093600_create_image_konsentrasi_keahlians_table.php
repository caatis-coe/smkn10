<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('image_konsentrasi_keahlians', function (Blueprint $table) {
            $table->id();
            $table->foreignId("ImageID")->constrained('images');
            $table->foreignId("KonsentrasiKeahlianID")->constrained('konsentrasi_keahlians');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('image_konsentrasi_keahlians');
    }
};
