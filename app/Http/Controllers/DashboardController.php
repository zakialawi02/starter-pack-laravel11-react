<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        if (Auth::user()->role == 'admin') {
            return Inertia::render('Dashboard/Dashboard', []);
        } elseif (Auth::user()->role == 'writer') {
            return Inertia::render('Dashboard/Dashboard', []);
        } else {
            return Inertia::render('Dashboard/Dashboard', []);
        }
    }

    public function getInfo()
    {
        $totalUsers = User::count();
        $data = [
            'totalPosts' => 45,
            'totalPublishedPosts' => 5,
            'totalComments' => 1,
            'totalUsers' => $totalUsers
        ];

        return response()->json($data);
    }
}
