import {
    Box,
    Center,
    HStack,
    Heading,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { go_to_top } from "../utils/util";
import { useRecoilValue } from "recoil";
import { currentMode } from "../project_common";
import CafesMobile from "../components/cafes/cafes_mobile";
import CafesWeb from "../components/cafes/cafes_web";

export default function Cafes() {
    const isMobile = useRecoilValue(currentMode) === "mobile";

    useEffect(() => {
        go_to_top(0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Cafes</title>
            </Helmet>

            {isMobile ? <CafesMobile /> : <CafesWeb />}
        </>
    );
}
