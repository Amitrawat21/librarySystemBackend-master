import bookModel from "../Model/bookSchema.js";
class Book{
    constructor(){}

    static addBook = async(req,res) => {
      const {title , author , quantity , available , isAvailable} = req.body;

      if (!title || !author) {
        res.send("please enter required details");
      }
      try{
        
        const book = new bookModel({
            title:title,
            author:author,
            quantity:quantity,
            available:available,
            isAvailable:isAvailable
        });

        const data = await book.save();
        res.status(200).send({"message":"book saved successfully" , "data" : data});

      }
      catch(err) {
        console.log(err);
        res.send(err);
      }
    }

    static getAllBooks = async(req,res) => {
      try
      {
        const books = await bookModel.find();
      res.send(books);

      }
      catch(err){
        res.status(500).send(err);
      }
      
      }
      
}


export default  Book;