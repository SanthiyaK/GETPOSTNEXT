"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function BookForm() { // Receive onAdd as a prop
  const[books,setBooks]=useState([])
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const bookName = formData.get("book");
    const categoryName = formData.get("category");
      const response = await axios.post("http://localhost:3000/api/book", {
        bookName,
        categoryName,
      });
      console.log("New book added:", response.data); // Log the new book
       // Call the onAdd function with the new book
       setBooks([...books, response.data.bookpost]); 
      event.target.reset();
    
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
   
    {books.map((book, index) => (
            <li key={index}>
              {book.bookName} - {book.categoryName}
              <Link href={`/book/${book._id}`}>
                <button>Edit</button>
              </Link>
            </li>))}
    
    </>
  );
}

/* "use client";

import axios from "axios";
import { useEffect, useState } from "react";
import BookForm from "@/components/BookForm"; // Import the BookForm component

export default function Home() {
  const [tasks, setTasks] = useState([]); // Initialize as an empty array
 
  // Fetching books from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/book");
        console.log("Fetched books:", response.data); // Log the response
        setTasks(response.data); // Ensure this is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Function to handle adding a new book
  const addBook = (newBook) => {
    console.log("Adding book:", newBook); // Log the new book being added
    setTasks(newBook); // Ensure prevTasks is an array
  };
  console.log(tasks);
  
  return (
    <>
      <BookForm onAdd={addBook} /> {}
    </>
  );
}
 */