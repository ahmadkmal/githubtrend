import React from "react"
import { ButtonBlack } from "../../../../sharedStyled"
import { BuildBy, BuildByWrapper, FooterList, RepositoryCardBody, RepositoryCardFooter, RepositoryCardHeader, RepositoryCardWrapper, RepositoryName } from "./styled"
import {BookOutlined,StarOutlined,ForkOutlined } from "@ant-design/icons"
import { builtByData, RepositoryData } from "../type"


const RepositoryCard = (props:RepositoryData)=>{
    return (
        <RepositoryCardWrapper>
            <RepositoryCardHeader>
            <div>

                <BookOutlined />
                <RepositoryName href={props.url}>
                {props.repositoryName}
                </RepositoryName>
            </div>
                <ButtonBlack>
                    <StarOutlined />
                    Star
                </ButtonBlack>
            </RepositoryCardHeader>
            <RepositoryCardBody>
                        {props.description}
            </RepositoryCardBody>
            <RepositoryCardFooter>
                <FooterList>
                    {
                        props.language&&
                    <span>
                    {props.language}
                    </span>
                    }
                       {
                        props.totalStars&&
                    <span>
                        <StarOutlined />
                    {props.totalStars}
                    </span>
                    }
                      {
                        props.forks&&
                    <span>
                    <ForkOutlined />
                    {props.forks}
                    </span>
                    }
                    <BuildByWrapper>
                    Built By
                    <BuildByWrapper>

                    {
                        props.builtBy.map((dev:builtByData,index: React.Key)=><BuildBy src={dev.avatar} key={index}/>)
                    }
                    </BuildByWrapper>
                    </BuildByWrapper>
                    
                </FooterList>
                <span>
                <StarOutlined />
                     {props.starsSince} starts {props.since||'today'}
                </span>
            </RepositoryCardFooter>
        </RepositoryCardWrapper>
    )
}
export default React.memo(RepositoryCard)