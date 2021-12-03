<?php

namespace App\Http\Controllers;

use App\Models\PurchaseOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\PurchaseOrderNotification;
use App\Models\PurchaseItem;
use MercadoPago;


class PurchaseOrderController extends Controller
{
    public function __construct()
    {
        // MercadoPago\SDK::setClientId(config('services.mercadopago.client_id'));  
        // MercadoPago\SDK::setClientSecret(config('services.mercadopago.client_secret'));   
        MercadoPago\SDK::setAccessToken(config('services.mercadopago.access_token'));
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function checkOutMercadoPago(Request $request)
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

    public function checkout(Request $request)
    {
        // Crea un objeto de preferencia segun la documentación de MercadoPago  
        $name = $request->nombre;
        $name = 'Santiago Rodríguez';
        $email = $request->email;
        // una funcion que me crea un codigo de referencia que guardo en mi BD  
        $external_reference = $this->external_reference();
        // inicia la creación de la preferencia  
        $preference = new MercadoPago\Preference();
        // del artículo vendido  
        $item = new MercadoPago\Item();
        $item->title = 'TITANIC LIMIT EDITION';
        $item->quantity = 1;
        $item->unit_price = 546;
        $preference->items = array($item);
        //del comprador  
        $payer = new MercadoPago\Payer();
        $payer->name = $name;
        $payer->email = $email;
        $preference->payer = $payer;
        // las url de retorno a donde mercadolibre nos redigirá despues de terminar el proceso de pago  
        // IMPORTANTE: No utilizar IPs en las url como 127.0.0.1 o 10.1.1.10 porque el SDK marcará un error       
        $preference->back_urls = array(
            "success" => "http://misistema.test/checkout/success",
            "failure" => "http://misistema.test/checkout/failure",
            "pending" => "http://misistema.test/checkout/pending"
        );
        $preference->external_reference = $external_reference;
        $preference->save();

        // retornamos a donde sea que este tu vista  
        return view('checkout')->with('preference', $preference);
    }
    // no olvidar crear las rutas   
    public function success(Request $request)
    {
        return 'success';
    }
    public function failure(Request $request)
    {
        return 'failure';
    }
    public function pending(Request $request)
    {
        return 'pending';
    }
}
