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

  const vendorProfileStyle = {
    container: {
        color: whiteColor,
        ...container,
        zIndex: "2"
      },

      main: {
        ...main
      },
      mainRaised: {
        ...mainRaised
      },
  }

  export default vendorProfileStyle

