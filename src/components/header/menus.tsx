import { Center, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { go_to_top } from "../../utils/util";

export default function Menus() {
    const navigate = useNavigate();

    return (
        <HStack spacing="30px">
            <Center
                _hover={{
                    cursor: "pointer",
                    color: "rgba(255, 255, 255, 0.4)",
                    transition: "all 0.2s linear",
                }}
                onClick={() => {
                    go_to_top(0);
                    navigate("/about");
                }}
            >
                <Text fontWeight="bold">ABOUT</Text>
            </Center>
            <Center
                _hover={{
                    cursor: "pointer",
                    color: "rgba(255, 255, 255, 0.4)",
                    transition: "all 0.2s linear",
                }}
                onClick={() => {
                    go_to_top(0);
                    navigate("/cafes");
                }}
            >
                <Text fontWeight="bold">CAFES</Text>
            </Center>
            <Center
                _hover={{
                    cursor: "pointer",
                    color: "rgba(255, 255, 255, 0.4)",
                    transition: "all 0.2s linear",
                }}
                onClick={() => {
                    go_to_top(0);
                    navigate("/shop");
                }}
            >
                <Text fontWeight="bold">SHOP</Text>
            </Center>
            <Center
                _hover={{
                    cursor: "pointer",
                    color: "rgba(255, 255, 255, 0.4)",
                    transition: "all 0.2s linear",
                }}
                onClick={() => {
                    go_to_top(0);
                    navigate("/contact");
                }}
            >
                <Text fontWeight="bold">CONTACT</Text>
            </Center>
        </HStack>
    );
}
