import { FC } from "react";
import styles from "@/styles/Home.module.scss";
import Image from 'next/image'
import MyButton from './../UI/MyButton';
import userData from "../../constants/data";

const Home: FC = () => {
  const downloadResume = () => {

  }

  return (
    <div>
      <div className={styles.Home__form}>
        <div className={styles.Home__img}>
          <Image src="/ya.jpg" alt='my photo' width={477} height={455} />
        </div>
        <div className={styles.Home__text}>
          <h1>Hi, I'm { userData.name }</h1>
          <h1>Frontend Developer</h1>
          <span className={styles.Home__text__span}>{ userData.about.title }</span>
          <br/><br/>
          <MyButton onClick={downloadResume}><p className={styles.btnIn__text}>Resume<Image src="/st.png" alt='my photo' width={17} height={17} /></p></MyButton>
        </div>
      </div>


    </div>
  );
};

export default Home;
