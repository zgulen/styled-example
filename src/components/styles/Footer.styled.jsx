import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    color: white;
    gap: 1rem;
    background-color: rgb(138, 28, 74);
    justify-content: space-around;
    align-items: baseline;
    padding-bottom: 2rem;
    & > ul {
        list-style: none;
        padding-top: rem;
        li{
            margin-top: 1rem;
        }
    }
    p{
        
        margin-top:.5rem;
    }
    &>article{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        font-size: 1.2rem;
        a{
            margin: .3rem;
            padding: 0.6rem;

            color: white;
            border: 1px solid white;
            border-radius: 50%;
        }
    }
`;

export default StyledFooter;
