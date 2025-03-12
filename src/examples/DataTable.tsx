import DataTableComponent from "../components/DataTable";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stockStatus: string;
}

export const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, stockStatus: "INSTOCK", rating: 4.5, brand: "Dell" },
    { id: 2, name: "Phone", category: "Electronics", price: 800, stockStatus: "OUTOFSTOCK", rating: 4.2, brand: "Samsung" },
    { id: 3, name: "Headphones", category: "Accessories", price: 150, stockStatus: "LOWSTOCK", rating: 4.7, brand: "Sony" },
    { id: 4, name: "Smartwatch", category: "Wearables", price: 250, stockStatus: "INSTOCK", rating: 4.3, brand: "Apple" },
    { id: 5, name: "Tablet", category: "Electronics", price: 600, stockStatus: "INSTOCK", rating: 4.1, brand: "Lenovo" },
    { id: 6, name: "Monitor", category: "Peripherals", price: 300, stockStatus: "INSTOCK", rating: 4.6, brand: "LG" },
    { id: 7, name: "Mouse", category: "Peripherals", price: 50, stockStatus: "LOWSTOCK", rating: 4.8, brand: "Logitech" },
    { id: 8, name: "Keyboard", category: "Peripherals", price: 100, stockStatus: "INSTOCK", rating: 4.4, brand: "Corsair" },
    { id: 9, name: "Speaker", category: "Accessories", price: 200, stockStatus: "INSTOCK", rating: 4.5, brand: "JBL" },
    { id: 10, name: "Gaming Chair", category: "Furniture", price: 400, stockStatus: "OUTOFSTOCK", rating: 4.3, brand: "Secretlab" },
    { id: 11, name: "External SSD", category: "Storage", price: 180, stockStatus: "INSTOCK", rating: 4.7, brand: "Samsung" },
    { id: 12, name: "USB Flash Drive", category: "Storage", price: 20, stockStatus: "INSTOCK", rating: 4.5, brand: "SanDisk" },
    { id: 13, name: "Graphics Card", category: "Hardware", price: 900, stockStatus: "LOWSTOCK", rating: 4.6, brand: "NVIDIA" },
    { id: 14, name: "Processor", category: "Hardware", price: 350, stockStatus: "INSTOCK", rating: 4.8, brand: "AMD" },
    { id: 15, name: "Power Supply", category: "Hardware", price: 120, stockStatus: "INSTOCK", rating: 4.2, brand: "Corsair" },
    { id: 16, name: "Motherboard", category: "Hardware", price: 250, stockStatus: "INSTOCK", rating: 4.5, brand: "ASUS" },
    { id: 17, name: "RAM 16GB", category: "Hardware", price: 80, stockStatus: "INSTOCK", rating: 4.7, brand: "G.Skill" },
    { id: 18, name: "Router", category: "Networking", price: 90, stockStatus: "INSTOCK", rating: 4.4, brand: "TP-Link" },
    { id: 19, name: "External Hard Drive", category: "Storage", price: 150, stockStatus: "INSTOCK", rating: 4.5, brand: "Western Digital" },
    { id: 20, name: "Webcam", category: "Peripherals", price: 80, stockStatus: "INSTOCK", rating: 4.3, brand: "Logitech" },
    { id: 21, name: "Microphone", category: "Audio", price: 120, stockStatus: "INSTOCK", rating: 4.6, brand: "Blue Yeti" },
    { id: 22, name: "Drawing Tablet", category: "Accessories", price: 250, stockStatus: "LOWSTOCK", rating: 4.7, brand: "Wacom" },
    { id: 23, name: "VR Headset", category: "Gaming", price: 700, stockStatus: "INSTOCK", rating: 4.8, brand: "Oculus" },
    { id: 24, name: "Portable Monitor", category: "Peripherals", price: 220, stockStatus: "INSTOCK", rating: 4.5, brand: "ASUS" },
    { id: 25, name: "Drone", category: "Gadgets", price: 1000, stockStatus: "LOWSTOCK", rating: 4.4, brand: "DJI" },
    { id: 26, name: "Smart Bulb", category: "Smart Home", price: 30, stockStatus: "INSTOCK", rating: 4.3, brand: "Philips" },
    { id: 27, name: "Robot Vacuum", category: "Smart Home", price: 500, stockStatus: "INSTOCK", rating: 4.7, brand: "iRobot" },
    { id: 28, name: "Security Camera", category: "Smart Home", price: 150, stockStatus: "INSTOCK", rating: 4.6, brand: "Arlo" },
    { id: 29, name: "Bluetooth Speaker", category: "Audio", price: 120, stockStatus: "INSTOCK", rating: 4.5, brand: "Bose" },
    { id: 30, name: "E-Reader", category: "Electronics", price: 130, stockStatus: "INSTOCK", rating: 4.7, brand: "Kindle" },
    { id: 31, name: "Wireless Charger", category: "Accessories", price: 40, stockStatus: "INSTOCK", rating: 4.4, brand: "Anker" },
    { id: 32, name: "Streaming Stick", category: "Entertainment", price: 50, stockStatus: "INSTOCK", rating: 4.6, brand: "Roku" },
];

const columns = [
    { field: "name" as keyof Product, header: "Nombre", body: (data: Product) => `${data.name}` },
    { field: "category" as keyof Product, header: "Categoria", body: (data: Product) => `${data.category}` },
    { field: "price" as keyof Product, header: "Precio", body: (data: Product) => `$${data.price.toFixed(2)}` },
    { field: "stockStatus" as keyof Product, header: "Inventario", body: (data: Product) => <span>{data.stockStatus}</span> },
];

export const DataTableExample = () => {

    return (
        <>
            <DataTableComponent data={products} columns={columns} actions />
        </>
    );
}
