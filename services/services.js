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