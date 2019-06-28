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
      },
      card: {
        border: "0",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        // color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
        background: whiteColor,
        width: "90%",
        // boxShadow:
        //   "0 2px 2px 0 rgba(" +
        //   hexToRgb(blackColor) +
        //   ", 0.14), 0 3px 1px -2px rgba(" +
        //   hexToRgb(blackColor) +
        //   ", 0.2), 0 1px 5px 0 rgba(" +
        //   hexToRgb(blackColor) +
        //   ", 0.12)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: 345,
        wordWrap: "break-word",
        fontSize: ".875rem",
        // some jss/css to make the cards look a bit better on Internet Explorer
        "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
          display: "inline-block !important"
        },
        border: '1px solid orange'
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
        // margin: "1.75rem 0 0.875rem !important",
        // minHeight: "unset",
        color: grayColor[16],
        fontSize: '1rem',
      },
      // card: {
      //   maxWidth: 345,
      //   // height: '150px',
      // },
      media: {
      
        paddingTop: "56.25%" // 16:9
      },
      overlay: {
        position: 'absolute',
  
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        // backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: '2',

        // backgroundColor: '#5787c19d',
        // position: 'relative',
        // top: 0,
        // left: 0,
        // width: '100%',
        // height: '100%',
        //  zIndex: '2000',
        //  border: '2px solid purple',
          // position: 'absolute',
          // top: '20px',
          // left: '20px',
          // color: 'black',
          backgroundColor: '#4e4b4b80'
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
  