import styled, {css} from "styled-components";
import Select from "react-select";


const OptionsBar = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const Dropdown = styled(Select).attrs(props => ({
    unstyled: true,
    classNamePrefix: 'dropdown',
}))`
    & {
        min-width: 150px;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 500;
        border: 1px solid violet;
        border-radius: 8px;
        color: violet;
    }
    &:active {
        color: violet;
    }
    & .dropdown__control {
        padding: 10px 16px;
    }
    & .dropdown__menu {
        background-color: violet;
        font-weight: 400;
    }
    & .dropdown__option {
        padding: 10px 16px;
    }
    & .dropdown__option--is-focused {
        background-color: violet;
}
`;

export {OptionsBar, Dropdown}