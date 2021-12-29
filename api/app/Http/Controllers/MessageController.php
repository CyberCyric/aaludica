<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\MessageNotification;
use App\Models\Province;

class MessageController extends Controller
{
    //
    public function store(Request $request)
    {
        $provinceName = Province::find($request->province)->name;
        // Store in Database
        $msg = Message::create([
            'email' => $request->email,
            'name' => $request->name,
            'phone' => $request->phone,
            'province' => $provinceName,
            'content' => $request->content
        ]);

        // Send email
        Mail::to('info@aaludica.com.ar')->send(new MessageNotification($msg));
        return response()->json($request);
    }
}
