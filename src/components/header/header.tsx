import { HStack } from "@chakra-ui/react";
import Logo from "./logo";
import Menus from "./menus";
import Buttons from "./buttons";
import { useRecoilValue } from "recoil";
import { currentMode } from "../../project_common";

export default function Header() {
    const isMobile = useRecoilValue(currentMode) === "mobile";

    return (
        <HStack
            w="100%"
            h="70px"
            pt="10px"
            position="fixed"
            top={0}
            justifyContent="center"
            zIndex={99}
        >
            <Logo />
            {!isMobile ? <Menus /> : null}
            <Buttons />
        </HStack>
    );
}
