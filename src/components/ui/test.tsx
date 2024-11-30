
import Marquee from "./marquee";
import logo1 from "../../assets/img/1.png"
import logo2 from "../../assets/img/2.png"
import logo3 from "../../assets/img/3.png"
import logo4 from "../../assets/img/4.png"
import logo5 from "../../assets/img/5.png"
import logo6 from "../../assets/img/6.png"
import logo7 from "../../assets/img/7.png"
import logo8 from "../../assets/img/8.png"
import logo9 from "../../assets/img/9.png"
import logo10 from "../../assets/img/10.png"
import logo11 from "../../assets/img/11.png"
import logo12 from "../../assets/img/12.png"
import logo13 from "../../assets/img/13.png"
import logo14 from "../../assets/img/14.png"
import logo15 from "../../assets/img/15.png"
import logo16 from "../../assets/img/16.png"
import logo17 from "../../assets/img/17.png"
import logo18 from "../../assets/img/18.png"
import logo19 from "../../assets/img/19.png"
import logo20 from "../../assets/img/20.png"




const reviews1 = [
    {
        id: 1,
        img: logo1,
    },
    {
        id: 2,
        img: logo2,
    },
    {
        id: 3,
        img: logo3,
    },
    {
       id: 4,
        img: logo4,
    },
    {
        id: 5,
        img: logo5,
    },
    {
        id: 6,
        img: logo6,
    },
    
];

const reviews2 = [
    {
        id: 7,
        img: logo7,
    },
    {
        id: 8,
        img: logo8,
    },
    {
        id: 9,
        img: logo9,
    },
    {
        id: 10,
        img: logo10,
    },
    {
        id: 11,
        img: logo11,
    },
    {
        id: 12,
        img: logo12,
    },
    {
        id: 13,
        img: logo13,
    }
]

const reviews3 = [
    {
        id: 14,
        img: logo14,
    },
    {
        id: 15,
        img: logo15,
    },
    {
        id: 16,
        img: logo16,
    },
    {
        id: 17,
        img: logo17,
    },
    {
        id: 18,
        img: logo18,
    },
    {
        id: 19,
        img: logo19,
    },
    {
        id: 20,
        img: logo20,
    }
]

export function MarqueeDemo() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center gap-y-7">
            <Marquee pauseOnHover className="[--duration:0s]">
            <div className="flex flex-wrap  items-center">
             {
            reviews1.map((item) =>{
                return (
                        <img src={item.img} alt="logo" className="mx-8 lg:mx-16" />        
                )
            })
          }
             </div>
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:0s]">
            <div className="flex flex-wrap  items-center">
             {
            reviews2.map((item) =>{
                return (
                        <img src={item.img} alt="logo" className="mx-8 lg:mx-12" />        
                )
            })
          }
             </div>
            </Marquee>
            <Marquee  pauseOnHover className="[--duration:0s]">
            <div className="flex flex-wrap  items-center">
             {
            reviews3.map((item) =>{
                return (
                        <img src={item.img} alt="logo" className="mx-8 lg:mx-12" />        
                )
            })
          }
             </div>
            </Marquee>
           <h1 className="text-xl  text-black dark:text-gray-300">Trusted by the world’s most ambitious teams.</h1>
        </div>
    );
}
