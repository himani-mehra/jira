import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import DrawerDefaultExample from "./components/drawer/Drawer";
import SideBarMenu from "./components/sidebarMenu/SideBarMenu";

function App() {
  return (
    <div className="App">
      <div className="drawer">
        <DrawerDefaultExample />
      </div>
      <div className="sidebar">
        <SideBarMenu />
      </div>
      <div className="header">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
