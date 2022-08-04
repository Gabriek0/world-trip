import { Flex, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  name: string;
  description: string;
  image: string;
  shortcut: string;
}

function ContinentBanner({
  name,
  description,
  shortcut,
  image,
}: ContinentBannerProps) {
  return (
    <Flex
      as="a"
      href={`/continents/${shortcut}`}
      h="100%"
      bg={`url(${image})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      fontWeight="bold"
    >
      <Text color="white" textAlign="center" fontSize={[32, 40]}>
        {name}
      </Text>
      <Text textAlign="center" color="gray.200" mt={4} fontSize={[20, 20, 28]}>
        {description}
      </Text>
    </Flex>
  );
}

export default ContinentBanner;
