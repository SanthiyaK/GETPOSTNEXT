


import dbconnect from "@/db/dbconnect";
import BookModels from "@/model/BookModel";
import { NextResponse } from "next/server";

export async function GET(req,{params}){
    const {id} = await params;
    dbconnect()
    const BookRou=await BookModels.findById({_id:id})
    return NextResponse.json({BookRou})
}
export async function PUT(req, { params }) {
    const { id } =await params; // Get the book ID from the URL parameters

   
        // Connect to the database
        await dbconnect();

        // Parse the JSON body
        const { bookName, categoryName } = await req.json();

        // Update the book in the database
        const updatedBook = await BookModels.findByIdAndUpdate(id, {
             bookName,
             categoryName
        }, { new: true }); // Return the updated document
        return NextResponse.json({ updatedBook }, { status: 200 });
   
}
