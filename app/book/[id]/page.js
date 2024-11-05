
   "use client"
   import React from 'react'
   
   export default function page() {
    const fetchSingleData=async()=>{
      const {id}=await params;
    const response=await axios.get(`http://localhost:3000/api/book/${id}`)
    console.log(response.data);
    
    }
    fetchSingleData()
     return (
       <div>page</div>
     )
   }
   






