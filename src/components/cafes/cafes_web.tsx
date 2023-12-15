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
import { go_to_top } from "../../utils/util";

const CAFES = [
    {
        name: "서울본점",
        address: "서울특별시 강남구 강남로 123 카페 서울본점",
        worktime: "평일/주말 00:00 ~ 00:00",
        description:
            "단체석, 포장, 테이크아웃, 무료 무선 인터넷, 남/여 화장실 구분",
        image: require("../../resources/images/image1.jpg"),
        map: require("../../resources/images/locations/seoul.png"),
        information: ["1F - 카페 공간", "2F - 루프탑 공간"],
    },
    {
        name: "분당점",
        address: "경기 성남시 분당구 분당로 50 분당점",
        worktime: "평일/주말 09:00 ~ 22:00",
        description:
            "단체석, 포장, 테이크아웃, 무료 무선 인터넷, 남/여 화장실 구분",
        image: require("../../resources/images/image2.jpg"),
        map: require("../../resources/images/locations/boondang.png"),
        information: ["1F - 카페 공간", "2F - 카페 공간", "3F - 카페 공간"],
    },
    {
        name: "수원점",
        address: "경기 수원시 영통구 효원로 407 수원점",
        worktime: "평일/주말 12:00 ~ 22:00",
        description:
            "핸드드립, 단체석, 포장, 테이크아웃, 무료 무선 인터넷, 남/여 화장실 구분",
        image: require("../../resources/images/image3.jpg"),
        map: require("../../resources/images/locations/suwon.png"),
        information: [
            "B1 - 주차장, 1F - 로스팅 룸",
            "2F - 카페 공간 공간",
            "3F - 아카데미",
            "4F - 루프탑 공간",
        ],
    },
    {
        name: "일산점",
        address: "경기 고양시 일산서구 경의로 672 일산점",
        worktime: "평일/주말 12:00 ~ 20:00",
        description:
            "단체석, 포장, 테이크아웃, 무료 무선 인터넷, 남/여 화장실 구분",
        image: require("../../resources/images/image4.jpg"),
        map: require("../../resources/images/locations/ilsan.png"),
        information: ["1F - 커피바 / 카페 공간", "2F - 루프탑 공간"],
    },
    {
        name: "하남점",
        address: "경기 하남시 미사대로 750 하남점",
        worktime: "평일/주말 10:00 ~ 22:00",
        description: "단체석, 포장, 테이크아웃, 남/여 화장실 구분",
        image: require("../../resources/images/image5.jpg"),
        map: require("../../resources/images/locations/hanam.png"),
        information: ["1F - 카페 공간"],
    },
];

export default function CafesWeb() {
    const [storeIndex, setStoreIndex] = useState(0);
    const stores = ["서울본점", "분당점", "수원점", "일산점", "하남점"];

    useEffect(() => {
        go_to_top(0);
    }, []);

    return (
        <>
            <Center w="100%" h="100vh" mt="100px">
                <HStack alignItems="flex-start">
                    <Box w="700px" h="450px">
                        <Image
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            src={CAFES[storeIndex].image}
                        />
                    </Box>
                    <VStack w="500px" ml="60px" alignItems="flex-start">
                        <Heading>CAFES</Heading>
                        <HStack spacing="20px" mt="10px">
                            {stores.map((store, index) => (
                                <Text
                                    key={index}
                                    onClick={() => {
                                        setStoreIndex(index);
                                    }}
                                    _hover={{ cursor: "pointer" }}
                                    color={
                                        storeIndex === index
                                            ? "whitesmoke"
                                            : "grey"
                                    }
                                    fontWeight={
                                        storeIndex === index ? "bold" : "none"
                                    }
                                >
                                    {store}
                                </Text>
                            ))}
                        </HStack>

                        <VStack
                            alignItems="flex-start"
                            mt="0px"
                            color="rgba(255, 255, 255, 0.5)"
                            fontSize="13px"
                        >
                            <Text my="20px">{CAFES[storeIndex].address}</Text>
                            <Text>{CAFES[storeIndex].worktime}</Text>
                        </VStack>

                        <VStack
                            fontSize="13px"
                            alignItems="flex-start"
                            mt="10px"
                        >
                            {CAFES[storeIndex].information.map(
                                (info, index) => (
                                    <Text key={index}>{info}</Text>
                                )
                            )}
                        </VStack>

                        <Box w="300px" h="200px">
                            <Image
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                src={CAFES[storeIndex].map}
                            />
                        </Box>

                        <Text mt="10px" fontSize="13px">
                            {CAFES[storeIndex].description}
                        </Text>
                    </VStack>
                </HStack>
            </Center>
        </>
    );
}
