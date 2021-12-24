import styled from "styled-components";

interface HeaderContainerProps {
    justify?: string;
}
const HeaderContainer = styled.div<HeaderContainerProps>`
    width: 90%;
    display: flex;
    justify-content: ${({ justify }) => justify ? justify : 'end'};
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items:center;

      max-width: 75rem;
    
  `;
const Header = styled.header`
    width: 100%;
    background-color: #0d0d14;
    display: flex;
    position: sticky;
    flex-direction:column;
    top: 0;
    right: 0;
    z-index: 1000;
    border-bottom:0.125rem solid #1b2127;
    padding-bottom:2rem;
  `;
const HeaderMain = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
  
    line-height: 4rem;
    text-align: center;
    color: #fafbfc;
    margin-bottom:0;

      font-size: 1.875rem;
    
  `;
const HeaderDsc = styled.p`
    font-style: normal;
    font-size: 1rem;
  
    line-height: 2rem;
    text-align: center;
    color: #b1b1b1;
    margin:0;
  
   
      font-size: 1.875rem;
    padding-bottom: 2rem;
    
  `;
const LayoutWrapper = styled.div`
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 100vh;
      background:#0d0d14;
  `;
const Main = styled.main`
      flex: 1;
      padding: 3rem 1.5rem;
      display: flex;
      flex-direction: column;
  `;

export { HeaderContainer,Header,HeaderMain,HeaderDsc,LayoutWrapper,Main}