// import '../subida-informacion/globals.css';
import React from "react";
import Navigation from '../../components/partials/navigation'
import Footer from "../../components/partials/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
