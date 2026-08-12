const Order = require("../models/Order");
const Customer = require("../models/Customer");

const calculateTotal = (items) =>
  items.reduce((sum, item) => sum + item.quantity * item.price, 0);

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("customer", "name email company")
      .sort({ createdAt: -1 });
    res.json({ count: orders.length, orders });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "customer",
      "name email phone company address"
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const { customer, items, status, notes } = req.body;

    if (!customer || !items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        message: "Customer and at least one item are required",
      });
    }

    const customerExists = await Customer.findById(customer);
    if (!customerExists) {
      return res.status(404).json({ message: "Customer not found" });
    }

    const totalAmount = calculateTotal(items);

    const order = await Order.create({
      customer,
      items,
      totalAmount,
      status,
      notes,
    });

    await order.populate("customer", "name email company");

    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { customer, items, status, notes } = req.body;
    const updateData = { status, notes };

    if (customer) {
      const customerExists = await Customer.findById(customer);
      if (!customerExists) {
        return res.status(404).json({ message: "Customer not found" });
      }
      updateData.customer = customer;
    }

    if (items) {
      if (!Array.isArray(items) || items.length === 0) {
        return res
          .status(400)
          .json({ message: "Order must have at least one item" });
      }
      updateData.items = items;
      updateData.totalAmount = calculateTotal(items);
    }

    const order = await Order.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    }).populate("customer", "name email company");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({
      message: "Order updated successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
