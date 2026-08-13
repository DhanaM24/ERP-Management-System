import { useState, useEffect } from "react";
import {
  emptyEmployeeForm,
  formToPayload,
  validateEmployeeForm,
} from "../utils/employeeHelpers";

export default function EmployeeModal({
  isOpen,
  onClose,
  onSubmit,
  employee,
  saving,
  apiError,
}) {
  const isEdit = Boolean(employee);
  const [form, setForm] = useState(emptyEmployeeForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setForm(
        employee
          ? {
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
            }
          : emptyEmployeeForm
      );
      setErrors({});
    }
  }, [isOpen, employee]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateEmployeeForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(formToPayload(form));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{isEdit ? "Edit Employee" : "Add Employee"}</h2>
          <button type="button" className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          {apiError && <div className="error-banner">{apiError}</div>}

          <div className="form-grid">
            <label>
              Employee ID *
              <input
                name="employeeId"
                value={form.employeeId}
                onChange={handleChange}
                placeholder="EMP001"
                disabled={isEdit}
              />
              {errors.employeeId && (
                <span className="field-error">{errors.employeeId}</span>
              )}
            </label>

            <label>
              Name *
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Silva"
              />
              {errors.name && (
                <span className="field-error">{errors.name}</span>
              )}
            </label>

            <label>
              Email *
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@gmail.com"
              />
              {errors.email && (
                <span className="field-error">{errors.email}</span>
              )}
            </label>

            <label>
              Phone
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="0771234567"
              />
            </label>

            <label>
              Department
              <input
                name="department"
                value={form.department}
                onChange={handleChange}
                placeholder="IT"
              />
            </label>

            <label>
              Position
              <input
                name="position"
                value={form.position}
                onChange={handleChange}
                placeholder="Software Engineer"
              />
            </label>

            <label>
              Role
              <input
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="Manager"
              />
            </label>

            <label>
              Salary
              <input
                type="number"
                name="salary"
                value={form.salary}
                onChange={handleChange}
                placeholder="50000"
                min="0"
              />
              {errors.salary && (
                <span className="field-error">{errors.salary}</span>
              )}
            </label>

            <label>
              Joining Date
              <input
                type="date"
                name="joiningDate"
                value={form.joiningDate}
                onChange={handleChange}
              />
            </label>

            <label>
              Status
              <select name="status" value={form.status} onChange={handleChange}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </label>

            <label className="full-width">
              Address
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Employee address"
                rows={2}
              />
            </label>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={saving}>
              {saving
                ? "Saving..."
                : isEdit
                  ? "Update Employee"
                  : "Add Employee"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
