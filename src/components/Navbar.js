import { AppBar, makeStyles, Toolbar, IconButton } from "@material-ui/core";
import List from "@mui/material/List";

import logo from "../images/portafolio.png";
import { Link, animateScroll as scroll } from "react-scroll";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import MenuIcon from "@mui/icons-material/Menu";

import { Drawer } from "@mui/material";
import React, { useState } from "react";

const links = [
  {
    id: "about",
    text: "About Me",
    icon: <InfoOutlinedIcon />,
  },
  {
    id: "Skills",
    text: "Skills",
    icon: <PsychologyOutlinedIcon />,
  },
  {
    id: "work",
    text: "My Work",
    icon: <HomeRepairServiceOutlinedIcon />,
  },
  {
    id: "contact",
    text: "Get in touch",
    icon: <RecentActorsOutlinedIcon />,
  },
];

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = (useState = false);
  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img src={logo} className={classes.logo} alt="Logo" />
          <List className={classes.menu}>
            {
              //libreria react-scroll
              links.map(({ id, text }, index) => (
                <Link
                  key={index} //este link me permite que ar darle click me dirija a section correspondiente
                  to={id} //Destino al que desplazarse
                  spy={true} //Hacer que el enlace esté seleccionado cuando el desplazamiento esté en su posición de destino
                  activeClass="active" //	clase aplicada cuando se alcanza el elemento
                  smooth={true} //Animar el desplazamiento
                  duration={500} //tiempo de la animación de desplazamiento: puede ser un número o una función (`function (scrollDistanceInPx) { return duration; }`), que permite un control más granular en tiempo de ejecución
                  offset={-70} //offset Desplazar px adicional (como relleno)
                >
                  {text}
                </Link>
              ))
            }
          </List>
          <IconButton edge="end" className={classes.menubutton}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}>
        <IconButton>
            <CancelPresentationIcon />
        </IconButton>
      </Drawer>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fafafa",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  toolbar: {
    display: "flex", //alinear horizontalmente
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    height: "1.5rem",
    objectFit: "contain",
    "&:hover": {
      cursor: "pointer ", //permite que al darle click al logo me redirecciones al about
    },
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& a": {
      //los links se comportan como la etiqueta a
      color: "#333",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3),
    },
    "& a:hover": {
      cursor: "pointer", // permite que el cursor del mouse sea pointer
      color: "tomato",
      boderBottom: "3px solid tomato",
    },
  },
  menubutton: {
    display: "none", //para que no aparesca en sm
    [theme.breakpoints.down("sm")]: {
      //punto de quiebre mas pequeño que sm
      display: "block",
      color: "tomato",
      position: "absolute",
      top: 0,
      right: 10,
    },
  },
}));

export default Navbar;
