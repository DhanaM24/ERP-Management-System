const Employee = require("../models/Employee");

const getEmployees = async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      const regex = { $regex: search, $options: "i" };
      query = {
        $or: [{ name: regex }, { email: regex }, { employeeId: regex }],
      };
    }

    const employees = await Employee.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: employees.length,
      employees,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch employees",
      error: error.message,
    });
  }
};

const createEmployee = async (req, res) => {
  try {
    const {
      employeeId,
      name,
      email,
      phone,
      department,
      position,
      role,
      salary,
      joiningDate,
      status,
      address,
    } = req.body;

    if (!employeeId || !name || !email) {
      return res.status(400).json({
        success: false,
        message: "Employee ID, name, and email are required",
      });
    }

    if (salary !== undefined && salary !== null && salary < 0) {
      return res.status(400).json({
        success: false,
        message: "Salary cannot be negative",
      });
    }

    const existingEmail = await Employee.findOne({
      email: email.toLowerCase(),
    });
    if (existingEmail) {
      return res.status(409).json({
        success: false,
        message: "Employee with this email already exists",
      });
    }

    const existingId = await Employee.findOne({
      employeeId: employeeId.toUpperCase(),
    });
    if (existingId) {
      return res.status(409).json({
        success: false,
        message: "Employee ID already exists",
      });
    }

    const employee = await Employee.create({
      employeeId,
      name,
      email,
      phone,
      department,
      position,
      role,
      salary,
      joiningDate,
      status,
      address,
    });

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      employee,
    });
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(409).json({
        success: false,
        message: `Employee with this ${field} already exists`,
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: Object.values(error.errors)
          .map((e) => e.message)
          .join(", "),
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to create employee",
      error: error.message,
    });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    if (req.body.salary !== undefined && req.body.salary < 0) {
      return res.status(400).json({
        success: false,
        message: "Salary cannot be negative",
      });
    }

    if (req.body.email) {
      const duplicate = await Employee.findOne({
        email: req.body.email.toLowerCase(),
        _id: { $ne: id },
      });
      if (duplicate) {
        return res.status(409).json({
          success: false,
          message: "Employee with this email already exists",
        });
      }
    }

    if (req.body.employeeId) {
      const duplicate = await Employee.findOne({
        employeeId: req.body.employeeId.toUpperCase(),
        _id: { $ne: id },
      });
      if (duplicate) {
        return res.status(409).json({
          success: false,
          message: "Employee ID already exists",
        });
      }
    }

    const employee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee updated successfully",
      employee,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Duplicate employee email or ID",
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: Object.values(error.errors)
          .map((e) => e.message)
          .join(", "),
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update employee",
      error: error.message,
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete employee",
      error: error.message,
    });
  }
};

module.exports = {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
