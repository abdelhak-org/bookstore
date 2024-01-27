const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

// create a schema
const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required:true ,
      unique: true,
      minLength: 6,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required:true,
      minlength:6
    },
  },
  { timeStampes: true }
);
// hash a password 

userSchema.pre("save" , async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await  bcrypt.hash(this.password , salt )
    next()
})



 // create a model
const User = mongoose.model("user" , userSchema) ;

module.exports = User ;