import React from 'react'
import { Svg } from './styles'

export const Loading = (props) => {
  return (
    <Svg
      style={{
        margin: 'auto',
        background: '#fff'
      }}
      width={151}
      height={151}
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      display='block'
      {...props}
    >
      <circle
        cx={50}
        cy={50}
        fill='none'
        stroke='#28292f'
        strokeWidth={4}
        r={20}
        strokeDasharray='94.24777960769379 33.41592653589793'
        transform='rotate(18.697 50 50)'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1.003361344537814s'
          values='0 50 50;360 50 50'
          keyTimes='0;1'
        />
      </circle>
    </Svg>
  )
}
