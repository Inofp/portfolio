import React from 'react';
import styles from "@/styles/Home.module.scss";
import Image from 'next/image'
import MyButton from './../UI/MyButton';
import userData from "../../constants/data";
import Typed from 'typed.js';
import Link from 'next/link';


const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['developer', 'designer'],
      typeSpeed: 120,
      backSpeed: 110,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (

    <div className={styles.Home__form}>
      <div className='2xl:w-[650px] 2xl:h-[450px] max-md:w-[480px] max-md:h-[380px]  w-[600px] h-[400px]  relative'>
        <Image src="/meq.jpg" alt='my photo' fill className='rounded-xl' priority />
      </div>
      <div className={styles.Home__text}>
        <h1> {userData.sayHello} {userData.name}</h1>
        <div className='flex max-[436px]:text-base pb-1'>
          <h1 className='pr-2 text-gray-800'>Web</h1> <h1 ref={el} className='text-gray-600 border-b-5' />
        </div>
        <span className={styles.Home__text__span}>{userData.about.title}</span>
        <br /><br />
        <MyButton href='https://inofp.github.io/cv/' target="_blank">CV Review &nbsp;<Image src="/st.png" alt='my photo' width={17} height={17} /></MyButton>
      </div>
    </div>
  );
};

export default Home;
