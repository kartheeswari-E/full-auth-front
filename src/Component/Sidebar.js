import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import{Link} from 'react-router-dom';

function Sidebar() {
  return <>
   <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">CRM</div>
</a>


<hr className="sidebar-divider my-0"/>

<Link to='/ed'>
<li className="nav-item active">
    <div className="nav-link">
   < DashboardCustomizeIcon/>&nbsp;
        <span>Home</span></div>
</li>
</Link>
<Link to='/admin'>
<li className="nav-item active">
    <div className="nav-link">
   < DashboardCustomizeIcon/>&nbsp;
        <span>Admin</span></div>
</li>
<Link to='/user'>
<li className="nav-item active">
    <div className="nav-link">
   < DashboardCustomizeIcon/>&nbsp;
        <span>User</span></div>
</li>
</Link>
</Link>
<Link to='/dashboard'>
<li className="nav-item active">
    <div className="nav-link">
   < DashboardCustomizeIcon/>&nbsp;
        <span>Dashboard</span></div>
</li>
</Link>
<Link to='/add-user'>
<li className="nav-item">
    <div className="nav-link collapsed" data-toggle="collapse" data-target="javascript(void)collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <AddIcon/>&nbsp;
        <span>add-users</span>
    </div>
</li></Link>
</ul>

  </>
}

export default Sidebar

