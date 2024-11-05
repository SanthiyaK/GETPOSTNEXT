import { addBook } from "./action";



export default  function BookForm() {
   
  return (
    <>
    <form  action={addBook}
     className="m-20">
       <h1 className="m-10">POST Form</h1>  
     <label className="m-10  p-1 mb-5 ">Book Name</label> <br/>
      <input className=" border border-blue-500 rounded m-2 "
       type="text" 
       name="book"/>
       <br/>
     <label className="m-10 p-2">Category Name</label><br/>
      <input className="border border-blue-500 rounded m-1" 
       type="text" 
       name="category"/>
       <br/>
     <button className="m-10 bg-violet-500 p-2" 
       type="submit">Submit
     </button>
    </form>
    
    
    </>
  )
}
