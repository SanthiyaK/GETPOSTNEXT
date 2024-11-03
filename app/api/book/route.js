


import dbconnect from "@/db/dbconnect";
import BookModels from "@/model/BookModel";
import { NextResponse } from "next/server";

export async function GET(){
    dbconnect()
    const BookRoute=await BookModels.find({})
    return NextResponse.json({BookRoute})
}
export async function POST(req)
{
    dbconnect()
    const { bookName, categoryName } = await req.json(); // Parse the JSON body
      // Create the user in the database
     
      const bookpost = new BookModels({bookName, categoryName  });
        await bookpost.save(); // Save the user to the database
      // Return the newly created user
      return NextResponse.json({ bookpost}, { status: 201 });
    
}