import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'
import { FC } from "react";
import styles from "@/styles/Header.module.scss";

const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
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

      <div className={styles.header__socials}>
        <a href="#">
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
