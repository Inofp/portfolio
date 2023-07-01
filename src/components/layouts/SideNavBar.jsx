
import styles from "../../styles/Sidenavbar.module.scss"
import React, { useContext } from 'react';
import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript1, DiSass } from "react-icons/di";
import { SiHtml5, SiCss3, SiMysql, SiTypescript, SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { ActiveContext } from "@/context";


const SideNavBar = () => {
    const { indexActive, setIndexActive } = useContext(ActiveContext);

    const handleItemClick = (index) => {
        setIndexActive(index);
    }

    return (
        <div className={styles.side__container}>
            <div ><h3 className={styles.side__title}>Tech stack</h3>
            </div>
            <div className={styles.side__items}>
                <div onClick={() => handleItemClick(0)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 0 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
                    <GrReactjs className={`text-2xl group-hover:text-white ${indexActive == 0 && 'text-white'}`} />
                    <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 0 && 'text-white'}`}>React</h6>
                </div>
                <div onClick={() => handleItemClick(1)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 1 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
                    <TbBrandNextjs className={`text-2xl group-hover:text-white ${indexActive == 1 && 'text-white'}`} />
                    <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 1 && 'text-white'}`}>Next.js</h6>
                </div>
                <div onClick={() => handleItemClick(2)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 2 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
                    <SiTypescript className={`text-2xl group-hover:text-white ${indexActive == 2 && 'text-white'}`} />
                    <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 2 && 'text-white'}`}>TypeScript</h6>
                </div>
                <div onClick={() => handleItemClick(3)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 3 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
                    <SiTailwindcss className={`text-2xl group-hover:text-white ${indexActive == 3 && 'text-white'}`} />
                    <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 3 && 'text-white'}`}>Tailwind</h6>
                </div>
                <div onClick={() => handleItemClick(4)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 4 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
                    <SiCss3 className={`text-2xl group-hover:text-white ${indexActive == 4 && 'text-white'}`} />
                    <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 4 && 'text-white'}`}>CSS</h6>
                </div>
                <div onClick={() => handleItemClick(5)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 5 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
                    <SiMysql className={`text-2xl group-hover:text-white ${indexActive == 5 && 'text-white'}`} />
                    <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 5 && 'text-white'}`}>MySQL</h6>
                </div>
                <div onClick={() => handleItemClick(6)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 6 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
                    <FaGitAlt className={`text-2xl group-hover:text-white ${indexActive == 6 && 'text-white'}`} />
                    <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 6 && 'text-white'}`}>Git</h6>
                </div>
                <div onClick={() => handleItemClick(7)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 7 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
                    <DiSass className={`text-2xl group-hover:text-white ${indexActive == 7 && 'text-white'}`} />
                    <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 7 && 'text-white'}`}>SASS</h6>
                </div>
                <div onClick={() => handleItemClick(8)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 8 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
                    <SiHtml5 className={`text-2xl group-hover:text-white ${indexActive == 8 && 'text-white'}`} />
                    <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 8 && 'text-white'}`}>HTML</h6>
                </div>
                <div onClick={() => handleItemClick(9)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 9 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
                    <SiMongodb className={`text-2xl group-hover:text-white ${indexActive == 9 && 'text-white'}`} />
                    <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 9 && 'text-white'}`}>MongoDB</h6>
                </div>
                <div onClick={() => handleItemClick(10)}
                    className={`flex mb-8 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto
                        ${indexActive == 10 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
                    <DiJavascript1 className={`text-2xl group-hover:text-white ${indexActive == 10 && 'text-white'}`} />
                    <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 10 && 'text-white'}`}>
                        JavaScript
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default SideNavBar;


































// import React, { useContext } from "react";
// import { FC } from 'react'
// import { GiHamburgerMenu } from "react-icons/gi";
// import { TbBrandNextjs } from "react-icons/tb";
// import { GrReactjs } from "react-icons/gr";
// import { SiTailwindcss } from "react-icons/si";
// import { DiJavascript1, DiSass } from "react-icons/di";
// import { SiHtml5, SiCss3, SiMysql, SiTypescript } from "react-icons/si";
// import { FaGitAlt } from "react-icons/fa";
// import { Disclosure } from '@headlessui/react'

