

const mongoose = require("mongoose")


//All customers personal information

const customerSchema = new mongoose.Schema({
    firstName: {type: String, require},
    lastName: {type: String, require},
    email: {type: String, require},
    password: {type: String, require},
    address: {type: String, require},
    age: {type: String, require},
    gender: {type: String, require},
    occupation: {type: String, require},
    edu_level: {type: String, require},
    income_status: {type: String, require}
})


const Customers  = new mongoose.model("Customer", customerSchema)


module.exports = Customers
    
