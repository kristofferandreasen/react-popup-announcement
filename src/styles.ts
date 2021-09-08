import { isMobile } from "react-device-detect";
import { ComponentProps } from "./index";

interface AnimationParams
  extends Pick<ComponentProps, "animateInDuration" | "animateOutDuration"> {
  showAnimation: boolean;
}

interface ReactAnnouncementStyles {
  bannerCard: React.CSSProperties;
  animationStyles: (params: AnimationParams) => React.CSSProperties;
  textWrapper: React.CSSProperties;
  titleStyle: React.CSSProperties;
  imageStyle: React.CSSProperties;
  subtitleStyle: React.CSSProperties;
  closeIcon: React.CSSProperties;
  button: React.CSSProperties;
  overlay: React.CSSProperties;
}

export const styles: ReactAnnouncementStyles = {
  bannerCard: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 1,
    margin: "auto",
    textAlign: "center",
    width: isMobile ? "90%" : "500px",
    height: isMobile ? "450px" : "400px",
    maxWidth: 500,
    zIndex: 2147483647,
    padding: 0,
    fontFamily: "inherit",
    borderRadius: isMobile ? 0 : 6,
    backgroundColor: "#FFF",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.15)",
    cursor: "pointer",
    /* CSS to make sure banner is placed right on in-app browser (mobile) */
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden"
  },

  animationStyles: ({
    showAnimation,
    animateInDuration,
    animateOutDuration
  }) => {
    const duration = showAnimation ? animateInDuration : animateOutDuration;
    const animationName = showAnimation ? "fadein" : "fadeout";
    const animation = `${animationName} ${duration}ms`;
    return {
      WebkitAnimation: animation,
      MozAnimation: animation,
      msAnimation: animation,
      OAnimation: animation,
      animation: animation
    };
  },

  textWrapper: {
    display: "flex",
    textAlign: "center",
    padding: 15,
    flexDirection: "column",
    cursor: "pointer"
  },

  titleStyle: {
    color: "#404447",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 1.25,
    marginBottom: 5,
    marginTop: 0,
    cursor: "pointer"
  },

  imageStyle: {
    height: 250,
    width: "100%",
    minWidth: 68,
    marginBottom: 0,
    backgroundSize: "cover",
    objectFit: "cover",
    overflow: "hidden",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },

  subtitleStyle: {
    color: "#A0A6AC",
    fontSize: 14,
    lineHeight: 1.4,
    margin: 0,
    marginBottom: 12,
    marginRight: 40,
    marginLeft: 40,
    cursor: "pointer",
    wordBreak: "normal",
    hyphens: "auto"
  },

  closeIcon: {
    position: "absolute",
    right: 5,
    top: 5,
    padding: 0,
    zIndex: 2147483649
  },

  button: {
    backgroundColor: "#000",
    color: "#FFFFFF",
    width: "100px",
    fontSize: 14,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 5,
    paddingTop: 7,
    borderRadius: 3,
    margin: "auto"
  },

  overlay: {
    backgroundColor: "#000",
    opacity: 0.6,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
};
