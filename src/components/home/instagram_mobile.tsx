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

export default function InstagramMobile() {
    const numOfImages = 15;
    let images: string[] = [];

    for (var i = 1; i <= numOfImages; i++)
        images.push(require(`../../resources/images/instagram/insta${i}.jpg`));

    return (
        <Center w="100%" minH="100vh" bgColor="whiteAlpha.200">
            <VStack mt="200px">
                <Box mb="120px">
                    <HStack w="100%">
                        <Box
                            w={`${SCREEN_WIDTH * 0.1}px`}
                            border="1px solid white"
                        />
                        <Heading mx="20px" fontSize="20px">
                            About us
                        </Heading>
                        <Box
                            w={`${SCREEN_WIDTH * 0.1}px`}
                            border="1px solid white"
                        />
                    </HStack>
                </Box>

                <Text fontWeight="bold" mb="30px">
                    @instead_of_me_coffee
                </Text>

                <Grid templateColumns="repeat(3, 1fr)" gap="10px" mb="150px">
                    {images.map((image, index) => (
                        <Box
                            key={index}
                            w={`${SCREEN_WIDTH * 0.3}px`}
                            h={`${SCREEN_WIDTH * 0.3}px`}
                        >
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
