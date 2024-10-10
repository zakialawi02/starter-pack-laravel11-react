<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::orderBy(request("sort_field", 'created_at'), request("sort_direction", "desc"));

        if (request('search') && request()->get("search") != "") {
            $users = $users->where('name', 'like', '%' . request()->get("search") . '%')
                ->orWhere('email', 'like', '%' . request()->get("search") . '%')
                ->orWhere('role', 'like', '%' . request()->get("search") . '%')
                ->orWhere('created_at', 'like', '%' . request()->get("search") . '%');
        }

        if (request("role") && request()->get("role") != "" && request()->get("role") != "all") {
            $users = $users->where('role', request()->get("role"));
        }

        $users = $users->paginate(25)->withQueryString();

        $data = [
            'title' => 'List User',
        ];

        return Inertia::render('Dashboard/User/Index', [
            'meta' => $data,
            'users' => $users,
            'queryParams' => request()->query() ?: null
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|min:3|max:255',
            'username' => [
                'required',
                'min:4',
                'max:25',
                'alpha_num',
                'regex:/^[\w]+$/', // ensures underscores are allowed
                'unique:users',
            ],
            'role' => 'required|in:admin,writer,user',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
        ]);
        $user = User::create($validated);
        $data = User::where('id', $user->id)->first();
        $data['created_at'] = $data->created_at->format('d M Y');

        return response()->json(['user' => $data]);
    }

    public function getUser(User $user)
    {
        return response()->json(['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => 'required|min:3|max:255',
            'username' => [
                'required',
                'min:4',
                'max:25',
                'alpha_num',
                'regex:/^[\w]+$/',
                'unique:users,username,' . $user?->id,
            ],
            'role' => 'required|in:admin,writer,user',
            'email' => 'required|email|unique:users,email,' . $user?->id,
            'password' => 'nullable|min:6',
        ]);

        if (empty($validated['password'])) {
            unset($validated['password']);
        } else {
            $validated['password'] = bcrypt($validated['password']);
        }

        $user->update($validated);
        $user = User::where('id', $user->id)->first();

        return response()->json(['user' => $user, 'message' => 'User updated successfully']);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        User::where('id', $user->id)->delete();

        return response()->json(['message' => 'User deleted successfully']);
    }
}
