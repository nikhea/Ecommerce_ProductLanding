import NavBar from "../navbar/navBar";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
