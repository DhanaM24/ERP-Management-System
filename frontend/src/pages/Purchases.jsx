function ModulePage({ title, description, icon }) {
  return (
    <div>
      <div className="page-header">
        <h1>
          {icon} {title}
        </h1>
        <p>{description}</p>
      </div>
      <div className="empty-state">
        <span className="empty-icon">{icon}</span>
        <h3>{title} module</h3>
        <p>This section is ready. CRUD features can be added next.</p>
      </div>
    </div>
  );
}

export default function Purchases() {
  return (
    <ModulePage
      title="Purchases"
      description="Manage purchase orders"
      icon="💳"
    />
  );
}
