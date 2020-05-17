<?php

namespace App\Http\Middleware;

use Closure;

class Configable
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $locale = $request->header('Language', 'vi');

        app()->setLocale($locale);

        return $next($request);
    }
}
