
interface popularRepository {
    repositoryName: string,
    description: string,
    url: string
}
interface DeveloperData {
    avatar: string,
    name: string,
    popularRepository: popularRepository,
    rank: number;
    since: string,
    url: string,
    username: string,
}
export type {popularRepository,DeveloperData}