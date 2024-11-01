const { default: mongoose } = require("mongoose");


const BookSchema=new mongoose.Schema({
    bookname:{type:String},
    categoryname:{type:String}
})

const BookModels= mongoose.models.Book || mongoose.model("Book",BookSchema)

export default BookModels;