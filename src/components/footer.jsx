import img1 from '../assets/instagram-icon.svg';
import img2 from '../assets/whatsapp-icon.svg';
import img3 from '../assets/twitter-icon.svg';
import img4 from '../assets/facebook-icon.svg';


export default function Footer() {
    return (
        <div className='flex flex-col justify-center gap-4 bg-[#2D2D2D] py-2.5 md:pb-8'>
            <hr className='w-4/5 border-t-1 border-[#DFBBFE] mx-auto' />
            <div className=" flex flex-row justify-center gap-8 my-6">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
            <p className='flex justify-center text-white text-xl'>Lorem ipsum dolor sit amet</p>
            <div className='flex flex-wrap justify-center gap-4 md:gap-10'>
                <p className='text-[#EAE8E4] font-normal text-base'>Lorem ipsum</p>
                <p className='text-[#EAE8E4] font-normal text-base'>Lorem ipsum</p>
                <p className='text-[#EAE8E4] font-normal text-base'>Lorem ipsum</p>
                <p className='text-[#EAE8E4] font-normal text-base'>Lorem ipsum</p>
            </div>
        </div>
    )
}