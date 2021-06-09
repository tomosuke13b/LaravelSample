<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(
    [
        'middleware' => array_merge([
            App\Http\Middleware\VerifyCsrfToken::class
        ]),
    ],
    function() {
        Route::get('/', 'App\Http\Controllers\Root\IndexController@index');
        // Route::match('POST', '/api/test', 'App\Http\Controllers\Api\TestController');
        Route::get('/api/test', 'App\Http\Controllers\Api\TestController@index');
        Route::post('/api/test', 'App\Http\Controllers\Api\TestController@store');
    }
);


// Route::group(
//     [
//         'prefix' => 'api',
//         'middleware' => array_merge([
//             App\Http\Middleware\VerifyCsrfToken::class
//         ]),
//     ],
//     function() {
//         Route::get('/test', 'App\Http\Controllers\Api\TestController@show');
//         Route::post('/test', 'App\Http\Controllers\Api\TestController@store');
//     }
// );
