import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: "📊", end: true },
  { to: "/dashboard/employees", label: "Employees", icon: "👥" },
  { to: "/dashboard/customers", label: "Customers", icon: "🏢" },
  { to: "/dashboard/products", label: "Products", icon: "📦" },
  { to: "/dashboard/suppliers", label: "Suppliers", icon: "🚚" },
  { to: "/dashboard/orders", label: "Orders", icon: "🛒" },
  { to: "/dashboard/purchases", label: "Purchases", icon: "💳" },
  { to: "/dashboard/reports", label: "Reports", icon: "📈" },
];

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="brand-icon">⚡</span>
          <div>
            <h1>ERP System</h1>
            <p>Management Portal</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="dashboard-main">
        <header className="topbar">
          <div className="topbar-left">
            <h2>Welcome back, {user?.name}</h2>
            <span className="role-badge">{user?.role}</span>
          </div>
          <button type="button" className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </header>

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
