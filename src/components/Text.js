import { Typography, css } from '@mui/material'
import styled from '@emotion/styled'

const fontstyles = css`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-transform: capitalize;
`

export const Text = styled(({ children, ...rest }) => (
  <Typography {...rest}>{children}</Typography>
))`
  ${fontstyles}

  ${({ title }) =>
    title &&
    css`
      font-size: 20px;
      line-height: 23px;
    `}
   
    ${({ small }) =>
    small &&
    css`
      font-weight: 300;
      font-size: 13px;
      line-height: 15px;
    `} 
   
    ${({ smaller }) =>
    smaller &&
    css`
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
    `}
`
