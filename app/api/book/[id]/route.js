import dbconnect from "@/db/dbconnect";
import BookModels from "@/model/BookModel";
import { NextResponse } from "next/server";


export async function GET(req,{params}){
    const {id} =await params;
    dbconnect()
    const BookRoute= await BookModels.findById({_id:id})
    return NextResponse.json({BookRoute})
}



export async function PUT(req, { params }) {
    const { id } =await params; // Get the book ID from the URL parameters

   
        // Connect to the database
        await dbconnect();

        // Parse the JSON body
        const { bookname, categoryname } = await req.json();

        // Update the book in the database
        const updatedBook = await BookModels.findByIdAndUpdate(id, {
             bookname,
             categoryname
        }, { new: true }); // Return the updated document
        return NextResponse.json({ updatedBook }, { status: 200 });
   
}



export async function DELETE(req, { params }) {
    const { id } = params; // Get the book ID from the URL parameters
        // Connect to the database
        await dbconnect();
        // Delete the book from the database
        const deletedBook = await BookModels.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Book deleted successfully' }, { status: 200 });
    
}

