"use client";

import axios from "axios";

export default function BookForm({ onAdd }) { // Receive onAdd as a prop
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
      onAdd(response.data); // Call the onAdd function with the new book
      event.target.reset();
    
  };

  return (
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
    </form>
  );
}
