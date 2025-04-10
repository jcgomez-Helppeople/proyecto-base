import { Toolbar } from "primereact/toolbar";
import { CustomButton } from "../CustomButton";
import "./CustomToolbar.styles.css";

interface CustomToolbarProps {
  title: string;
  onNewClick: () => void;
  onBackClick: () => void;
}

const CustomToolbar = ({ title, onNewClick, onBackClick }: CustomToolbarProps) => {
  const leftContents = (
    <h2 className="custom-toolbar__title">{title}</h2>
  );

  const rightContents = (
    <div className="custom-toolbar__actions">
      <CustomButton
        label="Volver"
        variant="secondary"
        icon="pi pi-refresh"
        onClick={onBackClick}
      />
      <CustomButton
        label="Nueva"
        variant="primary"
        icon="pi pi-plus"
        onClick={onNewClick}
      />
    </div>
  );

  return (
    <Toolbar left={leftContents} right={rightContents} className="custom-toolbar" />
  );
};

export default CustomToolbar;