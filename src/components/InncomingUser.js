import { Grid, css } from '@mui/material'
import styled from '@emotion/styled/macro'

import { colors } from 'utils'
import { XIcon, ArrowIcon } from 'components/Icons'

const SBox = styled(Grid)`
  ${({ img }) => css`
    width: 130px;
    height: 97px;
    border-radius: 20px;
    background: url(${img});
    background-size: cover;
  `};
`

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${colors.white};
  background-color: ${colors.orange};

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${colors.white};
      margin: 0 16px 0 13px;
    `}
`

const InncomingUser = ({ avatar, className }) => {
  return (
    <Grid className={className} container alignContent='center'>
      <Grid container alignItems='center' width='auto'>
        <Circle>
          <XIcon />
        </Circle>
        <Circle secondary>
          <ArrowIcon />
        </Circle>
      </Grid>
      <SBox img={avatar} />
    </Grid>
  )
}

const Styled = styled(InncomingUser)``
export default Styled
