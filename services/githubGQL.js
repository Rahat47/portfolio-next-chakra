import { gql, GraphQLClient } from 'graphql-request';

const githubGQLBase = 'https://api.github.com/graphql';
const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

// Create a graphql client instance
const client = new GraphQLClient(githubGQLBase, {
  headers: {
    authorization: `bearer ${accessToken}`,
  },
});

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
                contributionsCollection {
                    totalCommitContributions
                }
            }
        }
    `;

  const response = await client.request(query, { username });

  return response.user;
}


export const getUserReposPrimayLang = async (username) => {
  const query = gql`
    query GetReposPrimaryLang($username: String!) {
        user(login: $username) {
          repositories(isFork: false, first: 100) {
            nodes {
              primaryLanguage {
                name
              }
              stargazerCount
            }
          }
        }
      }`;

  const response = await client.request(query, { username });

  return response.user.repositories.nodes;
}


export const getMostStarredTopFiveRepos = async (username) => {
  const query = gql`
    query GetMostStarred5($username: String!) {
        user(login: $username) {
          repositories(first: 5, orderBy: {field: STARGAZERS, direction: DESC}) {
            nodes {
              stargazerCount
              name
              url
            }
          }
        }
      }
    `
  const response = await client.request(query, { username });
  return response.user.repositories.nodes;
}


export const getCommits = async (username) => {
  const query = gql`
    query GetCommits($username: String!) {
        user(login: $username) {
          contributionsCollection {
            commitContributionsByRepository {
              contributions(first: 100) {
              nodes {
                occurredAt
                commitCount
              }
            }
          }
        }
        }
      }
    `
  const response = await client.request(query, { username });
  return response.user.contributionsCollection.commitContributionsByRepository;
}