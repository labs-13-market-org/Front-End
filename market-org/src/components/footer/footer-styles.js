import {
    container,
    title,
    main,
    whiteColor,
    mainRaised,
    blackColor,
    grayColor,
    purpleBackgroundColor
  } from "../global-styles/global.js";

  const footerStyles = {
    left: {
        float: "left!important",
        display: "block",
        backgroundColor: whiteColor,
       
      },
      right: {
        padding: "15px 0",
        margin: "0",
        float: "right",
        color: grayColor[4],
      },
      rightLinks: {
        float: "right!important",
        "& ul": {
          marginBottom: 0,
          marginTop: 10,
          padding: 0,
          listStyle: "none",
          height: 38,
          "& li": {
            display: "inline-block"
          }
        },
        "& i": {
          fontSize: "20px"
        }
      },
      footer: {
        padding: "0.9375rem 0",
        textAlign: "center",
        display: "flex",
        zIndex: "2",
        position: "relative",
        "& ul": {
          marginBottom: "0",
          padding: 0,
          listStyle: "none"
        }
      },

      container,
      list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0",
        color: 'green',
      },
      block: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block"
      },
      inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto",
        marginRight: '.5rem',
        color: grayColor[4],
        textDecoration: "none",
        "& a": {
        "&:visited": {
            color: grayColor[4]
        },
        "&:hover, &:focus": {
            color: 'black'
        }
        }
     },
  }

  export default footerStyles