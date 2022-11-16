import {
  makeStyles,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import React from "react";
import dragon from "../images/dragon.jpeg";

const About = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Card className={classes.card}>
          <CardMedia image={dragon} className={classes.media} title="picture" />
          <CardContent className={classes.cardcontent}>contenido</CardContent>
        </Card>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  sectioncontent: {
    maxWidth: "80vw",
    margin: "0 auto",
  },
  card: {
    height: "70vh",
    display: "flex",
    marginTop: theme.spacing(6),
    position: "relative",
  },
  media: {
    width: "250px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",
    margin: theme.spacing(5),
  },
}));

export default About;
