interface builtByData {
    username: string,
    url: string,
    avatar?: string
}
interface RepositoryData {
    rank: number;
    username: string,
    repositoryName: string,
    url: string,
    description: string,
    language: string,
    languageColor: string,
    totalStars: number,
    forks: number,
    starsSince: number,
    since: string,
    builtBy: builtByData[]
}
export type {builtByData,RepositoryData}