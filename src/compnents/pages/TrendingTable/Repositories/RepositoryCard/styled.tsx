import styled from "styled-components";

const RepositoryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 0.125rem solid #1b2127;
  border-radius: 0;
  padding: 1rem;
  color: #626b74;
  &:last-of-type{
    border-bottom:0;
  }
`;
const RepositoryCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const RepositoryName = styled.a`
  text-decoration: none;
  margin-left: 0.5rem;
  font-weight: bold;
  font-size: 1.25rem;
  color: #4588d1;

`;
const RepositoryCardBody = styled.p`
 max-width: 75%;
 margin: 0;
 margin-bottom: 0.5rem;
`;
const RepositoryCardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  

`;
const FooterList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
    align-items: center;
    gap: 1rem;
  

`;

const BuildBy = styled.img`
   width: 1rem;
   height: 1rem;
   border-radius: 100%;
   margin:0.0625rem;

`;
const BuildByWrapper = styled.div`
   display: flex;
   justify-content: start;
   align-items: center;

`;
export { RepositoryCardWrapper, RepositoryCardHeader, RepositoryName, RepositoryCardBody, RepositoryCardFooter,FooterList ,BuildBy,BuildByWrapper}