function Sidebar(){
    return(
        <div className="sidebarpanel">
        <h2>Sidebar</h2>
        <ul className="sidebarlist">
            <li><a href="/">Dashboard</a></li>
            <li><a href="/employees">Employees</a></li>
            <li><a href="/settings">Settings</a></li>
        </ul>
        </div>
    );
}
export default Sidebar;