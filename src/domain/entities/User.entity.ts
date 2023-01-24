import mongoose from "mongoose";


export const UserEntity = () => {

    let userSchema = new mongoose.Schema(
        {
            name: String,
            email: String,
            age: Number
        }
    )

    return mongoose.model('Users', userSchema)
}