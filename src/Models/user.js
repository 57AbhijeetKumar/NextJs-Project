const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    about:{
        type:String,
        require:true
    }
})

const userModel = mongoose.models.user || new mongoose.model("user",userSchema);

export {userModel}