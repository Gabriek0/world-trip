// Nextjs
import { useRouter } from "next/router";

// Chakra
import { Box, Flex, Link } from "@chakra-ui/react";

// Icons
import { WorldTripIcon } from "../../icons";
import { IoIosArrowBack } from "react-icons/io";

function Header() {
  const Router = useRouter();

  return (
    <Flex
      as="header"
      h="24"
      w="100%"
      py="6"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      {Router.asPath !== "/" && (
        <Box
          onClick={() => Router.back()}
          position="absolute"
          cursor="pointer"
          left={[8, 16]}
        >
          <IoIosArrowBack size={30} />
        </Box>
      )}

      <Link href="/">
        <WorldTripIcon />
      </Link>
    </Flex>
  );
}

export default Header;
