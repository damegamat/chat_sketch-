import { Typography, css } from '@mui/material'
import styled from '@emotion/styled/macro'

const fontstyles = css`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 1px;
`

const Text = ({ children, variant, marginLeft, padding, className }) => (
  <Typography
    className={className}
    variant={variant}
    marginLeft={marginLeft}
    padding={padding}
  >
    {children}
  </Typography>
)

const Styled = styled(Text)`
  ${fontstyles}
  opacity: ${({ opacity }) => opacity};

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

    ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}
    
    ${({ regular }) =>
    regular &&
    css`
      font-weight: 400;
    `}
`
export default Styled
