import React from "react";
import {  useMatch } from "react-router-dom";
import { Header, HeaderContainer, HeaderDsc, HeaderMain, LayoutWrapper, Main } from "./styled";

type LayoutProps = {
  children: JSX.Element,
};
const Layout=({ children }:LayoutProps) =>{
  const isRepo = useMatch('/repositories')
  return (
    <LayoutWrapper>
      <Header>
        <HeaderContainer>
            <HeaderMain>
              Trending
            </HeaderMain>
            <HeaderDsc>
              {!!isRepo?"See what the Github community is most excited about today.":"These are the developers build the hot tools today."
              }
              
              
            </HeaderDsc>
        </HeaderContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  );
}
export default React.memo(Layout)