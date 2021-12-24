import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  border: 0.125rem solid #1b2127;
  border-radius: 0.5rem;
  
`;
const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #131a21;
  border-bottom: 0.125rem solid #1b2127;
  padding: 1rem;
  position: sticky;
    top: 10.0625rem;
`;

const HeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
  
`;
const HeaderFillers = styled.div`
  display: flex;
  justify-content: end;
`;
const Filler = styled.div`
  display: flex;
    align-items: center;

  color: #b1b1b1;
  margin-left: 1rem;
`;
const FillerLabel = styled.label`
     
`;
const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;


  border-bottom: 0.125rem solid #1b2127;
`;
const HeaderButton = styled(NavLink)`
    display: flex;
    align-items: center;

    color: white;
    border-radius:0;
     border: 0.125rem solid #1b2127;    
    background: #131a21;
    padding: 0.125rem 1rem;
    height: 2rem;
    &:first-of-type{
        border-radius: 0.5rem 0px 0px 0.5rem;
    }
    &:last-of-type{
        border-radius:0px 0.5rem 0.5rem 0px;
    }
    &.active{
        background:#196ce7;
        font-weight: bold;
        border: 0.125rem solid #196ce7;
    }

`;
export {SectionWrapper,SectionHeader,HeaderButtons,HeaderFillers,Filler,FillerLabel,SectionBody,HeaderButton}