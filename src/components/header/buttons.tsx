import { HStack } from "@chakra-ui/react";
import SearchButton from "./buttons/search";
import Cart from "./buttons/cart";
import More from "./buttons/more";
import { useRecoilValue } from "recoil";
import { currentMode } from "../../project_common";

export default function Buttons() {
    const isMobile = useRecoilValue(currentMode) === "mobile";

    return (
        <HStack position="absolute" right={isMobile ? "10px" : "40px"}>
            {/* <SearchButton />
            <Cart /> */}
            <More />
        </HStack>
    );
}
