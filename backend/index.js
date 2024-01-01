const express = require("express")
const app = express();
const { createTodo, updateTodo } = require("./types");
const {todos} = require("./db.js");

app.use(express.json());

app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }
    await todos.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({msg : "todo created"})
})

app.get("/todos",async function(req,res){
    const todos = await todos.find({});
    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsedUpdatedPayload = updatePayload.safeParse(updatePayload);
    if(!parsedUpdatedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }

    await todo.update({
        _id : req.body.id
    },{
        completed : true
    })

    res.json({
        msg : "Todo is updated"
    })
})

app.listen(3000);