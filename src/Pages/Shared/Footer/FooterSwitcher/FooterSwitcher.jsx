import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import HomeOutFooter from "../HomeOutFooter/HomeOutFooter";


const FooterSwitcher = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Footer />;
  } else {
    return <HomeOutFooter/>;
  }
};

export default FooterSwitcher;
