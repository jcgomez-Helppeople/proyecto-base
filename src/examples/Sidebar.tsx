import "./Sidebar.styles.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__menu">
        <li className="sidebar__item">
          <i className="pi pi-home sidebar__icon" title="Inicio"></i>
        </li>
        <li className="sidebar__item">
          <i className="pi pi-cog sidebar__icon" title="Configuración"></i>
        </li>
        <li className="sidebar__item">
          <i className="pi pi-list sidebar__icon" title="Políticas"></i>
        </li>
        <li className="sidebar__item">
          <i className="pi pi-sitemap sidebar__icon" title="Integraciones"></i>
        </li>
      </ul>
      <div className="sidebar__footer">
        <i className="pi pi-cloud sidebar__icon" title="HelpPeople"></i>
      </div>
    </aside>
  );
};

export default Sidebar;