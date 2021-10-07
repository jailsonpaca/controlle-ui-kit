import styled from "styled-components";
import { COLORS } from "styles";

export default {
  content: {
    paddingTop: 38,
    paddingBottom: 38,
  },
  settingsHeader: {
    padding: "15px 3px",
  },
  title: {
    marginRight: 18,
    lineHeight: "33px",
  },
  buttonAdd: {
    height: 31,
    paddingTop: 0,
    paddingBottom: 0,
  },
  linkFilter: {
    marginRight: 22,
    marginLeft: 10,
  },
  linkHelper: {
    marginLeft: "auto",
    marginRight: 15,
    marginTop: 5,
  },
  textAdd: {
    alignSelf: "center",
  },
  periodContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    marginLeft: "9%",
    flexWrap: "wrap",
  },
  navBack: {
    minWidth: 20,
    width: 20,
    height: 20,
    left: 0,
    top: 0,
    marginRight: 13,
    backgroundColor: COLORS.white,
    boxShadow: `0px 2px 2px 0px ${COLORS.blueGreyTwoOpacity}`,
    position: "relative",
  },
  navNext: {
    minWidth: 20,
    width: 20,
    height: 20,
    left: 0,
    top: 0,
    marginLeft: 13,
    backgroundColor: COLORS.white,
    boxShadow: `0px 2px 2px 0px ${COLORS.blueGreyTwoOpacity}`,
    position: "relative",
  },
  full: {
    flexBasis: "100%",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 14,
    paddingLeft: 24,
    paddingBottom: 14,
    width: 200,
  },
  button: {
    display: "flex",
    width: "100px",
    paddingLeft: 0,
  },
};

export const Container = styled.div`
  padding: 10px 0 10px 0;
  ${(props) => props.usePeriod && "padding-right: 10px;"}
  display: flex;
`;

export const Link = styled.a`
  font-family: ProximaNovaBold;
  font-size: 14px;
  color: ${COLORS.blueGrey};
  &:hover {
    text-decoration: underline;
    color: ${COLORS.blueGrey};
  }
`;
