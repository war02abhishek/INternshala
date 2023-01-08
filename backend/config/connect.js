import mongoose from 'mongoose';

mongoose.set("strictQuery", false);
const connectDatabase=()=>{

     mongoose
       .connect(
         "mongodb+srv://Internshala:%2318219526WaR@cluster0.zhtanew.mongodb.net/?retryWrites=true&w=majority",
         {
           useNewUrlParser: true,
         }
       )
       .then((data) => {
         console.log(
           `databse is connected with server ${data.connection.host}`
         );
       });

}
export default connectDatabase;