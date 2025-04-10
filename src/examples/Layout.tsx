import Header from "./Header";
import Sidebar from "./Sidebar";
import "../styles/PageLayout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__body">
        <Sidebar />
        <main className="layout__content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;