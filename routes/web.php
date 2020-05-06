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
Route::get('/page/{slug}', 'PageController@view')->name('page');
Route::get('/page/{page_slug}/{slug}', 'PageController@viewItem')->name('pageItem');
Route::post('/contact', 'HomeController@contact')->name('contact');
// Route::group(['middleware' => 'web'], function () {
//     Route::get(env('LARAVUE_PATH'), 'LaravueController@index')->where('any', '.*')->name('laravue');
// });

//content 

Route::get('/category/{slug}', 'CategoryController@view')->name('category');
Route::get('/category/{page_slug}/{slug}', 'CategoryController@view2')->name('category2');

Route::get('/article/{slug}', 'ArticleController@view')->name('article');

Route::get('/blog', 'BlogController@index')->name('blog');
Route::get('/faqs', 'FaqController@index')->name('faq');

Auth::routes();
Route::get('/profile', 'Auth\ProfileController@index')->name('profile');
Route::get('/logout', 'Auth\LoginController@logout')->name('logout');
Route::get('/tham-gia', 'JoinController@index')->name('join');
Route::group(['middleware' => 'web'], function() {
    Route::get('/admin/{any?}', 'Admin\IndexController@index')->where('any', '.*')->name('admin');
});