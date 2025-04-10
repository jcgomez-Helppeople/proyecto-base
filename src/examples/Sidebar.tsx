import "./Sidebar.styles.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__menu">
        <li className="sidebar__item">
          <i className="pi pi-home sidebar__icon"></i>
          <span>Inicio</span>
        </li>
        <li className="sidebar__item">
          <i className="pi pi-cog sidebar__icon"></i>
          <span>Configuración</span>
        </li>
        <li className="sidebar__item">
          <i className="pi pi-list sidebar__icon"></i>
          <span>Políticas</span>
        </li>
        <li className="sidebar__item">
          <i className="pi pi-sitemap sidebar__icon"></i>
          <span>Integraciones</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;