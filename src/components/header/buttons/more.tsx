import { Box, Center, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import { go_to_top } from "../../../utils/util";
import { useRecoilValue } from "recoil";
import { currentMode } from "../../../project_common";

const SCREEN_WIDTH = document.documentElement.clientWidth;
const SCREEN_HEIGHT = document.documentElement.clientHeight;

export default function More() {
    const navigate = useNavigate();
    const [enableMenu, setEnableMenu] = useState(false);
    const image = require("../../../resources/images/menu_image.jpg");
    const isMobile = useRecoilValue(currentMode) === "mobile";
    const menuFontSize = isMobile ? "15px" : "30px";

    function toggleMenu() {
        setEnableMenu((prev) => !prev);
    }

    return (
        <>
            <Box
                fontSize="30px"
                fontWeight={"bold"}
                _hover={{
                    cursor: "pointer",
                    color: "rgba(255, 255, 255, 0.4)",
                    transition: "all 0.2s linear",
                }}
                onClick={toggleMenu}
            >
                <AiOutlineMenu />
            </Box>

            {!enableMenu ? null : (
                <Box
                    w={`${SCREEN_WIDTH}px`}
                    h={`${SCREEN_HEIGHT}px`}
                    position="fixed"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                    margin="auto"
                    backgroundImage={image}
                    backgroundPosition="center center"
                >
                    <Box
                        w="100%"
                        h="100px"
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="center"
                        pr={isMobile ? "10px" : "40px"}
                    >
                        <Box
                            fontSize="30px"
                            fontWeight="bold"
                            _hover={{
                                cursor: "pointer",
                                color: "rgba(255, 255, 255, 0.4)",
                                transition: "all 0.2s linear",
                            }}
                            onClick={toggleMenu}
                        >
                            <IoClose />
                        </Box>
                    </Box>

                    <Box
                        pl={isMobile ? "30px" : "100px"}
                        h="100%"
                        justifyContent="flex-start"
                    >
                        <VStack
                            mt="200px"
                            spacing="30px"
                            alignItems="flex-start"
                        >
                            <Text
                                fontWeight="bold"
                                fontSize={menuFontSize}
                                _hover={{
                                    cursor: "pointer",
                                    color: "rgba(255, 255, 255, 0.4)",
                                    transition: "all 0.2s linear",
                                }}
                                onClick={() => {
                                    toggleMenu();
                                    go_to_top(0);
                                    navigate("/about");
                                }}
                            >
                                ABOUT
                            </Text>
                            <Text
                                fontWeight="bold"
                                fontSize={menuFontSize}
                                _hover={{
                                    cursor: "pointer",
                                    color: "rgba(255, 255, 255, 0.4)",
                                    transition: "all 0.2s linear",
                                }}
                                onClick={() => {
                                    toggleMenu();
                                    go_to_top(0);
                                    navigate("/cafes");
                                }}
                            >
                                CAFES
                            </Text>
                            <Text
                                fontWeight="bold"
                                fontSize={menuFontSize}
                                _hover={{
                                    cursor: "pointer",
                                    color: "rgba(255, 255, 255, 0.4)",
                                    transition: "all 0.2s linear",
                                }}
                                onClick={() => {
                                    toggleMenu();
                                    go_to_top(0);
                                    navigate("/shop");
                                }}
                            >
                                SHOP
                            </Text>
                            <Text
                                fontWeight="bold"
                                fontSize={menuFontSize}
                                _hover={{
                                    cursor: "pointer",
                                    color: "rgba(255, 255, 255, 0.4)",
                                    transition: "all 0.2s linear",
                                }}
                                onClick={() => {
                                    toggleMenu();
                                    go_to_top(0);
                                    navigate("/contact");
                                }}
                            >
                                CONTACT
                            </Text>
                        </VStack>
                    </Box>
                </Box>
            )}
        </>
    );
}
