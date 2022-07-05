import Button from "./styles/Button.styled";
import React from "react";
import StyledHeader, { Logo, Nav } from "./styles/Header.styled";
import Container from "./styles/Container.styled";

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="./images/logo.png" />
                    <div>
                        <Button>Apply Courses</Button>
                        <Button primary>Apply Courses</Button>
                    </div>
                </Nav>
                <div>
                    <h1>The It Career of Your Dream Starts Here</h1>
                    <p>
                        Clarusway is a leading international software Bootcamp.
                        Join a micro class online with other trainees and learn
                        coding skills with a highly-skilled instructor.
                    </p>
                </div>
            </Container>
        </StyledHeader>
    );
};

export default Header;
