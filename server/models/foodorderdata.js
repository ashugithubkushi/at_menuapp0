const mongoose = require ('mongoose');



const OrderSchema = new mongoose.Schema({  elder: {
     selectedElder: Number,
    tableData: [{ option: String, count: Number }]
  },
  children: {
    selectedChildren: Number,
    childrenTableData: [{ option: String, count: Number }]
  },
  status: String,
  orderDateTime :  { type : Date, default: Date.now },
  
});

const UserSchema = new mongoose.Schema({
       username: String,
       email: String,
       password: String,

});

const LoginSchema = new mongoose.Schema({
       email: String,
       password: String,

});
const RegisterDataSchema= new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        confirmpassword: String,
});

//admin register data
const AdminRegisterDataSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});



const OrderModel = mongoose.model("fod", OrderSchema);
// const CombinedDataModel = mongoose.model("CombinedData", CombinedDataSchema);
const UserModel = mongoose.model("user", UserSchema);
const LoginModel = mongoose.model("login", LoginSchema);
const RegisterDataModel = mongoose.model("registerdata", RegisterDataSchema);
const AdminRegisterDataModel = mongoose.model("adminRegisterData", AdminRegisterDataSchema);

module.exports = {OrderModel, UserModel, LoginModel, RegisterDataModel,AdminRegisterDataModel };



