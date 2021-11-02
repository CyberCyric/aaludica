<?php

namespace App\Http\Controllers;

use App\Models\PurchaseOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\PurchaseOrderNotification;
use App\Models\PurchaseItem;

class PurchaseOrderController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Store in Database
        $po = PurchaseOrder::create([
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            'zone' => $request->zone,
            'province' => $request->province,
            'shippingMethod' => $request->province,
            'paymentMethod' => $request->paymentMethod,
        ]);

        foreach ($request->items as $item) {
            $pi = PurchaseItem::create([
                'purchase_order_id' => $po->id,
                'product_id' => $item["id"],
                'price' => $item["price"],
                'quantity' => $item["quantity"]
            ]);
        }


        // Send email
        Mail::mailer('postmark')
            ->to('santiagojrodriguez@gmail.com');
        return response()->json(["status" => 200]);
    }
}
