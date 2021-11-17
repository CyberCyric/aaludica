<?php

namespace App\Mail;

use App\Models\Message;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MessageNotification extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Message $msg)
    {
        $this->msg = $msg;
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->from('info@aaludica.com.ar', 'AA Lúdica -  Juegos de Mesa')
            ->with([
                'name' => $this->msg->name,
                'phone' => $this->msg->phone,
                'email' => $this->msg->email,
                'province' => $this->msg->province,
                'message' => $this->msg->message,
            ])
            ->view('emails.message_notification');
    }
}