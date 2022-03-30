import EmployeeData from "../models/office.js"
//const Employee =require('../models/office') 
export const getEmployees = async (req,res) => {
   // res.send('Router is working')
try {
    const allEmployees = await EmployeeData.find();
//console.log( "allEmployees")
   return res.status(200).json(allEmployees);
} catch (error) {
   return res.status(404).json({message:error.message});
}
}


export const createEmployees = async (req,res) => {
    //res.send('Router is working')
    const {employee} = req.body;
     //const employee ="test";
     console.log(employee)
     //console.log(req.body)
    const newEmployees = new EmployeeData(employee)
    try {
       await newEmployees.save()

       res.status(201).json(newEmployees);
    } catch (error) {
        res.status(409).json({message:error.message});  
    }
}


export const deleteEmployee = async (req,res) => {
   
  const id=req.params.id;

   try {
      await EmployeeData.findByIdAndRemove(id).exec()
      res.send(' successfully delete')
   } catch (error) {
       console.log(error)
   }
}
