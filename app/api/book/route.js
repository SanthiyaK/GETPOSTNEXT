

import dbconnect from "@/db/dbconnect";
import BookModels from "@/model/BookModel";
import { NextResponse } from "next/server";


export async function GET(){

    dbconnect()
    const BookRoute= await BookModels.find({})
    return NextResponse.json({BookRoute})
}