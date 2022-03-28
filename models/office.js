import mongoose from 'mongoose'

const employeeSchema = mongoose.Schema({
    employmentnumber:Number,
    name: String,
    email:String,
    salary:Number,
    section:{
        type:String,
        default:"A"
    },
    subject:[String]
})

const employee = mongoose.model('employee',employeeSchema);
 export default employee 