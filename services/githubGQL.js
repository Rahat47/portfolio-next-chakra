import { gql, request } from 'graphql-request';

const githubGQLBase = 'https://api.github.com/graphql';
const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

export const getUser = async (username) => {
    const query = gql`
        query GetUserDetails($username: String!) {
            user(login: $username) {
                avatarUrl
                bio
                company
                createdAt
                location
                name
                url
                login
                followers {
                    totalCount
                }
                following {
                    totalCount
                }
                repositories(isFork: false) {
                    totalCount
                }
            }
        }
    `;

    const response = await request(githubGQLBase, query, { username }, {
        authorization: `bearer ${accessToken}`,
    });

    return response.user;
}


export const getUserRepos = async (username) => {
    const query = gql`
    query GetRepos($username: String!) {
        user(login: $username) {
          repositories(isFork: false, first: 100) {
            nodes {
              primaryLanguage {
                name
              }
            }
          }
        }
      }`;

    const response = await request(githubGQLBase, query, { username }, {
        authorization: `bearer ${accessToken}`,
    });

    return response.user.repositories.nodes;
}