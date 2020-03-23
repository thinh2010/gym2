<?php

use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->insert([
            'sitename' => 'Gym',
            'company_name' => 'Gym',
            'logo' => 'test',
            'site_url' => 'http://gym.vn',
            'address_hn' => '4th floor, Ngoc Khanh Plaza Building, No.1 Pham Huy Thong, Ngoc Khanh Ward, Ba Dinh District, Hanoi',
            'address_hcm' => 'Unit 11, Floor 12, Viettel Complex Building, 285 Cach Mang Thang 8, Ward12, District 10, HCMC',
            'tel1' => '+84-24-3795-4257',
            'tel2' => '+84-24-3792-5020',
        ]);
    }
}
