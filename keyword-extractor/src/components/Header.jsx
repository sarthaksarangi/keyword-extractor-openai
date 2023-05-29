import { Heading, Image , Text } from "@chakra-ui/react";
import logo from '../assets/light-bulb.png'

const Header = () => {
    return(
<>
<Image src={logo} alt="logo"width={100} marginBottom='1rem' />

</>
    )
};
export default Header;