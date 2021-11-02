<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\MessagerNotification;

class MessageController extends Controller
{
    //
    public function store(Request $request)
    {
        // Store in Database
        $msg = Message::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'province' => $request->province,
            'message' => $request->message
        ]);
        if ($msg) {
            return response()->json(["status" => 200]);
        }
        // Send email
        Mail::mailer('postmark')
            ->to('santiagojrodriguez@gmail.com')
            ->send(new MessagerNotification($msg));
        return response()->json($request);
    }
}
