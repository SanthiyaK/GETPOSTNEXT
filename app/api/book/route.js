
import dbconnect from "@/db/dbconnect";
import BookModels from "@/model/BookModel";
import { NextResponse } from "next/server";

export async function GET(){
    dbconnect()
    const BookRoute=await BookModels.find({})
    return NextResponse.json({BookRoute})
}
 /* export async function POST(req){
  dbconnect()
  const {bookName,categoryName}=await req.json()
  const bookpost=new BookModels({bookName,categoryName})
  await bookpost.save()
  return NextResponse.json({bookpost},{status:201})
}  */
