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
        projects(where: {isFeatured: true}, orderBy: createdAt_DESC) {
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
        projects(where: {isFeatured: false}, orderBy: createdAt_DESC) {
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

export const getSingleProject = async (slug) => {
  const query = gql`
    query GetSingleProject($slug: String!) {
        project(where: {slug: $slug}) {
          id
          category {
            title
            slug
          }
          client {
            avatar {
              url
            }
            bio
            email
            location
            name
            urlHandle
            project {
                id
            }
          }
          cover {
            url
            width
            height
          }
          duration
          images {
            fileName
            height
            id
            url
            width
          }
          isFeatured
          language
          links
          note
          simpleDescription
          skills
          slug
          started
          title
          type
          description {
                raw
                html
            }
        }
      }
      `

  const result = await request(graphQLEndpoint, query, { slug })

  return result.project
}

export const getAllProjectsSlugs = async () => {
  const query = gql`
    query GetAllProjectsSlugs {
        projects {
            slug
        }
      }
      `

  const result = await request(graphQLEndpoint, query)

  return result.projects
}