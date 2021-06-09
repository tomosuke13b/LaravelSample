<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index()
    {
        $result = [
            'result'      => true,
            'version'     => 0.1,
            'min_version' => 0.1,
        ];
        $statusCode = 200;
        return response()->json($result, $statusCode, ['Content-Type' => 'application/json'], JSON_UNESCAPED_SLASHES);
        // return [];
    }
    public function store()
    {
        $result = [
            'result'      => true,
            'version'     => 0.2,
            'min_version' => 0.2,
        ];
        $statusCode = 200;
        return response()->json($result, $statusCode, ['Content-Type' => 'application/json'], JSON_UNESCAPED_SLASHES);
        // return [];
    }
}
