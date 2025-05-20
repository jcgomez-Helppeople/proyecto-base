import { Dropdown, Menu } from "antd";

type ActionItem = {
    key: string;
    label: string;
    onClick: () => void;
};

type Props = {
    actions: ActionItem[];
    icon?: React.ReactNode; // <-- icono personalizado
};

const ExampleCustomDropDown: React.FC<Props> = ({ actions, icon }) => {
    const menu = (
        <Menu
            items={actions.map(({ key, label, onClick }) => ({
                key,
                label,
                onClick,
            }))}
        />
    );
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a onClick={e => e.preventDefault()}>
                {icon || <span>⋮</span>} {/* fallback si no se pasa icon */}
            </a>
        </Dropdown>
    )
}

export default ExampleCustomDropDown