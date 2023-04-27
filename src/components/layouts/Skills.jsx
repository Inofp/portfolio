import SideNavBar from './SideNavBar'
import MySwiper from './Slider'




const Skills = () => {

    return (
        <div className='flex justify-center h-full'>
            <div className="max-w-[1420px]  my-10">
                <div className='w-full flex'>
                    <div className="w-1/4 min-w-[300px]">
                    <SideNavBar />
                    </div>
                    <div className='w-3/4'>
                    <MySwiper />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills