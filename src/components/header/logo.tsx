import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { go_to_top } from "../../utils/util";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentMode } from "../../project_common";

export default function Logo() {
    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = useRecoilValue(currentMode) === "mobile";

    return (
        <Center
            _hover={{
                cursor: "pointer",
                color: "rgba(255, 255, 255, 0.4)",
                transition: "all 0.2s linear",
            }}
            onClick={() => {
                if (location.pathname === "/") go_to_top(0);
                else {
                    go_to_top(0);
                    navigate("/");
                }
            }}
            position="absolute"
            left={isMobile ? "10px" : "40px"}
        >
            <VStack h="100%" spacing={0}>
                <Heading h="70%" fontSize={isMobile ? "15px" : "25px"}>
                    KIMBYEONGSEOP
                </Heading>
                <Text h="30%" fontSize="10px">
                    COFFEE ROASTERS
                </Text>
            </VStack>
        </Center>
    );
}
