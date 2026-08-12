const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const employeeRoutes = require("./routes/employees");
const customerRoutes = require("./routes/customers");
const orderRoutes = require("./routes/orders");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("ERP API Running");
});

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
