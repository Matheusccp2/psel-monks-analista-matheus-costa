import img1 from '../assets/card-appstore.png';
import img2 from '../assets/card-googlepay.png';

export default function Info() {
    return (
        <div className="p-8 px-6 md:pt-16 md:px-20 md:pb-16">
            <div className="bg-[#3C0C60] flex flex-col md:flex-row md:justify-evenly items-center gap-10 p-6 md:p-10 rounded-3xl">
                <div>
                    <h3 className='text-2xl md:text-[40px] font-bold text-[#EAE8E4]'>Lorem ipsum dolor sit amet consectetur</h3>
                    <p className='text-[16px] md:text-2xl font-thin text-[#EAE8E4]'>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <img src={img1} alt="" className='h-full w-[264px] md:h-16'/>
                    <img src={img2} alt="" className='md:h-16'/>
                </div>
            </div>
        </div>
    )
}