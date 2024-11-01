import dbconnect from "@/db/dbconnect";
import BookModels from "@/model/BookModel";
import { NextResponse } from "next/server";


export async function GET(req,{params}){
    const {id} =await params;
    dbconnect()
    const BookRoute= await BookModels.findById({_id:id})
    return NextResponse.json({BookRoute})
}