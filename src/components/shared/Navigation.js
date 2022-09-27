import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import userIcon from '../../assets/icons/user.svg';

const useStyles = makeStyles(theme => ({
  customTooltip: {
    background: 'linear-gradient(90deg, #19D3AE, #0FCFEC)',
    fontSize: '14px !important'
  },
  customArrow: {
    color: '#19D3AE !important'
  },
}));

const drawerWidth = 240;

const Navigation = (props) => {
    const {user, logOut} = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles();

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const navigate = useNavigate();
    const handleLogOut = e => {
        e.preventDefault();
        navigate('/');
        logOut();
      } 

//--------------- Small Devices Navigation Link ---------------
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ padding: '12px', color: '#fff' }}>
            Doctors Portal
        </Typography>

        <Divider />
        <List>
            <NavLink style={{textDecoration: 'none'}} to='/'>
                <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemIcon><HomeIcon sx={{color: '#fff'}}/> </ListItemIcon>
                        <ListItemText sx={{color: '#fff'}}>Home</ListItemText>
                    </ListItemButton>
                </ListItem>
            </NavLink>

            <NavLink style={{textDecoration: 'none'}} to='/appointment'>
                <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemIcon><CalendarMonthOutlinedIcon sx={{color: '#fff'}}/> </ListItemIcon>
                        <ListItemText sx={{color: '#fff'}}>Appointments</ListItemText>
                    </ListItemButton>
                </ListItem>
            </NavLink>
            {user?.email ?
                <>
                    <NavLink style={{textDecoration: 'none'}} to='/dashboard'>
                        <ListItem disablePadding >
                            <ListItemButton>
                                <ListItemIcon><AppsIcon sx={{color: '#fff'}}/> </ListItemIcon>
                                <ListItemText sx={{color: '#fff'}}>Dashboard</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </NavLink>

                    <ListItemButton onClick={handleLogOut}> 
                        <ListItemIcon><LogoutIcon sx={{color: '#fff'}}/> </ListItemIcon>
                        <ListItemText sx={{color: '#fff'}}>Log Out</ListItemText>
                    </ListItemButton>
                </> :
                <NavLink style={{textDecoration: 'none'}} to='/login'>
                    <ListItem disablePadding >
                        <ListItemButton>
                            <ListItemIcon><LoginIcon sx={{color: '#fff'}}/> </ListItemIcon>
                            <ListItemText sx={{color: '#fff'}}>Login</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            }
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            {/*--------------- Tab, Laptop, Desktop Devices Navigation Menu --------------- */}
            <AppBar component="nav">
                <Toolbar >
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                    >
                    <Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>
                        Doctors Portal
                    </Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Box>
                                <Link style={{textDecoration: 'none', color: 'inherit'}} to='/appointment'><Button color="inherit">Appointment</Button></Link>
                                {
                                    user?.email ?
                                    <>
                                        <Link style={{textDecoration: 'none', color: 'inherit'}} to='/dashboard'>
                                            <Button color="inherit">Dashboard</Button>
                                        </Link>
                                        <Button onClick={logOut} color="inherit">Logout</Button>
                                    </>
                                    :
                                    <Link style={{textDecoration: 'none', color: 'inherit'}} to='/login'>
                                        <Button color="inherit">Login</Button>
                                    </Link>
                                }
                            </Box>
                            {user?.email && 
                            <Box sx={{height: '40px', width: '40px', borderRadius: '50%', border: 'none'}}>
                                <Tooltip 
                                    title={user?.displayName}  
                                    classes={{
                                        tooltip: classes.customTooltip,
                                        arrow: classes.customArrow,
                                    }}
                                arrow>
                                <img src={userIcon} alt='user'></img>
                                </Tooltip>
                            </Box>}
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            {/*--------------- Small Devices Navigation Menu --------------- */}
            <Box component="nav">
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
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'linear-gradient(180deg, #19D3AE, #0FCFEC)' },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};

export default Navigation;