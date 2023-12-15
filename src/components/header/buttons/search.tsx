import { Box } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function SearchButton() {
    return (
        <Box
            fontSize="25px"
            _hover={{
                cursor: "pointer",
                color: "rgba(255, 255, 255, 0.4)",
                transition: "all 0.2s linear",
            }}
        >
            <FaSearch />
        </Box>
    );
}
