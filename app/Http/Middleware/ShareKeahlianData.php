<?php

namespace App\Http\Middleware;

use App\Models\KonsentrasiKeahlian;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class ShareKeahlianData
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        Inertia::share('keahlianData', KonsentrasiKeahlian::all()->map(function ($keahlian) {
            return [
                'title' => $keahlian->title,
                'endpoint' => "/{$keahlian->endpoint}",
            ];
        }));

        return $next($request);
    }
}
