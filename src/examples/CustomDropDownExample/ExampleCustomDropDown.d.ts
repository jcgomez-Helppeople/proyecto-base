type ActionItem = {
    key: string;
    label: string;
    onClick: () => void;
};
type Props = {
    actions: ActionItem[];
    icon?: React.ReactNode;
};
declare const ExampleCustomDropDown: React.FC<Props>;
export default ExampleCustomDropDown;
