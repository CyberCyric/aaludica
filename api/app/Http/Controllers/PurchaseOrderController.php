<?php

namespace App\Http\Controllers;

use App\Models\PurchaseOrder;
use Illuminate\Http\Request;

class PurchaseOrderController extends Controller
{
    public function store(Request $request)
    {
        return response()->json("ESTOY ACA");
        // return response()->json($request);
        // Store in Database
        /*
        $po = PurchaseOrder::create([
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address
        ]);

        if ($po) {
            return response()->json(["status" => 200]);
        }
        return response()->json($request);
        */
    }
}
