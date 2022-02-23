<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index($id = null)
    {
        if (isset($id) == false)
            $products = Product::orderBy('name')->get();
        else {
            $products = Product::whereHas('categories', function ($q) use($id){
                    $q->where('category_id', '=', $id);
            })->get();
        }
        return response()->json($products);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }

}
