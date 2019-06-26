import React from 'react'
import "../homepage/Homepage.css";
import { Container, Grid, Paper, Card, makeStyles, Button, Typography } from "@material-ui/core";
import styled from "styled-components";

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
        width: "25%",
        minHeight: 250,
        margin: "2%",
        padding: "2%"
    },

    bioText: {
        fontSize: "36px"
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
            <Card className={classes.card}><center><h2 className={classes.bioText}>Name</h2> </center>

            <BioText>

            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            </BioText>
            
            <SocialMedia>
            <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="50"></img>
            <img src="https://github.com/favicon.ico" width="50"></img>
            </SocialMedia>
            </Card>
            <Card className={classes.card}><center><h2 className={classes.bioText}>Name</h2> </center>
            
            <BioText>

            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            </BioText>
            
            <SocialMedia>
            <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="50"></img>
            <img src="https://github.com/favicon.ico" width="50"></img>
            </SocialMedia>
            </Card>
            <Card className={classes.card}><center><h2 className={classes.bioText}>Name</h2> </center> 
            

            <BioText>

            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            </BioText>
            
            <SocialMedia>
            <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="50"></img>
            <img src="https://github.com/favicon.ico" width="50"></img>
            </SocialMedia>
            </Card>
        </Bios>

        <Bios>

            <Card className={classes.card}><center><h2 className={classes.bioText}>Name</h2> </center>
            
            
            
            <BioText>

            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            </BioText>

            <SocialMedia>
            <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="50"></img>
            <img src="https://github.com/favicon.ico" width="50"></img>
            </SocialMedia>
            </Card>
            <Card className={classes.card}><center><h2 className={classes.bioText}>Name</h2> </center>
            
            <BioText>

            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            </BioText>
            
            <SocialMedia>
            <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="50"></img>
            <img src="https://github.com/favicon.ico" width="50"></img>
            </SocialMedia>
            </Card>

            <Card className={classes.card}><center><h2 className={classes.bioText}>Name</h2> </center>
            
            <BioText>

            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            </BioText>

            <SocialMedia>
            <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="50"></img>
            <img src="https://github.com/favicon.ico" width="50"></img>
            </SocialMedia>
            </Card>


        </Bios>

    </Column>
    </div>
)


}

export default About;