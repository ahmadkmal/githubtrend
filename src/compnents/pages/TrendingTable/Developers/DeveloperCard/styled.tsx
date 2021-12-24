import styled from "styled-components";

const DeveloperCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
    flex-wrap: nowrap;
  border-bottom: 0.125rem solid #1b2127;
  border-radius: 0;
  padding: 1rem;
  color: #626b74;
  &:last-of-type{
    border-bottom:0;
  }
`;
interface DeveloperCardSectionProps {
    align?: string;
}
const DeveloperCardSection = styled.div<DeveloperCardSectionProps>`
  display: flex;
  flex-direction: column;
  align-items:${({ align }) => align || 'start'};
  flex: 1;
  gap: 0.25rem;
  & span{
      display: flex;
      gap: 0.5rem;
      align-items: center;
  }
`;
const DeveloperDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: start;
  flex: 1;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: end;
  flex: 1;
`;
const DeveloperDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 0.25rem;
`;
const DeveloperName = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.25rem;
  color: #4588d1;
  line-height: 1.25rem;
`;
const RepoName = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  color: #4588d1;
  line-height: 1rem;
`;
const DevRank = styled.span`
    display: flex;
    align-items: baseline;


`;

const DeveloperAvatar = styled.img`
   width: 3rem;
   height: 3rem;
   border-radius: 100%;
   margin:0 1rem;

`;
export {DeveloperCardWrapper,DeveloperCardSection,DeveloperDetailsWrapper,ButtonsWrapper,DeveloperDetails,DeveloperName,RepoName,DevRank,DeveloperAvatar}