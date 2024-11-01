"use client"

import axios from "axios";

export default  function Home() {
  
/*  const fetchItem =async()=>{
  const response= await axios.get("http://localhost:3000/api/book")
   console.log(response.data) 
 }
    fetchItem() */

    const handleSubmit = async (event) => {
      event.preventDefault(); 
  
      const formData = new FormData(event.target); 
      const bookname = formData.get('book');
      const categoryname = formData.get('category');
      const response= await axios.post("http://localhost:3000/api/book",{bookname,categoryname})
       console.log(response.data) 
       event.target.reset(); 
     }
      
   
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
        <button type="submit">Submit</button>
      </form>
  );
}
