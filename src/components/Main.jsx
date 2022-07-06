import React from "react";
import Container from "./styles/Container.styled";
import StyledMain from "./styles/Main.styled";
import { InfoImg } from "./styles/Info.styled";

const Main = ({ id, title, body, image }) => {
    return (
        <StyledMain odd={id % 2 && "row-reverse"}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <InfoImg src={`./images/${image}`}></InfoImg>
            </div>
        </StyledMain>
    );
};

export default Main;
