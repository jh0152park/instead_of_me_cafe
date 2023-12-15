import { Center, Text } from "@chakra-ui/react";

export default function Cart() {
    return (
        <Center
            w="30px"
            h="25px"
            border="3px solid whitesmoke"
            borderTop="0px"
            _hover={{
                cursor: "pointer",
                borderColor: "rgba(255, 255, 255, 0.4)",
                transition: "all 0.2s linear",
            }}
        >
            <Text fontSize="15px">0</Text>
        </Center>
    );
}
