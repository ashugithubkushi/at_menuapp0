const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const {OrderModel, UserModel, LoginModel, RegisterDataModel, AdminRegisterDataModel } = require('./models/foodorderdata')


const app = express()
app.use(cors())
app.use(express.json())

// mongoose.connect('mongodb://127.0.0.1:27017/FoodOrderApp')
mongoose.connect('mongodb://127.0.0.1:27017/FoodOrderApp');

app.get('/', (req, res) => {
    console.log('mydata',req.body)
    OrderModel.find({})
    // UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/createOrder", (req, res) => {
    console.log('mydata',req.body)
    OrderModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// app.get('/getUser/:id', (req, res) => {
//         const id = req.params.id;
//         UserModel.findById({_id:id})
//         .then(users => res.json(users))
//         .catch(err => res.json(err))
// })


// app.put('/updateUser/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel.findByIdAndUpdate({_id:id}, {
//         name: req.body.name, 
//         email: req.body.email,
//         age: req.body.age})
//   .then(users => res.json(users))
//   .catch(err => res.json(err))
// })


// app.delete('/deleteUser/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel.findByIdAndDelete({_id: id})
//   .then(res => res.json(res))
//   .catch(err => res.json(err))
// })


app.post("/createLogin", (req, res) => {
    console.log('mydata',req.body)
    LoginModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


// user
app.get('/registerData', (req, res) => {
    RegisterDataModel.find({})
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ message: err.message }));
});

// profile
// 1
// app.get('/users', (req, res) => {
//     UserModel.find({})
//     .then(data => res.json(data))
//     .catch(err => res.status(500).json({ message: err.message }));
// });

// 2
app.get("/users", (req, res) => {
    UserModel.find()
      .then(users => res.json(users))
      .catch(err => res.status(500).json({ error: err.message }));
  });

//admin
app.get('/adminRegisterData', (req, res) => {
    AdminRegisterDataModel.find({})
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ message: err.message }));
});
app.post("/createRegisterData", (req, res) => {
    console.log('mydata',req.body)
    RegisterDataModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//profile
app.post("/createUser", (req, res) => {
    console.log('mydata',req.body)
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.post("/createRegisterData", async (req, res) => {
    try {
        const existingUser = await RegisterDataModel.findOne({ email: req.body.email });
        if (existingUser) {
            // Email already exists, return an error response
            return res.status(409).json({ message: "Email already exists" });
        } else {
            // Email doesn't exist, create a new registration entry
            const newUser = await RegisterDataModel.create(req.body);
            return res.status(201).json(newUser);
        }
    } catch (error) {
        // Handle any errors
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});



// Create a new admin registration data
app.post("/createAdminRegisterData", async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if the user exists in the AdminRegisterDataModel collection
        const user = await AdminRegisterDataModel.findOne({ email, password });
        if (user) {
            // User is authenticated, return success response
            return res.status(200).json({ isAuthenticated: true });
        } else {
            // Unauthorized user, return specific error response
            return res.status(401).json({ isAuthenticated: false, message: "Invalid email or password" });
        }
    } catch (error) {
        // Handle any errors
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});





// Login Endpoint
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await RegisterDataModel.findOne({ email, password });
//         if (user) {
//             // User is authenticated, return success response
//             return res.status(200).json({ isAuthenticated: true });
//         } else {
//             // Unauthorized user, return error response
//             return res.status(401).json({ isAuthenticated: false, message: "Unauthorized user" });
//         }
//     } catch (error) {
//         // Handle any errors
//         console.error(error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await RegisterDataModel.findOne({ email, password });
        if (user) {
            // User is authenticated, return success response
            return res.status(200).json({ isAuthenticated: true });
        } else {
            // Unauthorized user, return specific error response
            return res.status(401).json({ isAuthenticated: false, message: "Invalid email or password" });
        }
    } catch (error) {
        // Handle any errors
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

//admin
app.post("/user", async (req, res) => {
    try {
      const { email, password } = req.body;
      // Check if the user exists in the AdminRegisterDataModel collection
      const user = await AdminRegisterDataModel.findOne({ email, password });
      if (user) {
        // User is authenticated, return success response
        return res.status(200).json({ isAuthenticated: true });
      } else {
        // Unauthorized user, return specific error response
        return res.status(401).json({ isAuthenticated: false, message: "Unauthorized user" });
      }
    } catch (error) {
      // Handle any errors
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });



// UN & PASSWORD verification
app.post('/https://jsonplaceholder.typicode.com/login', (req, res) => {
    const { email, password } = req.body;

    if (email === 'admin' && password === 'secret') {
        const token = 
        jwt.sign({email} , secretKey, {expiresIn: '1h'});

        res.cookie('jwt', token, {httpOnly: true, maxAge: 3600000});
        res.json({isAuthenticated: true , message: 'Login successful'});
    }
    else{
        res.status(401)
        .json({isAuthenticated: false, error: 'Invalid credentials'});
    }
});


//admin
app.post('/https://jsonplaceholder.typicode.com/user', (req, res) => {
    const { email, password } = req.body;

    if (email === 'admin' && password === 'secret') {
        const token = 
        jwt.sign({email} , secretKey, {expiresIn: '1h'});

        res.cookie('jwt', token, {httpOnly: true, maxAge: 3600000});
        res.json({isAuthenticated: true , message: 'Login successful'});
    }
    else{
        res.status(401)
        .json({isAuthenticated: false, error: 'Invalid credentials'});
    }
});





// app.put("/updateStatus/:id", (req, res) => {
//     console.log('mydata',req.body)
//     const id = req.params.id;
//     OrderModel.findByIdAndUpdate({_id:id}, {
//         status: req.body.orderStatus})
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })

app.put('/updateStatus/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.body.status)
    OrderModel.findByIdAndUpdate({_id:id}, {
        status: req.body.status})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})


//forgotpassword
app.post("/validateEmail", async (req, res) => {
    try {
        const { email } = req.body;
        const user = await RegisterDataModel.findOne({ email });
        if (user) {
            // Email exists in the database
            return res.status(200).json({ isValid: true });
        } else {
            // Email doesn't exist in the database
            return res.status(404).json({ isValid: false, message: "Email not registered" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});


//adminforgotpassword
app.post("/adminvalidateEmail", async (req, res) => {
    try {
        const { email } = req.body;
        const user = await AdminRegisterDataModel.findOne({ email });
        if (user) {
            // Email exists in the database
            return res.status(200).json({ isValid: true });
        } else {
            // Email doesn't exist in the database
            return res.status(404).json({ isValid: false, message: "Email not registered" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});




//reset password
app.put('/resetPassword', async (req, res) => {
    try {
      const { email, newPassword } = req.body;
  
      // Find the user by email
      const user = await RegisterDataModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update the user's password
      user.password = newPassword;
      await user.save();
  
      // Password updated successfully
      return res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });



//admin reset password
app.put('/adminresetPassword', async (req, res) => {
    try {
      const { email, newPassword } = req.body;
  
      // Find the user by email
      const user = await AdminRegisterDataModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update the user's password
      user.password = newPassword;
      await user.save();
  
      // Password updated successfully
      return res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

app.listen(3000, () => {
    console.log("server is running")
})














// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const { OrderModel, UserModel, LoginModel, RegisterDataModel } = require('./models/foodorderdata');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://127.0.0.1:27017/FoodOrderApp');

// // Get all orders
// app.get('/', (req, res) => {
//     OrderModel.find({})
//     .then(users => res.json(users))
//     .catch(err => res.json(err));
// });

// // Create a new order
// app.post("/createOrder", (req, res) => {
//     OrderModel.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err));
// });

// // Create a new user
// app.post("/createUser", (req, res) => {
//     UserModel.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err));
// });

// // Create a new login
// app.post("/createLogin", (req, res) => {
//     LoginModel.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err));
// });

// // Get all registered users
// app.get('/registerData', (req, res) => {
//     RegisterDataModel.find({})
//     .then(data => res.json(data))
//     .catch(err => res.status(500).json({ message: err.message }));
// });

// // Create a new registration data
// app.post("/createRegisterData", async (req, res) => {
//     try {
//         const existingUser = await RegisterDataModel.findOne({ email: req.body.email });
//         if (existingUser) {
//             // Email already exists, return an error response
//             return res.status(409).json({ message: "Email already exists" });
//         } else {
//             // Email doesn't exist, create a new registration entry
//             const newUser = await RegisterDataModel.create(req.body);
//             return res.status(201).json(newUser);
//         }
//     } catch (error) {
//         // Handle any errors
//         console.error(error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });

// // Verify email before resetting password
// app.post("/validateEmail", async (req, res) => {
//     try {
//         const { email } = req.body;
//         const user = await RegisterDataModel.findOne({ email });
//         if (user) {
//             // Email exists in the database
//             return res.status(200).json({ isValid: true });
//         } else {
//             // Email doesn't exist in the database
//             return res.status(404).json({ isValid: false, message: "Email not registered" });
//         }
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });

// // Reset password
// app.put('/resetPassword', async (req, res) => {
//     try {
//         const { email, newPassword } = req.body;
//         const user = await RegisterDataModel.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         user.password = newPassword;
//         await user.save();
//         return res.status(200).json({ message: 'Password updated successfully' });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// });


// //
// app.listen(3000, () => {
//    console.log("Server is running");
// });
