import mongoose from "mongoose"




const doctorSchema = new mongoose.Schema({
    name:String,
    speciality:String,
    Location:String,
    experience:String,
    rating:String,
    availability:[String],
    consultationFee:Number,
    image:String,
   
},
{timestamps:true})


export default mongoose.model("Doctor" , doctorSchema);

