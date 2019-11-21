import React from 'react'
import { PhotoCard } from './../components/PhotoCard'
import { Loading } from './../components/Loading'
import { ErrorPage } from './../components/ErrorPage'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
const renderProp = ({ loading, error, data }) => {
  if (loading) return <Loading />
  if (error) return <ErrorPage errorMessage={'Photo not found'} />
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)
