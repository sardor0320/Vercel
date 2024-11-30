
import heroImg from '../../assets/img/image 3.png'
import ShinyButtonDemo from '../button/button'

export const Hero = () => {
    return (
        <div className=''>
            <div>
                <section className="relative py-12 lg:py-22">
                    <div
                        className=" mx-auto lg:max-w-7xl w-full  sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
                        <div className=" order-2 lg:order-1 relative flex flex-col  text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                            <div className="w-[87%]  m-10 ">
                                <h1 className="pb-4 text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-[#FF2DF7] from-20% via-[#0565ff] via-30% to-[#07eeff]">AI Marketing.
                                    
                                </h1>
                                <h2 className=" text-5xl md:text-6xl text-black dark:text-white">Optimized Reach.</h2>
                                <p className="text-2xl mt-14 text-black dark:text-gray-200 ">Our vision is to revolutionize the way brands and advertisers target, reach</p>
                                <div className='flex justify-center'>
                                    <p className="w-[85%] lg:w-full mt-14 h-[1.5px] bg-gradient-to-br from-sky-300 to-blue-600"></p>
                                </div>
                                <div className='mt-14 lg:justify-start justify-center flex'>
                                    <ShinyButtonDemo textName='Get Started' />
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex flex-1 lg:w-1/2 lg:h-auto justify-end relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                            <img src={heroImg} alt="Hero image"
                                className="lg:absolute  w-[90%] lg:h-90 rounded-2xl object-cover lg:max-h-none max-h-100" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
