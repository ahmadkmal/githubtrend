import React, { useMemo } from 'react'
import styled from "styled-components/macro";
import { NavLink, Outlet, useLocation, useMatch, useSearchParams } from 'react-router-dom';
import { Menu,  Select } from 'antd';
import { DownOutlined, } from '@ant-design/icons';
import createSearchParams from '../../../utils/createSearchParams';
import { HeaderButtons, HeaderButton, SectionWrapper, SectionHeader, HeaderFillers, Filler, FillerLabel, SectionBody } from './styled';
const { Option } = Select;

const SectionSelector = () => {

    return (
        <HeaderButtons>
            <HeaderButton to="repositories"  > Repository </HeaderButton>
            <HeaderButton to="developer"  > Developer </HeaderButton>
        </HeaderButtons>
    )
}
const MemoSectionSelector = React.memo(SectionSelector);



export default function TrendingTable() {
    let location = useLocation();
    const isRepo = useMatch('/repositories')
    let [searchParams, setSearchParams] = useSearchParams();
    const currentParams = useMemo(() => createSearchParams(location.search), [location.search])


    const applyFilter = (key: string, value: any) => {
        setSearchParams({ ...currentParams, [key]: value });
    }



    return (
        <SectionWrapper>
            <SectionHeader>
                <MemoSectionSelector />
                <HeaderFillers>
                    {isRepo&&(<>
                    <Filler>
                        <FillerLabel>
                            Spoken Language
                        </FillerLabel>
                        <Select onChange={(e) => applyFilter("spoken_language_code", e)} defaultValue="" value={currentParams["spoken_language_code"] || ""} dropdownMatchSelectWidth={false} style={{ color: "#b1b1b1" }} bordered={false} suffixIcon={<DownOutlined style={{ color: "#b1b1b1" }} />}>
                            <Option value="">Any</Option>
                            <Option value="en">English</Option>
                            <Option value="zh">Chinese</Option>
                        </Select>
                    </Filler>
                    <Filler>
                        <FillerLabel>
                            Language
                        </FillerLabel>
                        <Select defaultValue="" onChange={(e) => applyFilter("language", e)} value={currentParams["language"] || ""} dropdownMatchSelectWidth={false} style={{ color: "#b1b1b1" }} bordered={false} suffixIcon={<DownOutlined style={{ color: "#b1b1b1" }} />}>
                            <Option value="">Any</Option>
                            <Option value="Java">Java</Option>
                            <Option value="JavaScript">JavaScript</Option>
                            <Option value="Go">Go</Option>
                            <Option value="Python">Python</Option>
                            <Option value="TypeScript">TypeScript</Option>


                        </Select>
                    </Filler>
                    </>)}
                    <Filler>
                        <FillerLabel>
                            Data Range
                        </FillerLabel>
                        <Select defaultValue="daily" onChange={(e) => applyFilter("since", e)} value={currentParams["since"] || "daily"} dropdownMatchSelectWidth={false} style={{ color: "#b1b1b1" }} bordered={false} suffixIcon={<DownOutlined style={{ color: "#b1b1b1" }} />}>
                            <Option value="daily">Today</Option>
                            <Option value="weekly">weekly</Option>
                            <Option value="monthly">monthly</Option>
                        </Select>
                    </Filler>

                </HeaderFillers>
            </SectionHeader>
            <SectionBody>
         
            <Outlet />
                
            </SectionBody>
        </SectionWrapper>
    )
}
