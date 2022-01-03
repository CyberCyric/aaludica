<?php

namespace App\Http\Controllers;

use App\Models\PurchaseOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\PurchaseOrderNotification;
use App\Models\PurchaseItem;
use MercadoPago;
use App\Models\Province;
use App\Models\ShippingMethod;
use App\Models\PaymentMethod;


class PurchaseOrderController extends Controller
{
    public function __construct()
    {
        // MercadoPago\SDK::setClientId(config('services.mercadopago.client_id'));  
        // MercadoPago\SDK::setClientSecret(config('services.mercadopago.client_secret'));   
        // MercadoPago\SDK::setAccessToken(config('services.mercadopago.MP_ACCESS_TOKEN'));
        MercadoPago\SDK::setAccessToken('TEST-3997504157521405-123014-abcc872a348da3fab4430578f29d7987-1048652402');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function checkOut(Request $request)
    {
        $USE_MERCADO_PAGO = ($request->paymentMethod == 3) ? true : false;

        $po = PurchaseOrder::create([
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            'phone' => $request->phone,
            'zone' => $request->zone,
            'province' => $request->province,
            'shippingMethod' => $request->shippingMethod,
            'paymentMethod' => $request->paymentMethod,
            'subtotal' => $request->subtotal,
            'shippingCost' => $request->shippingCost,
            'cartWeight'=> $request->cartWeight,
            'status'=> "P",
            'total' => $request->total
        ]);  

        $provinceName = Province::find($request->province)->name;
        $shippingMethodName = ShippingMethod::find($request->shippingMethod)->name;
        $paymentMethodName = PaymentMethod::find($request->paymentMethod)->name;

        foreach ($request->items as $item) {
            $pi = PurchaseItem::create([
                'purchase_order_id' => $po->id,
                'product_id' => $item["id"],
                'product_name' => $item["name"],
                'unit_price' => $item["price"],
                'quantity' => $item["quantity"],
                'quantity_price' => $item["price"] * $item["quantity"]
            ]);
            $items[] = $pi;
        }

        if ($USE_MERCADO_PAGO){
            // Crea un objeto de preferencia
            $preference = new MercadoPago\Preference();
            $preference->items = array();
            // Crea un ítem en la preferencia
            // $item = new MercadoPago\Item();
            // $item->title = 'Mi producto';
            // $item->quantity = 1;
            // $item->unit_price = 75.56;
            // $preference->items = array($item);
            $preference->save();
            $preference_id = $preference->id;

            return response()->json([
                'mercado_pago' => true,
                //'id' => $po->id,
                'preference_id' => $preference_id,
            ]);
        } else {
            return response()->json([
                'mercado_pago' => false,
                'id' => $po->id,
            ]);
        }

        // Send email
        // Mail::to('info@aaludica.com.ar')->send(new PurchaseOrderNotification($po,  $items, $provinceName, $shippingMethodName, $paymentMethodName));
    }

    public function completeCheckOut(Request $request)
    {

    }

}
