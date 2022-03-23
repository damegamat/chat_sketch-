import { css, Grid } from '@mui/material'
import styled from '@emotion/styled'

const StylesIconWrapper = styled(Grid)`
  ${({ color }) => css`
    --size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--size);
    width: var(--size);
    min-width: var(--size);
    background-color: ${color};
    border-radius: 10px;
  `}
`

export const IconWrapper = ({ children, ...rest }) => (
  <StylesIconWrapper {...rest}>{children}</StylesIconWrapper>
)
