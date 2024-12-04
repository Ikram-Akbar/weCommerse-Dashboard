import { FiHome, FiGrid, FiBox, FiUsers, FiClipboard, FiTruck } from "react-icons/fi";
import { AiTwotoneShop } from "react-icons/ai";

const icons = {
    grid: <FiGrid />,
    box: <FiBox />,
    users: <FiUsers />,
    clipboard: <FiClipboard />,
    truck: <FiTruck />,
};

const navItems = [
    { name: "Dashboard", icon: <FiHome />, current: true },
    { name: "Resources", type: "label" },  // Add a type to differentiate it
    { name: "Categories", icon: "grid" },
    { name: "Products", icon: "box" },
    { name: "Customers", icon: "users" },
    { name: "Orders", icon: "clipboard" },
    { name: "Deliveries", icon: "truck" },
];

const SideNav = () => {
    return (
        <div className="h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg">
            {/* Header Section */}
            <div className="flex items-center justify-center py-6 border-b border-gray-700">
                <AiTwotoneShop size={50} className="text-purple-500 mr-3" />
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">We-Commerce</h1>
                    <p className="text-gray-400 text-sm">Admin Dashboard</p>
                </div>
            </div>

            {/* Navigation Section */}
            <nav className="flex-1 mt-4">
                {navItems.map((item) => (
                    item.type === "label" ? (
                        <div key={item.name} className="py-3 px-6 text-gray-400 text-sm uppercase">
                            {item.name}
                        </div>
                    ) : (
                        <div
                            key={item.name}
                            className={`flex items-center py-3 px-6 space-x-4 cursor-pointer transition-colors duration-200 ${item.current ? "bg-purple-600" : "hover:bg-gray-700"
                                }`}
                        >
                            <span className="text-xl">{typeof item.icon === "string" ? icons[item.icon] : item.icon}</span>
                            <span className="text-lg">{item.name}</span>
                        </div>
                    )
                ))}
            </nav>
        </div>
    );
};

export default SideNav;
