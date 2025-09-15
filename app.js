// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');
// const videoRoute = require('./routes/videoRoute.js')
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 3000;
// app.use(express.static('public'));
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views')); // Make sure your EJS files are in a 'views' folder

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



// //Routers
// const appointmentRouter  = require('./routes/appointments.js')
// // Serve static files
// const jwt = require("jsonwebtoken"); // <--- add this

// app.post('/video/token', (req, res) => {
//   const { user_id, role } = req.body;

//   try {
//     const payload = {
//       access_key: process.env.HMS_ACCESS_KEY,
//       room_id: process.env.HMS_ROOM_ID,
//       user_id: user_id || `user_${Date.now()}`,
//       role: role || 'patient',
//       type: 'app',
//       version: 2
//     };

//     const token = jwt.sign(payload, process.env.HMS_SECRET, {
//       algorithm: 'HS256',
//       expiresIn: '24h'
//     });

//     res.json({ token });
//   } catch (err) {
//     console.error('Token error:', err);
//     res.status(500).json({ error: 'Token generation failed' });
//   }
// });


// app.get('/', (req, res) => {
//     res.render('index');
// });

// // API Routes
// app.use(videoRoute)
// app.use('/api/auth', require('./routes/auth.js'));
// app.use('/api/appointments',appointmentRouter);
// app.use('/api/doctors', require('./routes/doctor.js'));
// app.use('/api/prescriptions', require('./routes/prescriptions.js'));

// // MongoDB Connection
// const connectDB = async () => {
//     try {
//         if (process.env.MONGODB_URI) {
//             await mongoose.connect(process.env.MONGODB_URI, {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true,
//             });
//             console.log('Connected to MongoDB');
//         } else {
//             console.log('MongoDB URI not provided. Running in development mode without database.');
//             console.log('To connect to MongoDB, set MONGODB_URI in your .env file');
//         }
//     } catch (err) {
//         console.log('MongoDB connection failed. Running without database connection.');
//         console.log('Error:', err.message);
//         console.log('To fix this: Make sure MongoDB is running or provide a valid MONGODB_URI');
//     }
// };

// connectDB();

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Serve static files
app.get('/', (req, res) => {
    res.render('index');
});

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/doctors', require('./routes/doctor'));
app.use('/api/prescriptions', require('./routes/prescriptions'));
app.use('/video', require('./routes/videoRoute'));

// Video consultation page
app.get('/consultation', (req, res) => {
    res.render('consultation');
});

// MongoDB Connection
const connectDB = async () => {
    try {
        if (process.env.MONGODB_URI) {
            await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('Connected to MongoDB');
        } else {
            console.log('MongoDB URI not provided. Running in development mode without database.');
            console.log('To connect to MongoDB, set MONGODB_URI in your .env file');
        }
    } catch (err) {
        console.log('MongoDB connection failed. Running without database connection.');
        console.log('Error:', err.message);
        console.log('To fix this: Make sure MongoDB is running or provide a valid MONGODB_URI');
    }
};

connectDB();

app.get("/doctor-signup", (req, res) => {
    res.render("doctorSignUp.ejs");
})

app.get("/patient-login", (req, res) => {
    res.render("patientLogin.ejs");
})

app.get("/pharmacy-signup", (req, res) => {
    res.render("pharmacySignUp.ejs");
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});