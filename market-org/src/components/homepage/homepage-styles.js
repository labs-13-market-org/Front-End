import {
    container,
    title,
    main,
    whiteColor,
    mainRaised,
    blackColor,
    grayColor
  } from "../global-styles/global.js";
  
  const homePageStyle = {
    container: {
      color: whiteColor,
      ...container,
      zIndex: "2"
    },
    title: {
      ...title,
      display: "inline-block",
      position: "relative",
      marginTop: "30px",
      minHeight: "32px",
      color: whiteColor,
      textDecoration: "none"
    },
    subtitle: {
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "10px auto 0"
    },
    main: {
      ...main
    },
    mainRaised: {
      ...mainRaised
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
      width: "auto"
    },
    list: {
      marginBottom: "0",
      padding: "0",
      marginTop: "0"
    },
    left: {
      float: "left!important",
      display: "block"
    },
    right: {
      padding: "15px 0",
      margin: "0",
      float: "right"
    },
    icon: {
      width: "18px",
      height: "18px",
      top: "3px",
      position: "relative"
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        padding: "70px 0",
        // border: '1px solid red',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // textAlign: "right",
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center'
      },

      sectionContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid green',
      },
      headerTitle: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        color: blackColor,
        fontSize: '2rem',
        fontFamily: 'Roboto',
      },
      description: {
        color: blackColor,
        textAlign: "justify",
        border: '1px solid red',
        fontFamily: 'Roboto',
        fontWeight: 300,
        fontSize: '1rem',
        lineHeight: '24px',
      },

      infoArea: {
     
        maxWidth: "360px",
        margin: "0 auto",
        padding: "70px 0 30px",
        // border: '2px solid green'
      },
      iconWrapper: {
        float: "left",
        marginTop: "24px",
        marginRight: "10px",
        border: '1px solid black'
      },
      infoIcon: {
        width: "4.25rem",
        height: "4.25rem",
        fontSize: "4.25rem",
        // border: '1px solid red',
      },
      descriptionWrapper: {
        color: grayColor[16],
        overflow: "hidden",
        textAlign: 'center',
        border: '1px solid red',
        width: '100%'
      },
      iconTitle: {
        ...title,
        margin: "1.75rem 0 0.875rem !important",
        minHeight: "unset",
        color: grayColor[16],
        fontSize: '1rem',
      },
      iconDescription: {
        color: grayColor[16],
        overflow: "hidden",
        marginTop: "0px",
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '24px',
        "& p": {
          color: grayColor[17],
          fontSize: "14px"
        }
      },
      iconWrapperVertical: {
        float: "none"
      },
      iconVertical: {
        width: "61px",
        height: "61px"
      },
      gradient: {
        background: 'radial-gradient(ellipse at center, #bb5778e8  0,#b42d5ae8 100%)',
        width: '100%',
        border: '1px solid purple',
        padding: '2rem',
        // height: '400px'
      }
  };
  
  export default homePageStyle;
  