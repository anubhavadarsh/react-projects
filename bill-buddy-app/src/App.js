import SideBar from "components/Sidebar/index";
import Chartboard from "container/chartboard";
import Dashboard from "container/dashboard";
import ManangeBills from "container/manageBills/index";
import ViewBills from "container/viewBills";
import "./App.css";

function App() {
  return (
    <SideBar>
      {/* {links.map((link) => (
        <main id={link.title} className="section" key={link.id}>
          {link.title}
        </main>
      ))} */}
      <Dashboard />
      <ViewBills />
      <Chartboard />
      <ManangeBills />
    </SideBar>
  );
}

export default App;
