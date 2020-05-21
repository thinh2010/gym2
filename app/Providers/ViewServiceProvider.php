<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Using class based composers...
        // View::composer(
        //     'clubs', 'App\Http\View\Composers\ProfileComposer'
        // );

        // Using Closure based composers...
        View::composer(['components/blocks.ClassHeading', 'components/blocks.ClubMap'], function ($view) {
            $baseUrl = 'https://vgym.perfectgym.com/Api/v2/';
            $client = $this->getInstance();
            $clubs = $client->get($baseUrl . 'odata/Clubs?$filter=isDeleted eq false');

            $view->with('clubs', $clubs->json()['value']);
        });        

        View::composer('components/blocks.ClassHeading', function ($view) {
            $baseUrl = 'https://vgym.perfectgym.com/Api/v2/';
            $client = $this->getInstance();

            $now = Carbon::now();
            $startDate = clone $now;
            $startDate = $startDate->firstOfMonth();
            $endDate = clone $now;
            $endDate = $endDate->addMonths(2);

            $timetables = $client->get($baseUrl . 'odata/Classes?$expand=classType&$filter=startDate ge ' . urlencode($startDate->toIso8601String()) . ' and endDate le ' . urlencode($endDate->toIso8601String()));

            $view->with('timetables', htmlspecialchars_decode(json_encode($timetables->json()['value'])));
        });
    }

    public function getInstance() {
        return Http::withHeaders([
            'X-Client-Id' => '0700892b43274f1b9fa10c5c94e25e1c',
            'X-Client-Secret' => '422f2ec7108b434ea1b0c1ef2c8e84fda4c29567541c480081a998816951db5d',
        ]);
    }
}