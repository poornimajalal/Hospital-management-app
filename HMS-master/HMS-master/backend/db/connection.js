const mongoose = require("mongoose");
const service=require('../model/service')


const PORT = 5000;



 mongoose_connection = async(app)=>{
  mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    
    console.log("db connected success");
     
    app.listen(PORT,() => {
      console.log(`listening at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
 
 }
  module.exports = mongoose_connection;

