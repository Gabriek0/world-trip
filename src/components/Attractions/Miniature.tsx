import { Flex, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface MiniatureProps {
    icon: JSX.Element;
    text: string;
};

function Miniature({ icon, text }: MiniatureProps) {
    return (
        <Flex
            flexDirection="column"
            alignItems="center"
        >
            {icon}
            <Text
                color="gray.400"
                // 16 -> mobile 
                // 18 -> iPad
                // 20 -> desktop
                fontSize={["16", "18", "20"]}
                my="4"
                textAlign="center"
            >
                {text}
            </Text>
        </Flex>
    )
};

export default Miniature;