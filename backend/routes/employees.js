const express = require("express");
const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");
const {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

const router = express.Router();

router.get("/", auth, getEmployees);
router.get("/:id", auth, getEmployeeById);
router.post("/", auth, authorize("admin", "manager"), createEmployee);
router.put("/:id", auth, authorize("admin", "manager"), updateEmployee);
router.delete("/:id", auth, authorize("admin"), deleteEmployee);

module.exports = router;
