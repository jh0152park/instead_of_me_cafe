import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface IProps {
    size: number;
    productImage: string;
    productName: string;
    productCost: number;
    productDescription: string;
}

export default function Product({
    size,
    productImage,
    productName,
    productCost,
    productDescription,
}: IProps) {
    return (
        <VStack alignItems="flex-start" _hover={{ cursor: "pointer" }}>
            <Box
                w={`${size}px`}
                h={`${size}px`}
                mb="20px"
                borderColor="rgba(255, 255, 255, 0.2)"
            >
                <Image
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    src={productImage}
                    _hover={{
                        // transform: ["translateY(-10px)", "scale(1.05)"],
                        transform: ["translateY(-10px)"],
                    }}
                    transition="all 0.2s linear"
                />
            </Box>
            <Text fontWeight="bold">{productName}</Text>
            <Text fontSize="12px" my="10px">
                {productDescription}
            </Text>
            <Text>{productCost.toLocaleString()}원</Text>
        </VStack>
    );
}
