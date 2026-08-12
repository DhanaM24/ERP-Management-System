const express = require("express");
const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");
const {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

const router = express.Router();

router.get("/", auth, getOrders);
router.get("/:id", auth, getOrderById);
router.post("/", auth, authorize("admin", "manager", "employee"), createOrder);
router.put("/:id", auth, authorize("admin", "manager"), updateOrder);
router.delete("/:id", auth, authorize("admin"), deleteOrder);

module.exports = router;
