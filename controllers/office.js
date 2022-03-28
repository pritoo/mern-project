import Employee from "../models/office.js"
//const Employee =require('../models/office') 
export const getEmployees = async (req,res) => {
   // res.send('Router is working')
try {
    const allEmployees = await Employee.find();
console.log( "allEmployees")
    res.status(200).json(allEmployees);
} catch (error) {
    res.status(404).json({message:error.message});
}
}

export const createEmployees = async (req,res) => {
    //res.send('Router is working')
    //const employee = req.body;
    const employee ="test";
    console.log(employee)
    // const newEmployees = new Employee(employee)
    // try {
    //    await newEmployees.save()

    //    res.status(201).json(newEmployees);
    // } catch (error) {
    //     res.status(409).json({message:error.message});  
    // }
}