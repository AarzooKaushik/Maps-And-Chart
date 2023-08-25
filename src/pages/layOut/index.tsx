import React,{useState} from "react";
import { NavLink, Outlet , useLocation} from "react-router-dom";

const LayOut: React.FC = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const location = useLocation();

  let heading = "Contacts";

  if (location.pathname === "/graph") {
    heading = "Chart";
  } else if (location.pathname === "/maps") {
    heading = "Map";
  }
  return (
    <div className="h-screen overflow-hidden">
      <div className="py-5 px-3 bg-blue flex align-center justify-between sm:justify-center">
     
        <h1 className="text-center text-white text-2xl font-bold tracking-wider uppercase"> {heading}</h1>
        <button
          className="sm:hidden bg-white px-2"
          onClick={toggleSidebar}
        >
         &#9776;
        </button>
      </div>
      <div className="flex h-screen "  onClick={()=> {
        setIsSidebarOpen(false);
      }} >
        <div className={`border-r-2 border-black h-full  overflow-hidden w-72 z-50 max-[600px]:bg-white max-[600px]:absolute max-[600px]:top-0 max-[600px]:left-0 ${
            isSidebarOpen ? "block" : "max-[600px]:hidden" 
          }`}>
          <NavLink
            to="/"
            className={({ isActive }) => ( isActive ? "block py-4 px-7 bg-blue text-white" : ' block py-4 px-7')}         
            >

            Contacts
          </NavLink>
          <NavLink
            to="/graph"
            className={({ isActive }) => ( isActive ? "block py-4 px-7 bg-blue text-white" : ' block py-4 px-7')}
          >
            Chart
          </NavLink>
          <NavLink
            to="/maps"
            className={({ isActive }) => ( isActive ? "block py-4 px-7 bg-blue text-white" : ' block py-4 px-7')}
          >
            Map
          </NavLink>
        </div>
       
        <div className="flex-1 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayOut;
