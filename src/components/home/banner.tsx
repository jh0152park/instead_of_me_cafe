import { Box, Image } from "@chakra-ui/react";

export default function Banner() {
    const backgroundImage = require("../../resources/images/roasting.jpg");

    return (
        <Box w="100%" h="100vh">
            <Image w="100%" h="100%" src={backgroundImage} objectFit="cover" />
        </Box>
    );
}
