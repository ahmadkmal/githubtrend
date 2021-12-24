import React, { useMemo } from 'react'
import { useQuery } from 'react-query';
import axios from '../../../../utils/axios';
import { useLocation, useSearchParams } from 'react-router-dom';
import createSearchParams from '../../../../utils/createSearchParams';
import { DeveloperData } from './type';
import DeveloperCard from './DeveloperCard';

export default function Developers() {
    let location = useLocation();
    const currentParams = useMemo(() => createSearchParams(location.search), [location.search])
    const {
        isLoading,
        data: developersData,
    } = useQuery(['developers', currentParams], () =>
    (axios
        .get("/api/developers", { params: currentParams })
        .then(({ data }: { data: DeveloperData[] }) => data)), { refetchOnWindowFocus: false, retryDelay: 1000, staleTime: 1000 * 60 * 60 ,suspense: true}
    );
    
    return (
        <>
            {developersData?.map((repository, index) => <DeveloperCard {...repository}{...currentParams} key={index} />)}
        </>
    )
}
