"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function BookForm({params}) { // Receive onAdd as a prop
  const[books,setBooks]=useState([])
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {id}=await params;
    const formData = new FormData(event.target);
    const bookName = formData.get("book");
    const categoryName = formData.get("category");
      const response = await axios.put(`http://localhost:3000/api/book/${id}`, {
        bookName,
        categoryName,
      });
      console.log("New book added:", response.data); // Log the new book
       // Call the onAdd function with the new book
       const newBook = response.data.bookpost;
       setBooks([...books, newBook]); 
      event.target.reset();
      router.push('/')
    
  };
 
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label className="bg-green-200">Book Name</label>
      <input
        type="text"
        placeholder="Enter Your Book Name"
        name="book"
        required
      />
      <br />
      <label>Category Name</label>
      <input
        type="text"
        placeholder="Enter Your Category Name"
        name="category"
        required
      />
      <br />
      <button type="submit">Submit</button>
      <br />
     
    </form>
   
    {/* {books.map((book) => (
            <li key={book._id}>
              {book.bookName} - {book.categoryName}
            </li>))} */}
    
    </>
  );
}






 /* const fetchSingleData=async()=>{
    const {id}=await params;
  const response=await axios.get(`http://localhost:3000/api/book/${id}`)
  console.log(response.data);
  
  }
  fetchSingleData() */