// Import Swiper React components
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

// Chakra-UI
import { Flex } from "@chakra-ui/react";


function Swiper() {
    return (
        <Flex
            py={10}
            px={[2, 2, 2, 24]}
            alignItems="center"
            justifyContent="center"
            border="2px solid black"
            bg="gray.100"
        >
            <SwiperComponent
                slidesPerView={1}
                navigation
                pagination
                modules={[Navigation, Pagination]}
                centeredSlides
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </SwiperComponent>
        </Flex>
    )
}

export default Swiper;