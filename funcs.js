

const Customers = require("./model/customerModel")


const handleGetCustomersRequest = async(req, res)=>{
  const customers = await Customers.find()
  return res.status(200).json(
    {message: "The total Number of Customers is",
    count: customers.length,
    customers
    })

}

const handlePostRequest = async(req, res)=>{
  const {firstName, lastName, email, password, address, age, gender,
     occupation, edu_level, income_amount} = req.body

  const newCustomer = new Customers({firstName, lastName, email, password, address,
     age, gender, occupation, edu_level, income_amount})

  if(!firstName){
    return res.status(400).json({message: "please enter your first name..."})
    
  }
  if(!lastName){
    return res.status(400).json({message: "please enter your lasst name..."})
    
  }
  if(!email){
    return res.status(400).json({message: "please enter your email..."})
    
  }
  if(!password){
    return res.status(400).json({message: "please enter your password..."})
    
  }
  if(!address){
    return res.status(400).json({message: "please enter your address..."})
    
  }
  if(!age){
    return res.status(400).json({message: "please enter your lasst name..."})
    
  }
  if(!gender){
    return res.status(400).json({message: "please enter your lasst name..."})
    
  }
  if(!occupation){
    return res.status(400).json({message: "please enter your lasst name..."})
    
  }
  if(!income_amount){
    return res.status(400).json({message: "please enter your lasst name..."})
    
  }
    await newCustomer.save()
   return res.status(200).json({
    message: "success",
    customers: newCustomer

  })
}

const handleEditCustomerRequest = async(req, res)=>{

  const { id } = req.params
  
  const { firstName, lastName, email, password, address,
    age, gender, occupation, edu_level, income_amount } = req.body

    const editcustomer = await Customers.findByIdAndUpdate(
      id,

      { firstName, lastName, email, password, address,
        age, gender, occupation, edu_level, income_amount},
        {new: true}
    )

    return res.status(200).json({
      message: "successful",
      customers: editcustomer
    })
}

const handleDeleteCustomerRequest = async(req, res)=>{

  const {id} = req.params

  const deletedcustomer = await Customers.findByIdAndDelete(id)

  return res.status(200).json({
    message: "Customer was deleted successfully"
  })
}




module.exports = {
    handleGetCustomersRequest, 
    handlePostRequest,
    handleEditCustomerRequest,
    handleDeleteCustomerRequest
}

