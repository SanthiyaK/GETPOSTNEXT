"use client"

import axios from "axios";

export default  function Home({params}) {
  
 /* const fetchSingleItem =async()=>{
   const {id}=await params;
  const response= await axios.get(`http://localhost:3000/api/book/${id}`)
   console.log(response.data) 
 }
    fetchSingleItem() */
    const handleSubmit = async (event) => {
      event.preventDefault(); 
      const {id}=await params;
      const formData = new FormData(event.target); 
      const bookname = formData.get('book');
      const categoryname = formData.get('category');
      const response= await axios.put(`http://localhost:3000/api/book/${id}`,{bookname,categoryname})
       console.log(response.data) 
       event.target.reset();      }
   
  return (
    <form onSubmit={handleSubmit}>
        <label className="bg-green-200">Book Name</label>
        <input type="text"
         placeholder="Enter Your Book Name"
         name="book" required/>
        <br />
        <label>Category Name</label> 
        <input type="text" 
        placeholder="Enter Your Category Name"
         name="category" required/>
        <br />
        <button type="submit">Edit</button>
        <br/>
        <button type="submit">Delete</button>
      </form>
  );
}
