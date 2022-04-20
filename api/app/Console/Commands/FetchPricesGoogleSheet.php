<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class FetchPricesGoogleSheet extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch:prices';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch prices from Google Sheet and updates DB table for website.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        
        $client = new Google_Client();
        $client->setApplicationName('Google Sheets and PHP');
        $client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
        $client->setAccessType('offline');
        $client->setAuthConfig(__DIR__ . '/credentials.json');
        $service = new Google_Service_Sheets($client);
        $spreadsheetId = "Your SpreadsheetID"; 
        $get_range = "Your Sheet Name! Range”;
        //Request to get data from spreadsheet.
        $response = $service->spreadsheets_values->get($spreadsheetId, $get_range);
        $values = $response->getValues();
        return 0;
    }
}