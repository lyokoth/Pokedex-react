import { useState } from "react";

import SearchMenu from "../Menu";
import GenerationFilter from "../../../GenerationFilter/GenerationFilter";
import TypeFilter from "../../TypesFilter/TypeFilter";
import "./DropDown.css";
import MenuListBtn from "../MenuListBtn";
import Types from "../../TypesFilter/Types";

const DropDown = ({
    searchActive,
    setSearchActive,
    typesFilter,
    setTypesFilter,
   
}) => {
    const [dropActive, setDropActive] = useState(false);

    return (
        <aside
            className={`${
                dropActive ? "dropMenu active md:text-base text-sm" : "dropMenu"
            }`}
        >
            <section>
                <MenuListBtn
                    setDropActive={setDropActive}
                    dropActive={dropActive}
                />
            </section>
            {dropActive ? (
                <article className='menuActive'>
            
                    <GenerationFilter
                       
                        />
                    <SearchMenu
                        setDropActive={setDropActive}
                        searchActive={searchActive}
                        setSearchActive={setSearchActive}
                    />

                    <TypeFilter
                        typesFilter={typesFilter}
                        setTypesFilter={setTypesFilter}
                   
                   
                    />
                </article>
            ) : (
                ""
            )}
        </aside>
    );
};

export default DropDown;
