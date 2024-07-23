<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use App\Models\UserWeb;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use League\Csv\Reader;

class WebController extends Controller
{
    //
    public function subject(Request $request)
    {
        // $username = $request->input('username');
        $username = "20000200";
        $user = UserWeb::where('username', $username)->first();
        $subject1 = Subject::all();
        $subject1->each(function ($sub) {
            if ($sub->day != "CN") {
                $sub->schedule = "Thứ " . $sub->day . ", " . $sub->shift . ", " . $sub->at;
            } else {
                $sub->schedule = $sub->day . ", " . $sub->shift . ", " . $sub->at;
            }
        });
        $subject2 = Subject::where('for', $user->major)->get();
        $subject2->each(function ($sub) {
            if ($sub->day != "CN") {
                $sub->schedule = "Thứ " . $sub->day . ", " . $sub->shift . ", " . $sub->at;
            } else {
                $sub->schedule = $sub->day . ", " . $sub->shift . ", " . $sub->at;
            }
        });

        return response()->json(['subject1' => $subject1, 'subject2' => $subject2]);
    }
    public function create()
    {
    }


    public function login(Request $request)
    {
        $validator1 = Validator::make($request->all(), [
            'username' => 'required|string|between:5,17|regex:/^\S*$/u',
        ]);
        if ($validator1->fails()) {
            return response()->json(['success' => false, 'type' => "tk", 'msg' => 'Tên đăng nhập phải có độ dài từ 5-17 kí tự (không được có dấu cách)']);
        }
        // Nếu dữ liệu password không hợp lệ, trả về thông báo lỗi
        $validator2 = Validator::make($request->all(), [
            'password' => 'required|string|min:6',
        ]);
        if ($validator2->fails()) {
            return response()->json(['success' => false, 'type' => 'mk', 'msg' => 'Mật khẩu phải có ít nhất 6 kí tự']);
        }
        $user = UserWeb::where('username', $request->input('username'))->first();
        if ($user && Hash::check($request->input('password'), $user->password)) {
            // $token = $user->createToken('token-name')->plainTextToken;
            return response()->json(['success' => true,]);
        }
        return response()->json(['success' => false, 'msg' => 'Tên người dùng hoặc mật khẩu không chính xác',]);
    }
}
