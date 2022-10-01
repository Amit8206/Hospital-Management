const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const path = require("path");


// Environment Variable Configuration
dotenv.config();

const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';


const app = express();



// Routes...
const userRoute = require("./routes/User");
const doctorRoute = require("./routes/doctor");
const initialDataRoutes = require("./routes/initialData");
const employeeRoute = require("./routes/employee");
const medicineRoute = require("./routes/medicine");
const departmentRoute = require("./routes/department");
const appointmentRoute = require("./routes/appointment");
const patientRoute = require("./routes/patient");
const complainRoute = require("./routes/complain");







// creating Database  // const connctDB = 
mongoose.connect(process.env.MONGO_URL, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connection Established Successfully...");
}).catch((error) => {
    console.log("MongoDB Connection Failed !!!");
    console.log(error);
})



app.use(cors());
app.use(express.json());

// // Middleware
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json());



app.use('/public', express.static(path.join(__dirname, 'uploads')));

app.use("/api", userRoute);
app.use("/api", initialDataRoutes);
app.use("/api", appointmentRoute);
app.use("/api", doctorRoute);
app.use("/api", employeeRoute);
app.use("/api", medicineRoute);
app.use("/api", departmentRoute);
app.use("/api", patientRoute);
app.use("/api", complainRoute);





app.listen(port, host, () => {
    console.log(`Application Is Listening On Port http://${host}:${port}`);
})