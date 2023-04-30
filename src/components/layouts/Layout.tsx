import { FC, PropsWithChildren, useState } from "react";
import { IMeta } from "../SEO/meta.interface";
import Meta from "../SEO/Meta";
import Footer from "./Footer";
import { ActiveContext } from "@/context";
import Header from "./Header";


const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  const [indexActive, setIndexActive] = useState(0);


  return (
    <ActiveContext.Provider value={{
      indexActive,
      setIndexActive
    }}>
      <Meta title={title} description={description}>
        <Header />
        {children}
        <Footer />
      </Meta>

    </ActiveContext.Provider>

  );
};

export default Layout;
