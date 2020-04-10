<?php

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

Route::get('/', 'HomeController@index')->name('home');
Route::get('/page/{page_slug}', 'PageController@index')->name('page');
Route::get('/page/{page_slug}/{item_slug}', 'PageController@viewItem')->name('item_show');
Route::post('/contact', 'HomeController@contact')->name('contact');
// Route::group(['middleware' => 'web'], function () {
//     Route::get(env('LARAVUE_PATH'), 'LaravueController@index')->where('any', '.*')->name('laravue');
// });

Auth::routes();
Route::get('/logout', 'Auth\LoginController@logout')->name('logout');
Route::group(['middleware' => 'web'], function() {
	Route::get('/admin/{any?}', 'Admin\IndexController@index')->where('any', '.*')->name('admin');
});