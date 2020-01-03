import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import { ImgWrapper, Img, Article } from './styles'
import { FavButton } from './../FavButton'
import { ToggleLikeMutation } from './../../container/ToggleLikeMutation'

import { useLocalStorage } from './../../hooks/useLocalStorage'
import { useNearScreen } from './../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {
        show
          ? <Fragment>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    !liked && toggleLike({ variables: {
                      input: { id }
                    } })
                    setLiked(!liked)
                  }

                  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                }
              }
            </ToggleLikeMutation>

          </Fragment> : null
      }
    </Article>
  )
}
