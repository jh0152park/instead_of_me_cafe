import { Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Banner from "../components/home/banner";
import Products from "../components/home/products";
import Instagram from "../components/home/instagram";
import { useRecoilValue } from "recoil";
import { currentMode } from "../project_common";
import ProductsMobile from "../components/home/products_mobile";
import InstagramMobile from "../components/home/instagram_mobile";

export default function Home() {
    const isMobile = useRecoilValue(currentMode) === "mobile";

    return (
        <>
            <Helmet>
                <title>김병섭커피로스터즈 공식홈페이지</title>
            </Helmet>

            <Banner />
            {isMobile ? (
                <>
                    <ProductsMobile />
                    <InstagramMobile />
                </>
            ) : (
                <>
                    <Products />
                    <Instagram />{" "}
                </>
            )}
        </>
    );
}
