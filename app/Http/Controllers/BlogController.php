<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\blog;

class BlogController extends Controller
{
    public function index()
    {
        return response()->json(Blog::all());
    }
    public function getblog($id)
    {
        return response()->json(Blog::find($id));
    }


    public function add(Request $request)
    {
        Blog::create([
            'title' => $request->title,
            'catagory' => $request->catagory,
            'name' => $request->name,
            'content1' => $request->content1,
            'content2' => $request->content2,
            'content3' => $request->content3,
            'image1' => $request->image1,
            'image2' => $request->image2,
            'image3' => $request->image3,

        ]);
        return response()->json([
            'status' => 200,
            'message' => 'đã thêm vào database'
        ]);
    }

    public function update(Request $request, $id)
    {
        Blog::where("id", $id)->update([
            'title' => $request->title,
            'catagory' => $request->catagory,
            'name' => $request->name,
            'content1' => $request->content1,
            'content2' => $request->content2,
            'content3' => $request->content3,
            'image1' => $request->image1,
            'image2' => $request->image2,
            'image3' => $request->image3,
        ]);
        return response()->json([
            'status' => 200,
            'message' => 'cập nhật thành công'
        ]);
    }


    public function delete($id)
    {
        Blog::destroy($id);
        return response()->json([
            'status' => 200,
            'message' => 'Đã xóa thành công'
        ]);
    }
}
