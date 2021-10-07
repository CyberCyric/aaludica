<?php

namespace App\Http\Controllers;

use App\Models\PurchaseOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\PurchaseOrderNotification;

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
            'address' => $request->address
        ]);
        if ($po) {
            return response()->json(["status" => 200]);
        }
        // Send email
        Mail::mailer('postmark')
            ->to('santiagojrodriguez@gmail.com')
            ->send(new PurchaseOrderNotification($po));
        return response()->json($request);
    }
}
