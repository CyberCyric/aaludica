<?php

namespace App\Mail;

use App\Models\PurchaseOrder;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Arr;

class PurchaseOrderNotification extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(PurchaseOrder $po, array $items, string $provinceName, string $shippingMethodName, string $paymentMethodName)
    {
        $this->po = $po;
        $this->items = $items;
        $this->provinceName = $provinceName;
        $this->shippingMethodName = $shippingMethodName;
        $this->paymentMethodName = $paymentMethodName;
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->from('info@aaludica.com.ar', 'AA Lúdica Juegos de mesa')
            ->subject('AA Lúdica - Nuevo Pedido: #'.$this->po->id)
            ->with([
                'name' => $this->po->name,
                'address' => $this->po->address,
                'location' => $this->po->location,
                'zipCode' => $this->po->zipCode,
                'phone' => $this->po->phone,
                'email' => $this->po->email,
                'province' => $this->po->province,
                'content' => $this->po->content,
                'paymentMethod' => $this->po->paymentMethod,
                'shippingMethod' => $this->po->shippingMethod,
                'subtotal' => $this->po->subtotal,
                'shippingCost' => $this->po->shippingCost,
                'total' => $this->po->total,
                'items' => $this->items,
                'provinceName' => $this->provinceName,
                'paymentMethodName' => $this->paymentMethodName,
                'shippingMethodName' => $this->shippingMethodName,                
            ])
            ->view('emails.purchase_order_notification');
    }
}
