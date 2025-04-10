import "./Header.styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/logo.png" alt="Logo" />
        <span>helppeople</span>
      </div>
      <div className="header__actions">
        <i className="pi pi-question-circle header__icon"></i>
        <i className="pi pi-user header__icon"></i>
        <span className="header__user">Pablo Manolo De La Roca</span>
      </div>
    </header>
  );
};

export default Header;