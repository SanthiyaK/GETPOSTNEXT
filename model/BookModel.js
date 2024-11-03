const { default: mongoose } = require("mongoose");


const BookSchema=new mongoose.Schema({
    bookName:{type:String},
    categoryName:{type:String}
})
const BookModels= mongoose.models.BookDet ||mongoose.model("BookDet",BookSchema)
export default BookModels;