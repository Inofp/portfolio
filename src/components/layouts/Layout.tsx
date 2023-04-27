import { FC, PropsWithChildren, useState } from "react";
import Header from "./Header";
import { IMeta } from "../SEO/meta.interface";
import Meta from "../SEO/Meta";
import Footer from "./Footer";
import ActiveContex from './../../context/index';

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  const [indexActive, setIndexActive] = useState(0);

  return (
    <ActiveContex.Provider value={{
      indexActive,
      setIndexActive
    }}>
      <Meta title={title} description={description}>
      <Header />
      {children}
      <Footer/>
    </Meta>
    </ActiveContex.Provider>
    
  );
};

export default Layout;
