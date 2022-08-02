// Import Swiper React components
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Chakra-UI
import { Flex, Link, Text } from "@chakra-ui/react";

function Swiper() {
  return (
    <Flex
      py={10}
      px={[2, 2, 2, 24]}
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
    >
      <SwiperComponent
        style={{
          height: "30rem",
        }}
        slidesPerView={1}
        navigation
        pagination
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <Flex
            as={Link}
            href="/continent/europe"
            h="100%"
            bg="url(https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1504&q=80)"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPos="center"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            fontWeight="bold"
          >
            <Text color="white" textAlign="center" fontSize={[32, 40]}>
              Europa
            </Text>
            <Text
              textAlign="center"
              color="gray.200"
              mt={4}
              fontSize={[20, 20, 28]}
            >
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </SwiperComponent>
    </Flex>
  );
}

export default Swiper;
