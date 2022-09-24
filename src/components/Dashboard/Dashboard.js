import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, NavLink, Outlet, useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
import AppsIcon from '@mui/icons-material/Apps';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import CreditCardIcon from '@mui/icons-material/CreditCard';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const {logOut, admin} = useAuth();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogOut = e => {
    e.preventDefault();
    navigate('/');
    logOut();
  } 

  const drawer = (
    <div>
      <Toolbar>
        <Link to='/' style={{textDecoration:'none'}}><Typography variant='h5' color='#3A4256' fontWeight='600'>Doctors Portal</Typography></Link>
        </Toolbar>
      {/* <Divider /> */}
      
        <List>
          <NavLink style={{textDecoration: 'none'}} to='/dashboard'>
            <ListItem disablePadding >
              <ListItemButton>
                <ListItemIcon><AppsIcon sx={{color: '#fff'}}/> </ListItemIcon>
                <ListItemText sx={{color: '#fff'}}>Dashboard</ListItemText>
              </ListItemButton>
            </ListItem>
          </NavLink>
          
          <NavLink style={{textDecoration: 'none'}} to='/dashboard/appointments'>
            <ListItem disablePadding >
              <ListItemButton>
                <ListItemIcon><CalendarMonthOutlinedIcon sx={{color: '#fff'}}/> </ListItemIcon>
                <ListItemText sx={{color: '#fff'}}>Appointments</ListItemText>
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink style={{textDecoration: 'none'}} to='/dashboard/patients'>
            <ListItem disablePadding >
              <ListItemButton>
                <ListItemIcon><PeopleAltIcon sx={{color: '#fff'}}/> </ListItemIcon>
                <ListItemText sx={{color: '#fff'}}>Patients</ListItemText>
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink style={{textDecoration: 'none'}} to='/dashboard/prescriptions'>
            <ListItem disablePadding >
              <ListItemButton>
                <ListItemIcon><FeedOutlinedIcon sx={{color: '#fff'}}/> </ListItemIcon>
                <ListItemText sx={{color: '#fff'}}>Prescriptions</ListItemText>
              </ListItemButton>
            </ListItem>
          </NavLink>

          {admin && 
            <NavLink style={{textDecoration: 'none'}} to='/dashboard/make-admin'>
              <ListItem disablePadding >
                <ListItemButton>
                  <ListItemIcon><ManageAccountsIcon sx={{color: '#fff'}}/> </ListItemIcon>
                  <ListItemText sx={{color: '#fff'}}>Make Admin</ListItemText>
                </ListItemButton>
              </ListItem>
            </NavLink>
          }

          {/* <NavLink style={{textDecoration: 'none'}} to='/dashboard/payment'>
            <ListItem disablePadding >
              <ListItemButton>
                <ListItemIcon><CreditCardIcon sx={{color: '#fff'}}/> </ListItemIcon>
                <ListItemText sx={{color: '#fff'}}>Payment</ListItemText>
              </ListItemButton>
            </ListItem>
          </NavLink> */}

          <ListItemButton onClick={handleLogOut}> 
            <ListItemIcon><LogoutIcon sx={{color: '#fff'}}/> </ListItemIcon>
            <ListItemText sx={{color: '#fff'}}>Log Out</ListItemText>
          </ListItemButton>
        </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  background: 'linear-gradient(180deg, #19D3AE, #0FCFEC)' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'linear-gradient(180deg, #19D3AE, #0FCFEC)'}, 
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
      >
        <Toolbar />

        <Outlet/>

      </Box>
    </Box>
  );
}

export default Dashboard;
