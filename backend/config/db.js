import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mirsaifali2004:9cfO5GWakDQqGHwE@tomato.2o0b4.mongodb.net/?retryWrites=true&w=majority&appName=Tomato').then(()=>console.log("DB Connected"));
}

