const express=require('express')
const router=express.Router();
const Task=require('../Models/Product.model')
const TaskController=require('../Controllers/Task.Controller')

// GET /tasks: Fetch all tasks.
// • GET /tasks/:id: Fetch a single task by ID.
// • POST /tasks: Add a new task.
// • PUT /tasks/:id: Update a task by ID.
// • DELETE /tasks/:id: Delete a task by ID.

//route to get all tasks
router.get('/tasks',async(req,res)=>{
    try {
        const results = await Task.find({}, { __v: 0 });
        if(!results) return res.send("Task Not Found")
        res.send(results)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message:"Unable to get task in DB"
        })
    }
}) 

//route add new task
router.post('/task',TaskController.Addtask)

//Update a task by ID
router.put('/tasks/:ID',TaskController.Updatetask)

// route to get single task
router.get('/tasks/:ID',TaskController.GetSingletask)


//route to delete single task
router.delete('/tasks/:ID',TaskController.Deletetask)

module.exports=router;


