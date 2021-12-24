import React, { useMemo } from 'react'
import { useQuery } from 'react-query';
import axios from '../../../../utils/axios';
import { useLocation } from 'react-router-dom';
import createSearchParams from '../../../../utils/createSearchParams';
import RepositoryCard from './RepositoryCard';
import { RepositoryData } from './type';



export default function Repositories() {
    let location = useLocation();
    const currentParams = useMemo(() => createSearchParams(location.search), [location.search])
    const {
        isLoading,
        data: repositoriesData,
    } = useQuery(['repositories',currentParams], () =>
    (axios
        .get("/api/repositories", { params: currentParams })
        .then(({ data }: { data: RepositoryData[] }) => data)), { refetchOnWindowFocus: false, retryDelay: 1000, staleTime: 1000 * 60 * 60,suspense: true }
    );
    return (
        <>
            {repositoriesData?.map((repository,index)=><RepositoryCard {...repository}{...currentParams} key={index}/>)}
        </>
    )
}
