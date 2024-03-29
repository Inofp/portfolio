import { FC } from 'react'
import styles from '@/styles/About.module.scss'
import userData from "../../constants/data";



const About: FC = () => {

    return (
        <div className={styles.about}>
            <div className={styles.about__wrapper}>
                <div className={styles.about__title}>
                    <h1 className={styles.about__themeOff}>About me</h1> 
                    <div className={styles.title__line}></div>
                    <p className={styles.about__title__text}>
                        Web developer, enjoying creating beautiful sites with good UX design.
                        <p className='py-1'>Current tech stack: Next.js, React, Typescript, Tailwind, MongoDB, MySql, Prisma.</p>
                        <p>Ready to realize your project ideas!</p>
                    </p>
                </div>

                <div className={styles.about__education}>
                    <h1 className={styles.about__theme} id='theme'>Education</h1>
                    <div className={styles.about__uni}>Belarusian State University</div>
                    <div className={styles.about__spec}>Information systems and technologies (Software engineer)</div>
                    <div className={styles.about__uni}>Course:</div>
                    <div className={styles.about__course}>Fundamentals of programming and design <a href="ulearn.com">[ulearn.me]</a></div>
                    <div className={styles.about__course}><a href="https://www.sololearn.com/certificates/CT-FIY9TOQU">Sololearn Certification</a></div>
                    <div className={styles.about__course}>EPAM .NET Development</div>
                    
                </div>

                <div className={styles.about__contact}>
                    <h1 className={styles.about__theme} id='theme'>Contacts</h1>
                    <div className={styles.contacts}>
                        <div className={styles.contacts__item}>
                            <span className={styles.contacts__arrow}>&rarr;</span>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/> </svg> @arimafp
                            </span>
                        </div>

                        <div className={styles.contacts__item}>
                            <span className={styles.contacts__arrow}>&rarr;</span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                </svg> {userData.email}
                            </span>
                        </div>

                        <div className={styles.contacts__item}>

                            <span className={styles.contacts__arrow}>&rarr;</span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    />
                                </svg> {userData.phone}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About