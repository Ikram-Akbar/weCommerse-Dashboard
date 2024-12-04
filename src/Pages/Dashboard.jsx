import Contents from "../Components/Contents/Contents";
import SideNav from "../Components/Navbar/SideNav";
import TopNav from "../Components/Navbar/TopNav";


const Dashboard = () => {
    return (
        <div>
            {/* side navbar */}
            <SideNav />
            {/* top nav */}
            <TopNav />
            {/*  Content */}
            <Contents/>
        </div>
    );
};

export default Dashboard;