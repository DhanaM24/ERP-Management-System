const express = require("express");
const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");
const {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

const router = express.Router();

router.get("/", auth, getCustomers);
router.get("/:id", auth, getCustomerById);
router.post("/", auth, authorize("admin", "manager"), createCustomer);
router.put("/:id", auth, authorize("admin", "manager"), updateCustomer);
router.delete("/:id", auth, authorize("admin"), deleteCustomer);

module.exports = router;
