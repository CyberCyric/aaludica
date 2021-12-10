<?php

namespace App\Mail;

use App\Models\Message;
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
    public function __construct(PurchaseOrder $po, array $items)
    {
        $this->po = $po;
        $this->items = $items;
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
            ->subject('AA Lúdica - Compra desde el sitio')
            ->with([
                'name' => $this->msg->name,
                'phone' => $this->msg->phone,
                'email' => $this->msg->email,
                'province' => $this->msg->province,
                'content' => $this->msg->content,
            ])
            ->view('emails.message_notification');
    }
}
