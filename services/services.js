import { request, gql } from 'graphql-request'

const graphQLEndpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getWorks = async () => {
    const query = gql`
        query GetWorks {
            workExperiences {
                createdAt
                description
                id
                joinedDate
                leftDate
                skills
                slug
                title
                type
                url
                richDescription {
                    html
                }
            }
        }
    `

    const result = await request(graphQLEndpoint, query)

    return result.workExperiences
}


export const getFeaturedProjects = async () => {
    const query = gql`
    query GetFeaturedProjects {
        projects(where: {isFeatured: true}) {
          category {
            slug
            title
          }
          cover {
            url
            height
            width
          }
          isFeatured
          language
          links
          note
          slug
          title
          started
          simpleDescription
          type
        }
      }
      `

    const result = await request(graphQLEndpoint, query)

    return result.projects
}

export const getMoreProjects = async () => {
    const query = gql`
    query GetMoreProjects {
        projects(where: {isFeatured: false}) {
                category {
                    slug
                    title
                }
                cover {
                    url
                    height
                    width
                }
                duration
                isFeatured
                language
                links
                note
                slug
                title
                started
                simpleDescription
                type
            }
        }
      `

    const result = await request(graphQLEndpoint, query)

    return result.projects
}