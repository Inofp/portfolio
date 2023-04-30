import SideNavBar from './SideNavBar'
import MySwiper from './Slider'




const Skills = () => {

    return (
        <div className='flex justify-center min-h-full'>
            <div className="max-w-[1420px] my-10">
                <div className='w-full flex flex-col lg:flex-row justify-center  max-lg:items-center'>
                    <div className="min-w-[300px] order-2 lg:order-1 max-lg:pb-5 max-lg:px-1">
                    <SideNavBar />
                    </div>
                    <div className='lg:order-2 w-full '>
                    <MySwiper />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills