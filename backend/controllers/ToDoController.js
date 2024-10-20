const ToDoModel=require('../models/ToDoModel')

module.exports.getToDo   = async (req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async (req, res) => {
    const {text} = req.body;
    ToDoModel
    .create({text})
    .then((data)=>{console.log("Added Successfully");
        console.log(data);
        res.send(data);
    })
}

module.exports.updateToDo = async (req,res) =>
{
    const {_id,text} = req.body;
    ToDoModel.findByIdAndUpdate(_id,{text})
    .then(()=> res.send("Updated Successfully"))
    .catch((err)=>console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;
    try {
        await ToDoModel.findByIdAndDelete(_id);
        const updatedToDoList = await ToDoModel.find(); // Fetch the updated list
        res.send(updatedToDoList); // Send the updated list to the frontend
    } catch (err) {
        console.log(err);
        res.status(500).send("Error deleting the ToDo item");
    }
}