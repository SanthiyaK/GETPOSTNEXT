"use client"

import axios from "axios";

export default  function Home() {
  
 const fetchItem =async()=>{
  const response= await axios.get("http://localhost:3000/api/book")
  /* console.log(response.data) */
 }
    fetchItem()
   
  return (
    <div>Hello friends</div>
  );
}
