import { ButtonBlack } from "../../../../sharedStyled"
import { DeveloperData } from "../type"
import { DeveloperCardWrapper, DevRank, DeveloperDetailsWrapper, DeveloperAvatar, DeveloperDetails, DeveloperName, DeveloperCardSection, RepoName, ButtonsWrapper } from "./styled"
import { BookOutlined,FireOutlined } from "@ant-design/icons"
import React from "react"

const DeveloperCard = (props:DeveloperData) => {
    return (
        <DeveloperCardWrapper>
            <DevRank>
                {props.rank}
            </DevRank>
            <DeveloperDetailsWrapper>
                 <DeveloperAvatar src={props.avatar}/>  
                 <DeveloperDetails>
                     <DeveloperName href={props.url}>
                         {props.name}
                     </DeveloperName>
                     <span>
                         {props.username}
                     </span>
                 </DeveloperDetails>
            </DeveloperDetailsWrapper>
            <DeveloperCardSection>
                    <span>
                        <FireOutlined style={{color:'#8a4f28'}}/>
                        POPULAR REPO
                    </span>
                    <span>
                        <BookOutlined/>
                        <RepoName href={props.popularRepository.url}>
                         {props.popularRepository.repositoryName}
                        </RepoName>
                    </span>
                    <span>
                       {props.popularRepository.repositoryName}
                    </span>
            </DeveloperCardSection>
            <ButtonsWrapper>
                    <ButtonBlack>
                        Follow
                    </ButtonBlack>
            </ButtonsWrapper>
        </DeveloperCardWrapper>
    )
}
export default React.memo(DeveloperCard)