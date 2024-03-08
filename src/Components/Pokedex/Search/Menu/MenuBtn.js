import "./MenuBtn.css";
//import { Button } from "@chakra-ui/react";


const MenuBtn = ({ setSearchGeneration, searchGeneration }) => {
    
    const handleClick = () => {
        const menuBtn = document.querySelector(".menu-btn");

        if (menuBtn.classList.contains("is-active")) {
            menuBtn.classList.remove("is-active");
            // console.log(menuBtn);
        } else {
            menuBtn.classList.add("is-active");
  
            // console.log(menuBtn);
        }

        setSearchGeneration(!searchGeneration);
        console.log(searchGeneration);
       

    
    };

    return (
        <button
            className='hamburger hamburger--emphatic menu-btn'
            variant={"unstyled"}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focus={{ boxShadow: "none" }}
            type='button'
            onClick={handleClick}
        >
            <span className='hamburger-box'>
                <span className='hamburger-inner'></span>
            </span>
        </button>
    );
};

export default MenuBtn;