// import styles from "../../styles/Sidenavbar.module.scss"
// import ActiveContext from './../../context/index';


// interface SideNavBarProps {
//   index: number;
// }

// const SideNavBar: FC<SideNavBarProps> = () => {
//   const { indexActive, setIndexActive } = useContext(ActiveContext);

//   const handleItemClick = (index: number) => {
//     setIndexActive(index);
//   }

//   return (
//     <Disclosure as="nav" defaultOpen>
//       <div className={styles.side__container}>
//         <div className={styles.side__title}><h3>Tech stack</h3>
//           <Disclosure.Button className="absolute bg-transparent backdrop-blur-3xl top-2 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
//             <GiHamburgerMenu aria-hidden="true" className="block  h-4 w-4" />
//           </Disclosure.Button>
//         </div>
//         <Disclosure.Panel>
//           <br />
//           <br />
//           <div className={styles.side__items}>
//             <div  onClick={() => handleItemClick(0)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 0 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
//               <GrReactjs className={`text-2xl group-hover:text-white ${indexActive == 0 && 'text-white'}`} />
//               <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 0 && 'text-white'}`}>React</h6>
//             </div>
//             <div  onClick={() => handleItemClick(1)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 1 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
//               <TbBrandNextjs className={`text-2xl group-hover:text-white ${indexActive == 1 && 'text-white'}`} />
//               <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 1 && 'text-white'}`}>Next.js</h6>
//             </div>
//             <div onClick={() => handleItemClick(2)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 2 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
//               <SiTypescript className={`text-2xl group-hover:text-white ${indexActive == 2 && 'text-white'}`} />
//               <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 2 && 'text-white'}`}>TypeScript</h6>
//             </div>
//             <div onClick={() => handleItemClick(3)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 3 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
//               <SiTailwindcss className={`text-2xl group-hover:text-white ${indexActive == 3 && 'text-white'}`} />
//               <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 3 && 'text-white'}`}>Tailwind</h6>
//             </div>
//             <div onClick={() => handleItemClick(4)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 4 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
//               <SiCss3 className={`text-2xl group-hover:text-white ${indexActive == 4 && 'text-white'}`} />
//               <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 4 && 'text-white'}`}>CSS</h6>
//             </div>
//             <div onClick={() => handleItemClick(5)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 5 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
//               <SiMysql className={`text-2xl group-hover:text-white ${indexActive == 5 && 'text-white'}`} />
//               <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 5 && 'text-white'}`}>MySQL</h6>
//             </div>
//             <div onClick={() => handleItemClick(6)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 6 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
//               <FaGitAlt className={`text-2xl group-hover:text-white ${indexActive == 6 && 'text-white'}`} />
//               <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 6 && 'text-white'}`}>Git</h6>
//             </div>
//             <div onClick={() => handleItemClick(7)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 7 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
//               <DiSass className={`text-2xl group-hover:text-white ${indexActive == 7 && 'text-white'}`} />
//               <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 7 && 'text-white'}`}>SASS</h6>
//             </div>
//             <div onClick={() => handleItemClick(8)} className={`flex mb-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${indexActive == 8 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
//               <SiHtml5 className={`text-2xl group-hover:text-white ${indexActive == 8 && 'text-white'}`} />
//               <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 8 && 'text-white'}`}>HTML</h6>
//             </div>
//             <div onClick={() => handleItemClick(9)}
//               className={`flex mb-8 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto
//                         ${indexActive == 9 ? 'bg-gray-900' : 'hover:bg-gray-900'}`}>
//               <DiJavascript1  className={`text-2xl group-hover:text-white ${indexActive == 9 && 'text-white'}`} />
//               <h6 className={`px-7 text-base text-gray-800 group-hover:text-white font-semibold ${indexActive == 9 && 'text-white'}`}>
//                 JavaScript
//               </h6>
//             </div>
//           </div>
//         </Disclosure.Panel>
//       </div>
//     </Disclosure>
//   );
// }

// export default SideNavBar;
