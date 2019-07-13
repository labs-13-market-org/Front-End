import React from "react";
import { withRouter } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import footerStyles from './footer-styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './footer.css';

const Footer = (props) => {
  const { classes, ...rest } = props
  return (
      <footer className={classes.container}>
        <div className={classes.left}>
        <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="/"
                      className={classes.block}
                    >
                      Market Organizer
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="/about"
                      className={classes.block}
                    >
                      About Us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="/contact"
                      className={classes.block}
                    >
                      Contact Us
                    </a>
                  </ListItem>
                </List>
        </div>
        <div className={classes.right}>
          Developed by students at {' '} <a href='https://lambdaschool.com/'>Lambda School</a> {' '}
          &copy; {1900 + new Date().getYear()}
         </div>
      </footer>
  );
};

export default withRouter(withStyles(footerStyles)(Footer));