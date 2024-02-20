import theme from "../../theme/theme";
import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


const Toggler = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            {colorMode === "light" ? "Dark" : "Light"}

        </Button>
    );
}
export default Toggler;
