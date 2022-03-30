import Office from "../models/Office.js"
//const Office =require('../models/Office') 


export const getEmployees = async (req,res) => {
   // res.send('Router is working')
try {
    const allEmployees = await Office.find();
//console.log( "allEmployees")
   return res.status(200).json(allEmployees);
} catch (error) {
   return res.status(404).json({message:error.message});
}
}


export const createEmployees = async (req,res) => {
    //res.send('Router is working')
    const {employees} = req.body;
     //const employee ="test";
     console.log(employees)
     //console.log(req.body)
   
    try {
      const newEmployees = new Office(employees)
       await newEmployees.save()

       res.status(201).json(newEmployees);
    } catch (error) {
        res.status(409).json({message:error.message});  
    }
}


export const deleteEmployee = async (req,res) => {
   
  const id=req.params.id;

   try {
      await Office.findByIdAndRemove(id).exec()
      res.send(' successfully delete')
   } catch (error) {
       console.log(error)
   }
}