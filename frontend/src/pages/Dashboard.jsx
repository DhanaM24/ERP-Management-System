const stats = [
  { label: "Employees", value: "—", icon: "👥", color: "#3b82f6" },
  { label: "Customers", value: "—", icon: "🏢", color: "#8b5cf6" },
  { label: "Products", value: "—", icon: "📦", color: "#06b6d4" },
  { label: "Orders", value: "—", icon: "🛒", color: "#10b981" },
];

export default function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Overview of your ERP system</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div
              className="stat-icon"
              style={{ background: `${stat.color}20`, color: stat.color }}
            >
              {stat.icon}
            </div>
            <div>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="welcome-card">
        <h3>Getting Started</h3>
        <p>
          Use the sidebar to manage Employees, Customers, Products, Suppliers,
          Orders, Purchases, and Reports.
        </p>
      </div>
    </div>
  );
}
