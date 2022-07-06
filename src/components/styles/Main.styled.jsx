import styled from "styled-components";

const StyledMain = styled.main`
    margin: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    flex-direction: ${({ odd }) => odd || "row"};
    & > div {
        
        flex-grow: 1;
        flex-basis: 0;
    }
    @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  }
`;

export default StyledMain;
