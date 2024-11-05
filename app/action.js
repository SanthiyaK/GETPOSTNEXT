
"use server"

import dbconnect from "@/db/dbconnect"
import BookModels from "@/model/BookModel"

export async function addBook(formData) {
   const bookName=formData.get("book")
   const categoryName=formData.get("category")
   dbconnect()
   const bookpost=new BookModels({bookName,categoryName})
  const result=await bookpost.save()
  const plainResult={
    _id:result._id.toString(),
    bookName:result.bookName,
    categoryName:result.categoryName
  }
  return plainResult
}
