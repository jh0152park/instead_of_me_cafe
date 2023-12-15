import { Box, Center, Grid, HStack, Heading, VStack } from "@chakra-ui/react";
import Product from "../components/Products/product";
import { useRecoilValue } from "recoil";
import { currentMode } from "../project_common";

const SCREEN_WIDTH = window.innerWidth;

export default function Shop() {
    const isMobile = useRecoilValue(currentMode) === "mobile";
    const products = [
        {
            image: require("../resources/images/shop/product1.jpg"),
            name: "World Best Coffee Bean",
            cost: 29800,
            description: "대표 블렌드",
        },
        {
            image: require("../resources/images/shop/product2.jpg"),
            name: "World Best Coffee Bean",
            cost: 29800,
            description: "대표 블렌드",
        },
        {
            image: require("../resources/images/shop/product3.jpg"),
            name: "World Best Coffee Bean",
            cost: 29800,
            description: "대표 블렌드",
        },
        {
            image: require("../resources/images/shop/product4.jpg"),
            name: "World Best Cup",
            cost: 19800,
            description: "스탠리 저리가라 머그컵",
        },
        {
            image: require("../resources/images/shop/product5.jpg"),
            name: "World Best Cup",
            cost: 18800,
            description: "인스타 감성 폭발 머그컵",
        },
        {
            image: require("../resources/images/shop/product6.jpg"),
            name: "World Best Cup",
            cost: 39800,
            description: "브리티쉬 귀족이 된 기분인 머그컵",
        },
        {
            image: require("../resources/images/shop/product7.jpg"),
            name: "World Best tumbler",
            cost: 59800,
            description: "너무 귀여워서 갖고싶다",
        },
        {
            image: require("../resources/images/shop/product8.jpg"),
            name: "World Best tumbler",
            cost: 59800,
            description: "심플 깔끔 커플",
        },
        {
            image: require("../resources/images/shop/product9.jpg"),
            name: "World Best tumbler",
            cost: 59800,
            description: "블랙 시크 간지 폭발",
        },
    ];

    const numOfImages = 9;
    let images: string[] = [];

    for (var i = 1; i <= numOfImages; i++)
        images.push(require(`../resources/images/shop/product${i}.jpg`));

    return (
        <>
            <Center w="100%" minH="100vh" bgColor="whiteAlpha.200" pt="200px">
                <VStack>
                    <Box mb="200px">
                        <HStack w="100%">
                            <Box
                                w={
                                    isMobile
                                        ? `${SCREEN_WIDTH * 0.1}px`
                                        : `${SCREEN_WIDTH * 0.15}px`
                                }
                                border="1px solid white"
                            />
                            <Heading
                                mx="20px"
                                fontSize={isMobile ? "20px" : "25px"}
                            >
                                SHOP
                            </Heading>
                            <Box
                                w={
                                    isMobile
                                        ? `${SCREEN_WIDTH * 0.1}px`
                                        : `${SCREEN_WIDTH * 0.15}px`
                                }
                                border="1px solid white"
                            />
                        </HStack>
                    </Box>

                    <Grid
                        templateColumns={
                            isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)"
                        }
                        gap="50px"
                        mb="200px"
                    >
                        {products.map((product, index) => (
                            <Product
                                key={index}
                                size={isMobile ? SCREEN_WIDTH * 0.8 : 400}
                                productName={product.name}
                                productCost={product.cost}
                                productImage={product.image}
                                productDescription={product.description}
                            />
                        ))}
                    </Grid>
                </VStack>
            </Center>
        </>
    );
}
