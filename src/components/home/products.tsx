import {
    AbsoluteCenter,
    Box,
    Center,
    Divider,
    Grid,
    HStack,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";
import Product from "../Products/product";

const SCREEN_WIDTH = window.innerWidth;

export default function Products() {
    const products = [
        {
            image: require("../../resources/images/shop/product1.jpg"),
            name: "World Best Coffee Bean",
            cost: 29800,
            description: "대표 블렌드",
        },
        {
            image: require("../../resources/images/shop/product2.jpg"),
            name: "World Best Coffee Bean",
            cost: 29800,
            description: "대표 블렌드",
        },
        {
            image: require("../../resources/images/shop/product3.jpg"),
            name: "World Best Coffee Bean",
            cost: 29800,
            description: "대표 블렌드",
        },
        {
            image: require("../../resources/images/shop/product4.jpg"),
            name: "World Best Cup",
            cost: 19800,
            description: "스탠리 저리가라 머그컵",
        },
    ];

    return (
        <Center w="100%" h="100vh" bgColor="whiteAlpha.200">
            <VStack>
                <Box mb="200px">
                    <HStack w="100%">
                        <Box
                            w={`${SCREEN_WIDTH * 0.15}px`}
                            border="1px solid white"
                        />
                        <Heading mx="20px">Best Products</Heading>
                        <Box
                            w={`${SCREEN_WIDTH * 0.15}px`}
                            border="1px solid white"
                        />
                    </HStack>
                </Box>

                <Grid templateColumns="repeat(4, 1fr)" gap="50px">
                    {products.map((product, index) => (
                        <Product
                            key={index}
                            size={300}
                            productName={product.name}
                            productCost={product.cost}
                            productImage={product.image}
                            productDescription={product.description}
                        />
                    ))}
                </Grid>
            </VStack>
        </Center>
    );
}
