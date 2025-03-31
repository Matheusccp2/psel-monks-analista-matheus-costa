import img1 from '../assets/img-gallery1.png';
import img2 from '../assets/img-gallery2.png';
import img3 from '../assets/img-gallery3.png';

export default function Gallery() {
    return (
        <div class="flex flex-wrap justify-center gap-4 p-8 px-6 md:pt-16 md:px-20 md:pb-16 md:h-[845px]">
            <div className="flex flex-col w-full md:w-[500px] gap-6 md:gap-[34px]">
                <div className="flex flex-col gap-[8px]">
                    <h3 className='text-2xl md:text-[40px] font-bold'>Lorem ipsum dolor sit amet consectetur</h3>
                    <p className='text-[16px] md:text-2xl font-thin'>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo</p>
                </div>
                <img src={img1} alt="" className=''/>
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-[8px]">
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
        </div>
    )
}