<?php

use Illuminate\Http\Request;
use \App\Laravue\Faker;
use \App\Laravue\JsonResponse;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('auth/login', 'AuthController@login');
Route::group(['middleware' => 'auth:api'], function () {
    Route::get('auth/user', 'AuthController@user');
    Route::post('auth/logout', 'AuthController@logout');
    Route::apiResource('users', 'Api\UserController')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_USER_MANAGE);
    Route::get('users/{user}/permissions', 'Api\UserController@permissions')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);
    Route::put('users/{user}/permissions', 'Api\UserController@updatePermissions')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);
    Route::apiResource('roles', 'Api\RoleController')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);
    Route::get('roles/{role}/permissions', 'Api\RoleController@permissions')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);
    Route::apiResource('permissions', 'Api\PermissionController')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);

    Route::apiResource('pages', 'Api\PageController')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);
    Route::put('/pages/{page}/addBlock/{block}', 'Api\PageController@addBlock')->name('add_block');
    Route::post('/pages/{page}/update_block_order', 'Api\PageController@updateBlockOrder')->name('update_block_order');
    Route::delete('/pages/{page}/block/{block}', 'Api\PageController@removeBlock')->name('remove_block');
    Route::post('/pages/{id}/edit', 'Api\PageController@update')->name('pageUpdate')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);

    Route::apiResource('blocks', 'Api\BlockController')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);

    Route::post('/blocks/{id}/edit', 'Api\BlockController@update')->name('postUpdate')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);
    Route::get('/enabled_blocks', 'Api\BlockController@enabledBlocks')->name('enabled_blocks')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);
    Route::post('/blocks/update_order', 'Api\BlockController@updateOrder')->name('update_order');

    // block contents
    Route::apiResource('block_contents', 'Api\BlockContentController')->only(['show', 'destroy'])->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);

    Route::post('/blocks/{id}/block_contents', 'Api\BlockContentController@store')->name('store_block_content')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);
    Route::post('/block_contents/{id}/edit', 'Api\BlockContentController@update')->name('update_block_content')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);
    Route::post('/block_contents/update_order', 'Api\BlockContentController@updateOrder')->name('update_order');

    Route::apiResource('categories', 'Api\CategoryController')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);
    Route::post('/categories/{id}/edit', 'Api\CategoryController@update')->name('postCategoryUpdate')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);

    Route::apiResource('articles', 'Api\ArticleController')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);
    Route::post('/articles/{id}/edit', 'Api\ArticleController@update')->name('postArticleUpdate')->middleware('permission:' . \App\Laravue\Acl::PERMISSION_PERMISSION_MANAGE);
    

    // Route::group(['prefix' => '/pages', 'as' => 'api.pages.'], function () {
    //     Route::get('/', 'Api\PageController@index')->name('index');
    //     Route::post('/', 'Api\PageController@store')->name('store');
    //     Route::get('/{page}', 'Api\PageController@show')->name('show');
    //     Route::put('/{page}', 'Api\PageController@update')->name('update');
    //     Route::put('/{page}/addBlock/{block}', 'Api\PageController@addBlock')->name('add_block');
    //     Route::post('/{page}/update_block_order', 'Api\PageController@updateBlockOrder')->name('update_block_order');
    //     Route::delete('/{page}', 'Api\PageController@destroy')->name('destroy');
    //     Route::delete('/{page}/block/{block}', 'Api\PageController@removeBlock')->name('remove_block');
    // });

    // Route::group(['prefix' => '/blocks', 'as' => 'api.blocks.'], function () {
    //     Route::get('/', 'Api\BlockController@index')->name('index');
    //     Route::get('/enabled', 'Api\BlockController@enabledBlocks')->name('enabled_blocks');
    //     Route::post('/', 'Api\BlockController@store')->name('store');
    //     Route::get('/{id}', 'Api\BlockController@show')->name('show');
    //     Route::post('/{id}/edit', 'Api\BlockController@update')->name('update');
    //     Route::delete('/{block}', 'Api\BlockController@destroy')->name('destroy');
    //     // block contents
    //     Route::post('/{id}/block_contents', 'Api\BlockContentController@store')->name('store_block_content');
    //     Route::post('/{id}/block_contents/{blockContentId}', 'Api\BlockContentController@update')->name('update_block_content');
    // });

    // Route::group(['prefix' => '/pages/{page}/items', 'as' => 'api.items.'], function () {
    //     Route::get('/', 'Api\ItemController@index')->name('index');
    //     Route::get('/enabled', 'Api\ItemController@enabledItems')->name('enabled');
    //     Route::post('/', 'Api\ItemController@store')->name('store');
    //     Route::get('/{item}', 'Api\ItemController@show')->name('show');
    //     Route::post('/{item}/edit', 'Api\ItemController@update')->name('update');
    //     Route::delete('/{item}', 'Api\ItemController@destroy')->name('destroy');
    //     Route::post('/update-order', 'Api\ItemController@updateOrder')->name('update_order');
    // });

    // Route::group(['prefix' => '/block_contents', 'as' => 'api.block_contents.'], function () {
    //     Route::get('/', 'Api\BlockContentController@index')->name('index');
    //     Route::get('/{id}', 'Api\BlockContentController@show')->name('show');
    //     Route::delete('/{blockContent}', 'Api\BlockContentController@destroy')->name('destroy');
    //     
    // });

    Route::group(['prefix' => '/settings', 'as' => 'api.settings.'], function () {
        Route::get('/', 'Api\SettingController@show')->name('show');
        Route::post('/{setting}', 'Api\SettingController@update')->name('update');
    });
});


// Fake APIs
Route::get('/table/list', function () {
    $rowsNumber = mt_rand(20, 30);
    $data = [];
    for ($rowIndex = 0; $rowIndex < $rowsNumber; $rowIndex++) {
        $row = [
            'author' => Faker::randomString(mt_rand(5, 10)),
            'display_time' => Faker::randomDateTime()->format('Y-m-d H:i:s'),
            'id' => mt_rand(100000, 100000000),
            'pageviews' => mt_rand(100, 10000),
            'status' => Faker::randomInArray(['deleted', 'published', 'draft']),
            'title' => Faker::randomString(mt_rand(20, 50)),
        ];

        $data[] = $row;
    }

    return response()->json(new JsonResponse(['items' => $data]));
});

Route::get('/orders', function () {
    $rowsNumber = 8;
    $data = [];
    for ($rowIndex = 0; $rowIndex < $rowsNumber; $rowIndex++) {
        $row = [
            'order_no' => 'LARAVUE' . mt_rand(1000000, 9999999),
            'price' => mt_rand(10000, 999999),
            'status' => Faker::randomInArray(['success', 'pending']),
        ];

        $data[] = $row;
    }

    return response()->json(new JsonResponse(['items' => $data]));
});