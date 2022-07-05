import Button from "./styles/Button.styled";
import React from "react";
import StyledHeader, { Logo, Nav, Image } from "./styles/Header.styled";
import Container from "./styles/Container.styled";
import Flex from "./styles/FlexStyled";

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
                    <Flex>
                        <div>
                            <h1>The It Career of Your Dream Starts Here</h1>
                            <p>
                                Clarusway is a leading international software
                                Bootcamp. Join a micro class online with other
                                trainees and learn coding skills with a
                                highly-skilled instructor.
                            </p>

                            <Button primary>Start Your New Carier</Button>
                        </div>

                        <Image src="./images/hero.jpg"></Image>
                    </Flex>
                </div>
            </Container>
        </StyledHeader>
    );
};

export default Header;
