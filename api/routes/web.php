<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group(['prefix' => 'api'], function () {
    Route::get('provinces', 'App\Http\Controllers\ProvinceController@index');
    Route::get('products/{categoryId?}', 'App\Http\Controllers\ProductController@index');
    Route::get('categories', 'App\Http\Controllers\CategoryController@index');
    Route::get('shipping_costs', 'App\Http\Controllers\ShippingCostController@calculateCost');
    Route::post('checkOut', 'App\Http\Controllers\PurchaseOrderController@checkOut');
    Route::post('checkOutMercadoPago', 'App\Http\Controllers\PurchaseOrderController@checkOutMercadoPago');
    Route::post('message', 'App\Http\Controllers\MessageController@store');

    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });
});
