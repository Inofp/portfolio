import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/Header.module.scss";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Header = () => {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);
  const [nav, setNav] = useState(false);


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleLanguageSelector = () => {
    setIsOpen(!isOpen);
  };


  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <header className={styles.header}>
      <div className="max-lg:hidden ml-44">
        <div className={styles.header__links}>
          <Link href="/" className={pathname == "/" ? styles.active : ""}>
            <span className={styles.header__text}>Home</span>
          </Link>
          <Link href="/about" className={pathname == "/about" ? styles.active : ""}>
            <span className={styles.header__text}>About</span>
          </Link>
          <Link href="/skills" className={pathname == "/skills" ? styles.active : ""}>
            <span className={styles.header__text}>Skills</span>
          </Link>
          <Link href="/projects" className={pathname == "/projects" ? styles.active : ""}>
            <span className={styles.header__text}>Projects</span>
          </Link>
        </div>
      </div>

      <div >
        <div onClick={handleNav} className={ !nav ? 'block lg:hidden cursor-pointer px-10' : 'hidden'} >
          <AiOutlineMenu size={35} />
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[40%] opacity-95 flex flex-col shadow-xl shadow-cyan-500/50 h-full border-r border-r-gray-900 bg-[#cbd5e1] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <div onClick={handleNav} className="absolute right-10 top-8 cursor-pointer"><AiOutlineClose size={25} /></div>
          <div className={styles.navitem}>
            <li className='p-4 ml-5 mt-20 '>
              <Link href="/" className={pathname == "/" ? styles.active : ""}>
                <span className={styles.header__text}>Home</span>
              </Link>
            </li>
          </div>

          <div className={styles.navitem}>
            <li className='p-4 ml-5 border-b border-gray-600'>
              <Link href="/about" className={pathname == "/about" ? styles.active : ""}>
                <span className={styles.header__text}>About</span>
              </Link>
            </li>
          </div>
          <div className={styles.navitem}>
            <li className='p-4 ml-5 border-b border-gray-600'>
              <Link href="/skills" className={pathname == "/skills" ? styles.active : ""}>
                <span className={styles.header__text}>Skills</span>
              </Link>
            </li>
          </div>
          <div className={styles.navitem}>
            <li className='p-4 ml-5 border-b border-gray-600'>
              <Link href="/projects" className={pathname == "/projects" ? styles.active : ""}>
                <span className={styles.header__text}>Projects</span>
              </Link>
            </li>
          </div>
        </ul>
      </div>



      <div className={styles.header__socials}>

        <div ref={selectorRef} className={styles.languageSelector}>
          <button className={styles.button} onClick={toggleLanguageSelector}>
            <span className={styles.buttonText}>En</span>
            <span className={styles.caret}></span>
          </button>
          <ul
            className={`${styles.languageOptions} ${isOpen ? styles.open : ""}`}
          >
            <li>
              <p className={styles.languageOption}>Ru</p>
            </li>
            <li className={styles.separator}></li>
            <li>
              <p className={styles.languageOption}>En</p>
            </li>
          </ul>

        </div>


        <a href="#" className="pl-5">
          <Image src="/Instagram_logo_2016.svg.png" alt='inst' width={25} height={25} />
        </a>
        <a href="#">
          <Image src="/telega.png" alt='tg' width={25} height={25} />
        </a>
        <a href="#">
          <Image src="/ln.png" alt='ln' width={25} height={25} />
        </a>
      </div>
    </header>
  );
};

export default Header;
