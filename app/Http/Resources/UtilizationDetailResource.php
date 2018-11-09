<?php

namespace App\Http\Resources;

//use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Resources\Json\Resource;

class UtilizationDetailResource extends Resource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return  [
            ["id" => "1", "detail" => "","departmentNm" => "6部　1課", "rate" => "77.1", "name" => "小山　一昭", "putmanH" => "160.27", "90manH" => "35.25",  "holidaymanH" => "11.00",  "actualworkH" => "196.75",  "chokinworkH" => "45.00", "totalmanH" => "207.75",  "taisyocheck" => "0" ,  "taisyocomm" => "sadf"],
            ["id" => "2", "detail" => "","departmentNm" => "6部　1課", "rate" => "68.8", "name" => "平山　義行", "putmanH" => "140.25", "90manH" => "63.50",  "holidaymanH" => "0.00",  "actualworkH" => "203.75",  "chokinworkH" => "41.00", "totalmanH" => "203.75",  "taisyocheck" => "0" ,  "taisyocomm" => "hjl"],
            ["id" => "3", "detail" => "","departmentNm" => "6部　2課", "rate" => "78.6", "name" => "中山　浩平", "putmanH" => "175.00", "90manH" => "25.50",  "holidaymanH" => "0.00",  "actualworkH" => "222.75",  "chokinworkH" => "60.00", "totalmanH" => "222.75",  "taisyocheck" => "0" ,  "taisyocomm" => "ghjklghk"]
        ];
    }
}
