"use client"

import axios from "axios";

export default  function Home({params}) {
  
 const fetchSingleItem =async()=>{
   const {id}=await params;
  const response= await axios.get(`http://localhost:3000/api/book/${id}`)
   console.log(response.data) 
 }
    fetchSingleItem()
   
  return (
    <div>Hello friends</div>
  );
}
