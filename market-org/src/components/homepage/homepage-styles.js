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
    caret: {
      display: "inline-block",
      width: "0",
      height: "0",
      marginLeft: "4px",
      verticalAlign: "middle",
      borderTop: "4px solid",
      borderRight: "4px solid transparent",
      borderLeft: "4px solid transparent"
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        padding: "70px 0",
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
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
        color: purpleBackgroundColor,
        fontSize: '2rem',
        fontFamily: 'Roboto',
      },
      description: {
        color: purpleBackgroundColor,
        textAlign: "justify",
        // border: '1px solid red',
        fontFamily: 'Roboto',
        fontWeight: 400,
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
        // border: '1px solid red',
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
      },

      feauturedMarket: {
        // border: '2px solid green',  
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gridTemplateRows: 'repeat(2)',
        justifyItems: 'center',
        gridRowGap: '30px', 
        padding: '1rem',
        marginBottom: '.5rem'
      },

      feauturedMarketBottom: {
        // border: '2px solid green',  
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gridTemplateRows: 'repeat(2)',
        justifyItems: 'center',
        gridRowGap: '30px', 
        padding: '1rem',
        marginBottom: '.5rem'
      },
      card: {
        borderRadius: "6px",
        background: whiteColor,
        width: "90%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        fontSize: ".875rem",
        // border: '1px solid orange'
      },

      cardBodyBackground: {
        position: "absolute",
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: "12",
        minHeight: "280px",
        paddingTop: "40px",
        paddingBottom: "40px",
        maxWidth: "440px",
        margin: "0 auto",
        color: grayColor[16],
        fontSize: '1rem',
      },
      media: {
        paddingTop: "56.25%" 
      },
      overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '2',
        backgroundColor: '#4e4b4b80',
        // backgroundColor: '#4e4b4b80'
       },
       gridContainer: {
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          gridTemplateColumns: 'repeat(2, 90px)',
          gridTemplateRows: 'repeat(32 100px)', 
          gridColumnGap: '15px',
          gridRowGap: '10px',
          justifyContent: 'center'
       }
  };
  
  export default homePageStyle;
  