<?php

namespace App\Http\Controllers\Api;

use App\Setting;
use App\Block;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use App\Http\Resources\SettingResource;

class SettingController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        return new SettingResource(Setting::first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Setting $setting)
    {
        $this->validate($request, [
            'sitename' => 'required|max:255',
            'company_name' => 'required|max:255',
            'address_hn' => 'required|max:255',
            'tel1' => 'required|max:255',
        ]);

        $oldImage = $setting->image;
        $oldFooterBg = $setting->footer_bg;

        $data = $request->all();
        $setting->fill($data);

        if (isset($data['logo'])) {
            $image_file_name = time().rand(11111,99999).$data['logo']->getClientOriginalName();
            $logo_image_path = config('constant.logo_image_path');
            if (!File::isDirectory($logo_image_path)) {
                File::makeDirectory($logo_image_path, 0775, true);
            }
            $data['logo']->move($logo_image_path, $image_file_name);
            $setting->logo = '/' . $logo_image_path . '/' . $image_file_name;
            if (File::isFile($oldImage)) {
                File::delete($oldImage);
            }
        }

        if (isset($data['footer_bg'])) {
            $image_file_name = time().rand(11111,99999).$data['footer_bg']->getClientOriginalName();
            $image_path = config('constant.image_path');
            if (!File::isDirectory($image_path)) {
                File::makeDirectory($image_path, 0775, true);
            }
            $data['footer_bg']->move($image_path, $image_file_name);
            $setting->footer_bg = '/' . $image_path . '/' . $image_file_name;
            if (File::isFile($oldFooterBg)) {
                File::delete($oldFooterBg);
            }
        }
        $setting->save();

        return response()->json(['message' => 'success', 'data' => $setting->jsonSerialize()]);
    }
}
