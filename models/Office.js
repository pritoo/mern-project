import mongoose from 'mongoose'

const employeeSchema = mongoose.Schema({

    empNo:String,
    name: String,
    email:String,
    salary:String,
    phone:String,
    section:String
})
//console.log(employeeSchema)

const Office = mongoose.model('Office',employeeSchema);
 export default Office