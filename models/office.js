import mongoose from 'mongoose'

const employeeSchema = mongoose.Schema({

    empNo:Number,
    name: String,
    email:String,
    salary:Number,
    phone:{
        type:Number
    },
    section:{
        type:String,
        default:"A"
    }
})
//console.log(employeeSchema)

const employee = mongoose.model('employee',employeeSchema);
 export default employee
