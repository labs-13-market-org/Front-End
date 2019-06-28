import React from 'react'
import "../homepage/Homepage.css";
import { Container, Grid, Paper, Card, makeStyles, Button, Typography } from "@material-ui/core";
import styled from "styled-components";

import patrick from "./patrick.JPG";
import lloyd from "./lloyd.JPG";
import toua from "./toua.JPG";

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(2, 2),
      width: "100%",
    },

    text: {
        textAlign: "center",
        fontSize: "24px"
    },

    card: {
        width: "36%",
        minHeight: 250,
        margin: "2%",
        padding: "2%"
    },

    bioText: {
        fontSize: "28px",
        width: "100%"
    },

    imgStyling: {
        maxHeight: 250,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    }

  }));

const Bios = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2%;
  margin-bottom: 2%;
`

const BioText = styled.div`
  font-size: 18px;
  margin: 3%;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2%;
    margin-bottom: 2%;
`
export const About = () => {

    const classes = useStyles();

return (
    <div className="welcome">
        <Column>
         <Paper className={classes.root}>
        <Typography variant="h2" component="h3">
          Who We Are?
        </Typography>
        <Typography component="p" className={classes.text}>
          We are a team of dedicated developers aiming to help farmers markets
          connect vendors to their customers. 
        </Typography>
      </Paper>

        <Bios>
            <Card className={classes.card}><center><h2 className={classes.bioText}>Francis Chen</h2> </center>

            <img src="https://avatars2.githubusercontent.com/u/5484192?s=460&v=4" className={classes.imgStyling}></img>

        {/* <BioText>

        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        </BioText> */}
            
            <SocialMedia>
            <a href="https://www.linkedin.com/in/francischen2/"><img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="50"></img></a>
            <a href="https://github.com/fncischen"><img src="https://github.com/favicon.ico" width="50"></img></a>
            </SocialMedia>
            </Card>
            <Card className={classes.card}><center><h2 className={classes.bioText}>Sem Limi</h2> </center>

            <img src="https://avatars2.githubusercontent.com/u/7892799?s=460&v=4" align="middle" className={classes.imgStyling}></img>
            
            {/* <BioText>

            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            </BioText> */}
            
            <SocialMedia>
            <a href="https://www.linkedin.com/in/sem-limi-85316427/"><img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="50"></img></a>
            <a href="https://github.com/Sem8"><img src="https://github.com/favicon.ico" width="50"/></a>
            </SocialMedia>
            </Card>
            <Card className={classes.card}><center><h2 className={classes.bioText}>Latifah President</h2> </center> 
            
            <img src="https://avatars2.githubusercontent.com/u/38023390?s=460&v=4" className={classes.imgStyling}></img>

            {/* <BioText>

            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            </BioText> */}
            
            <SocialMedia>
            <a href="https://www.linkedin.com/in/latifah-president/"><img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="50"></img></a>
            <a href="https://github.com/latifahpresident"><img src="https://github.com/favicon.ico" width="50"></img></a>
            </SocialMedia>
            </Card>
        </Bios>

        <Bios>

            <Card className={classes.card}><center><h2 className={classes.bioText}>Patrick Schwindt</h2> </center>
            
            <img src={patrick} className={classes.imgStyling}></img>
            
            {/* <BioText>

            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            </BioText> */}

            <SocialMedia>
            <a href="https://www.linkedin.com/in/patrick-schwindt-059089a3/"><img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="50"></img></a>
            <a href="https://github.com/pschwin"><img src="https://github.com/favicon.ico" width="50"></img></a>
            </SocialMedia>
            </Card>
            <Card className={classes.card}><center><h2 className={classes.bioText}>Toua Xiong</h2> </center>
            
            <img src={toua} className={classes.imgStyling}></img>

            {/* <BioText>

            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            </BioText> */}
            
            <SocialMedia>
            <a href="https://www.linkedin.com/in/toua-xiong-97bb45185/"><img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="50"></img></a>
            <a href="https://github.com/txiong000"><img src="https://github.com/favicon.ico" width="50"></img></a>
            </SocialMedia>
            </Card>

            <Card className={classes.card}><center><h2 className={classes.bioText}> (PM) Lloyd Edwards</h2> </center>
            
            <img src={lloyd} className={classes.imgStyling}></img>
{/* 
            <BioText>

            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            </BioText> */}

            <SocialMedia>
            <a href="https://www.linkedin.com/in/tactnician/"><img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="50"></img></a>
            <a href="https://github.com/tactnician"><img src="https://github.com/favicon.ico" width="50"></img></a>
            </SocialMedia>
            </Card>


        </Bios>

    </Column>
    </div>
)


}

export default About;