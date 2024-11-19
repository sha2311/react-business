import React from 'react'
import {AppBar,Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText, useMediaQuery, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles';
import logo from "../src/assets/logo.png"

function Navbar() {

    const [mobileOpen, setMobileOpen] = React.useState(false)
    const Theme = useTheme();
    const navItems = ['About','Services', 'Projects',  'Contacts'];
    const IsMobile = useMediaQuery(Theme.breakpoints.down("sm"))
  
  return (
   <>
    <AppBar elevation={0} position='static' className='Navbar' sx={{color: '#000000', fontSize: '14px', backgroundColor: "white", padding: " 0px 20px", borderBottom: '1px solid #fafafa'}}>
    <Toolbar>
    {IsMobile ? (
      <div>
        <IconButton 
            color="inherit"
            onClick={()=> setMobileOpen(true)}
            sx={{ mr: 2,  display: { sm: 'none' } }}>

              <MenuIcon/>

        </IconButton>
      </div>
 ): (

  <>
  <Typography  sx={{ flexGrow:1, mr: 2 }}>
     <img className='logo' src={logo} alt="" />
  </Typography>
    
    {navItems.map((item)=>(
        <Button color='inherit' key={item}>  {item}</Button>
    ) )}

    <Button variant='outlined' sx={{backgroundColor: '#2AB6911A', color: '#2AB691', borderRadius: '10px', "&:hover": {backgroundColor: '#2ab666', color: 'white'} }} >Sing Up</Button>

  </>

 )}

 </Toolbar>
 </AppBar>
 <Drawer anchor='left' open= {mobileOpen} onClose={()=> setMobileOpen(false) }>
    <List>
        {navItems.map((item)=>(
            <ListItem button key={item} onClick={()=> setMobileOpen(false)} >
                    <ListItemText> {item} </ListItemText>
            </ListItem>
        ))}
        <ListItem button > <ListItemText primary = "Sing up" /> </ListItem>
    </List>
 </Drawer>
   
   </>
  )
}

export default Navbar