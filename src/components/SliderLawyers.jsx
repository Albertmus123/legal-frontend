import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

function SampleNextArrow(props) {
    const {onClick } = props;
    return (
        <div  className="flex absolute -right-2 top-64 border border-2 rounded-md invisible bg-[#003566] text-gray-100 p-2  md:invisible lg:visible ">
        <MdArrowForwardIos onClick={onClick} />
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div  className="flex absolute -left-2 z-10 top-64 border border-2 rounded-md invisible bg-[#003566] p-2 text-gray-100  md:invisible lg:visible ">
      <IoIosArrowBack  onClick={onClick} />
      </div>
    );
  }


export const SliderLawyers = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
      };
      return (
        <div>
          <h1 className="pt-4 pb-16" ><SectionTitle title="Abanyamategeko"  /></h1>
          <Slider {...settings}>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
            <Card />
            </div>
            <div>
            <Card />
            </div>
          </Slider>
        </div>
      );
    }
  
  