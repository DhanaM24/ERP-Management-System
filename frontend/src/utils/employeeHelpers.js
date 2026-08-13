export const emptyEmployeeForm = {
  employeeId: "",
  name: "",
  email: "",
  phone: "",
  department: "",
  position: "",
  role: "",
  salary: "",
  joiningDate: "",
  status: "Active",
  address: "",
};

export function employeeToForm(employee) {
  return {
    employeeId: employee.employeeId || "",
    name: employee.name || "",
    email: employee.email || "",
    phone: employee.phone || "",
    department: employee.department || "",
    position: employee.position || "",
    role: employee.role || "",
    salary: employee.salary ?? "",
    joiningDate: employee.joiningDate
      ? new Date(employee.joiningDate).toISOString().split("T")[0]
      : "",
    status: employee.status || "Active",
    address: employee.address || "",
  };
}

export function formToPayload(form) {
  return {
    employeeId: form.employeeId.trim(),
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    department: form.department.trim(),
    position: form.position.trim(),
    role: form.role.trim(),
    salary: form.salary === "" ? undefined : Number(form.salary),
    joiningDate: form.joiningDate || undefined,
    status: form.status,
    address: form.address.trim(),
  };
}

export function validateEmployeeForm(form) {
  const errors = {};

  if (!form.employeeId.trim()) errors.employeeId = "Employee ID is required";
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = "Invalid email format";
  }
  if (form.salary !== "" && Number(form.salary) < 0) {
    errors.salary = "Salary cannot be negative";
  }

  return errors;
}

export function getApiErrorMessage(error) {
  if (!error.response) {
    return "Network error. Please check your connection.";
  }

  const { status, data } = error.response;

  if (status === 401) return "Session expired. Please login again.";
  if (status === 403) return data?.message || "You do not have permission.";
  if (status === 404) return data?.message || "Employee not found.";
  if (status === 409) return data?.message || "Duplicate record found.";

  return data?.message || "Something went wrong. Please try again.";
}
