// Import Swiper React components
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Chakra-UI
import { Flex } from "@chakra-ui/react";

// Components
import ContinentBanner from "./ContinentBanner";

// React
import { useEffect, useState } from "react";

// Axios
import { api } from "../../services/api";
import { Url } from "url";

interface Continents {
  id: number;
  name: string;
  description: string;
  image: string;
  shortcut: string;
}

function Swiper() {
  const [continents, setContinents] = useState<Continents[]>();

  useEffect(() => {
    const getContinents = async () => {
      const response = await api.get("/continents");
      const data = response.data;

      setContinents(data);
    };

    getContinents();
  }, []);

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
        {continents &&
          continents.map((continent) => (
            <SwiperSlide>
              <ContinentBanner
                key={continent.id}
                name={continent.name}
                description={continent.description}
                image={continent.image}
                shortcut={continent.shortcut}
              />
            </SwiperSlide>
          ))}
      </SwiperComponent>
    </Flex>
  );
}

export default Swiper;
