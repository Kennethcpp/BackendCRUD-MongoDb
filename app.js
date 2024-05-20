

const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const funcs = require("./funcs")


dotenv.config()
 

const app = express()

// middleware
app.use(express.json())


const PORT=process.env.PORT || 9000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})



mongoose.connect(process.env.MONGODB_URL)  
.then(()=> console.log("The database is Connected successfully..."))



app.get("/all_customers", funcs.handleGetCustomersRequest)
app.post("/add_customer", funcs.handlePostRequest)
app.put("/edit_customer/:id", funcs.handleEditCustomerRequest)
app.delete("/delete_customer/:id", funcs.handleDeleteCustomerRequest)


