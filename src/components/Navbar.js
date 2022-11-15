import { AppBar, duration, makeStyles, Toolbar } from '@material-ui/core';
import List from '@mui/material/List';
import React from 'react'
import logo from "../images/portafolio.png"
import {Link,animateScroll as scroll} from 'react-scroll'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import { BoltRounded } from '@mui/icons-material';


const links = [
  {
    id: "about",
    text: "About Me",
    icon: <InfoOutlinedIcon/>
  },
  {
    id: "Skills",
    text: "My Coding Journey",
    icon: <PsychologyOutlinedIcon />
  },
  {
    id: "work",
    text: "My Work",
    icon: <HomeRepairServiceOutlinedIcon/>
  },
  {
    id: "contact",
    text: "Get in touch",
    icon: <RecentActorsOutlinedIcon/>
  }
]

 const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='sticky' className={classes.root}> 
      <Toolbar className={classes.toolbar}> 
        <img src={logo} className={classes.logo} alt='Logo'/>
        <List className={classes.menu} >
          {//libreria react-
            links.map(({id, text}, index) =>(
              <Link key={index} 
              to={id} spy={true} 
              activeClass="active" 
              smooth={true} duration={500} 
              offset={-70}>
              {text}</Link>
            ))
          }


        </List>
        
      </Toolbar>
      </AppBar>
  )
}
const useStyles = makeStyles ((theme)=> ({
  root:{
    backgroundColor: "#fafafa",
    top:0,
    left:0,
    right:0,
    zIndex: 999,
  },
toolbar:{
    display: "flex",
    justifyContent:"flex-start",
    alignItems: "center"
},
  logo:{
    height:"1.5rem",
    objectFit: "contain",
    "&:hover":{
      cursor:"pointer "//permite que al darle click al logo me redirecciones al about
    }
    
  },
  menu:{
    [theme.breakpoints.down("xs")]:{
      display: "none"
    },
    "& a": {
      color: "#333",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3)
    }
  },


}))


export default Navbar;