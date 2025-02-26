const express = require('express');

const app = express()

app.use(express.json())

let data = [{user: "rohit", Job: "Software guy"}, {user: "rahul", Job: "Software Person"}]


app.get('/:user', (req,res)=>{
    try {
        const {user} = req.params;
        if(!user){
            return res.status(401).json({message: "User parameter cannot be empty"})
        }
    
        const userDetails = data.find(el=> el.user === user);
        if(!userDetails){
            return res.status(404).json({message: "User not found!"})
        }
    
        return res.json({message: "User found", data: {userDetails}})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
})




app.listen(8080, ()=>{
    console.log("Server is running at 8080")
})