import  deviceQuery  from "../constants/deviceInfo";

const { mobile, tablet, desktop } = deviceQuery;

const deviceMediaQuery = {
  mobile: `screen and ${mobile}`,
  tablet: `screen and ${tablet}`,
  desktop: `screen and ${desktop}`,
};

type deviceType = "mobile" | "tablet" | "desktop";

const applyMediaQuery = (device: deviceType) =>
  `@media ${deviceMediaQuery[device]}`;



export default applyMediaQuery;
