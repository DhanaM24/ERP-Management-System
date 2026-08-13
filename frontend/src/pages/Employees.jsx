import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/api";
import { getApiErrorMessage } from "../utils/employeeHelpers";
import EmployeeModal from "../components/EmployeeModal";

export default function Employees() {
  const { user } = useAuth();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [saving, setSaving] = useState(false);
  const [modalError, setModalError] = useState("");

  const canCreate = ["admin", "manager"].includes(user?.role);
  const canDelete = user?.role === "admin";

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await getEmployees(debouncedSearch);
      setEmployees(data.employees || []);
    } catch (err) {
      setError(getApiErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => setSuccess(""), 3000);
    return () => clearTimeout(timer);
  }, [success]);

  const openAddModal = () => {
    setEditingEmployee(null);
    setModalError("");
    setModalOpen(true);
  };

  const openEditModal = (employee) => {
    setEditingEmployee(employee);
    setModalError("");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingEmployee(null);
    setModalError("");
  };

  const handleSubmit = async (payload) => {
    setSaving(true);
    setModalError("");
    try {
      if (editingEmployee) {
        await updateEmployee(editingEmployee._id, payload);
        setSuccess("Employee updated successfully");
      } else {
        await createEmployee(payload);
        setSuccess("Employee created successfully");
      }
      closeModal();
      fetchEmployees();
    } catch (err) {
      setModalError(getApiErrorMessage(err));
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (employee) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (!confirmed) return;

    setError("");
    try {
      await deleteEmployee(employee._id);
      setSuccess("Employee deleted successfully");
      fetchEmployees();
    } catch (err) {
      setError(getApiErrorMessage(err));
    }
  };

  return (
    <div>
      <div className="page-toolbar">
        <div className="page-header">
          <h1>Employees</h1>
          <p>Manage your workforce</p>
        </div>
        {canCreate && (
          <button type="button" className="btn-primary" onClick={openAddModal}>
            + Add Employee
          </button>
        )}
      </div>

      {success && <div className="success-banner">{success}</div>}
      {error && <div className="error-banner">{error}</div>}

      <div className="table-card">
        <div className="table-toolbar">
          <input
            type="text"
            className="search-input"
            placeholder="Search Employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="table-loading">
            <div className="spinner" />
            <p>Loading employees...</p>
          </div>
        ) : employees.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">👥</span>
            <h3>No employees found</h3>
            <p>
              {debouncedSearch
                ? "Try a different search term."
                : "Add your first employee to get started."}
            </p>
          </div>
        ) : (
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Role</th>
                  <th>Status</th>
                  {(canCreate || canDelete) && <th>Actions</th>}
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp._id}>
                    <td className="cell-id">{emp.employeeId}</td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.department || "—"}</td>
                    <td>{emp.role || "—"}</td>
                    <td>
                      <span
                        className={`status-badge ${emp.status === "Active" ? "active" : "inactive"}`}
                      >
                        {emp.status}
                      </span>
                    </td>
                    {(canCreate || canDelete) && (
                      <td className="actions-cell">
                        {canCreate && (
                          <button
                            type="button"
                            className="btn-edit"
                            onClick={() => openEditModal(emp)}
                          >
                            Edit
                          </button>
                        )}
                        {canDelete && (
                          <button
                            type="button"
                            className="btn-delete"
                            onClick={() => handleDelete(emp)}
                          >
                            Delete
                          </button>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <EmployeeModal
        isOpen={modalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        employee={editingEmployee}
        saving={saving}
        apiError={modalError}
      />
    </div>
  );
}
