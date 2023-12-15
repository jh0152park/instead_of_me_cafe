import {
    Box,
    Center,
    Grid,
    HStack,
    Heading,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";

const SCREEN_WIDTH = window.innerWidth;

export default function Instagram() {
    const numOfImages = 15;
    let images: string[] = [];

    for (var i = 1; i <= numOfImages; i++)
        images.push(require(`../../resources/images/instagram/insta${i}.jpg`));

    return (
        <Center w="100%" h="100vh" bgColor="whiteAlpha.200">
            <VStack>
                <Box mb="120px">
                    <HStack w="100%">
                        <Box
                            w={`${SCREEN_WIDTH * 0.15}px`}
                            border="1px solid white"
                        />
                        <Heading mx="20px">About us</Heading>
                        <Box
                            w={`${SCREEN_WIDTH * 0.15}px`}
                            border="1px solid white"
                        />
                    </HStack>
                </Box>

                <Text fontWeight="bold" mb="30px">
                    @instead_of_me_coffee
                </Text>

                <Grid templateColumns="repeat(5, 1fr)" gap="30px">
                    {images.map((image, index) => (
                        <Box key={index} w="200px" h="200px">
                            <Image
                                w="100%"
                                h="100%"
                                src={image}
                                objectFit="cover"
                            />
                        </Box>
                    ))}
                </Grid>
            </VStack>
        </Center>
    );
}
