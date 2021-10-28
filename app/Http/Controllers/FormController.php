<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $form_data = Form::all();
        // return response()->json([
        //     'status' => 200,
        //     'form_data' => $form_data,

        // ] );
        return  Form::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    


    public function store(Request $request) {
        $form = new Form;

        $request-> validate([
            'title'=>'required',
            'link'=>'required',
            'color'=>'required',
            
        ]);
        $form->title = $request->input('title');
        $form->link = $request->input('link');
        $form->color = $request->input('color');
        $form->boxId = $request->input('boxId');
        $form->save();

        return response()->json([
            'status' => 200,
            'message' => "Form submitted successfully."

        ] );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $boxId
     * @return \Illuminate\Http\Response
     */
    public function show($boxId)
    {
        
        return Form::find($boxId);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $boxId)
    {
        $form_edit = Form::where('boxId', $boxId);
        $form_edit->update($request->all());
        return $form_edit->get();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    /**
     * 
     *
     * @param  int  $boxId
     * @return \Illuminate\Http\Response
     */
    public static function findBoxId($boxId)
    {
        // $link_setup = Form::where('boxId', $boxId)->first();
        // return response()->json([
        //     'status' => 200,
        //     'link_setup' => $link_setup,

        // ] );
        return Form::where('boxId', $boxId)->first();
    }

    

    
    
}
