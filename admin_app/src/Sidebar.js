import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useLocation, useNavigate } from 'react-router-dom';

import DashboardIconOutlined from '@mui/icons-material/DashboardOutlined';
import ReceiptIconOutlined from '@mui/icons-material/ReceiptOutlined';
import AssignmentIconOutlined from '@mui/icons-material/AssignmentOutlined';

import './sidebar.css'


import { Dashboard as DashboardIcon, Receipt as OrdersIcon, Assignment as RegisterDataIcon } from '@mui/icons-material'; // Importing icons


const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
 

  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  

  if (location.pathname === "/") {
    return null;
  }


return (
  <Box   sx={{ 
    display: 'flex', 
    backgroundColor: '#f0f0f0', // Background color
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Box shadow
    // Add any other CSS properties you need
  }}>
    <CssBaseline />
    <Drawer variant="permanent" open={open}>
      <DrawerHeader >
        {/* Toggle button */}
        <IconButton onClick={() => setOpen(!open)}>
          {/* {open ? <ChevronLeftIcon /> : <MenuIcon />} */}
          {open ? <MenuIcon /> : <MenuIcon />}
        </IconButton>
      </DrawerHeader>
      
      <Divider />
      
      <Divider />
      <List>



{/* logo  */}
      {/* <ListItem 
          disablePadding 
          sx={{ display: 'block' }} 
          onClick={() => {navigate("/dashboard")}}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: '#000', // Default color
              }}
            >
               <img src='\image\Vector Smart Object 1.png' alt="" style={{ width: '24px', height: '24px' }} /> 
              
             
               </ListItemIcon>
            <ListItemText primary={<Typography variant="body1" fontWeight="bold">
              <h3 sx={{color: "#000"}}>ATMOS</h3>
            </Typography>} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem> */}
         {/* <h1 className='text1'></h1> */}
  <br />
        

        {/* dashboard  */}
        <ListItem 
          disablePadding 
          sx={{ display: 'block' }} 
          onClick={() => {navigate("/dashboard")}}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: '#000', // Default color
              }}
            >
              <DashboardIconOutlined 
                 sx={{
                  color: location.pathname === "/dashboard" ? '#926c9a' : 'inherit', // Change color if selected to purple
              }}/> {/* Dashboard Icon */}
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body1" fontWeight="bold">Dashboard</Typography>} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>


        <ListItem 
          disablePadding 
          sx={{ display: 'block' }} 
          onClick={() => {navigate("/orders")}}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: '#000', // Default color
              }}
            >
              <AssignmentIconOutlined  
                sx={{
                  color: location.pathname === "/orders" ? '#926c9a' : 'inherit', // Change color if selected to purple
              }}/> {/* Orders Icon */}
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body1" fontWeight="bold" marginRight="20px">Orders data</Typography>} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
          
        <ListItem 
          disablePadding 
          sx={{ display: 'block' }} 
          onClick={() => {navigate("/registerdata")}}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: '#000', // Default color
              }}
            >
              <ReceiptIconOutlined 
                sx={{
                  color: location.pathname === "/registerdata" ? '#926c9a' : 'inherit', // Change color if selected to purple
              }}/> {/* Register Data Icon */}
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body1" fontWeight="bold">Users Register Data</Typography>} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>


        <ListItem 
          disablePadding 
          sx={{ display: 'block' }} 
          onClick={() => {navigate("/adminregisterdata")}}
          // sx={{ '&.Mui-selected': { backgroundColor: 'rgba(0, 0, 0, 0.08)' } }}
          // selected={location.pathname === "/registerdata"}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: '#000', // Default color
              }}
            >
              <ReceiptIconOutlined 
                sx={{
                  color: location.pathname === "/adminregisterdata" ? '#926c9a' : 'inherit', // Change color if selected to purple
              }}/>
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body1" fontWeight="bold">Admins Register Data</Typography>} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
       </List>
    </Drawer>
  </Box>
);
}
