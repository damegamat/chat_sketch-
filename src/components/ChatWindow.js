import { Avatar, Grid, css } from '@mui/material'
import styled from '@emotion/styled/macro'

import Text from 'components/Text'
import { colors, filters } from 'utils'

const ChatWindow = ({ avatar, text, logged, className }) => {
  const sx = { width: 24, height: 24 }
  return (
    <Grid className={className}>
      <Text small varianet='caption'>
        {text}
      </Text>
      {!logged && <Avatar src={avatar} sx={sx} />}
    </Grid>
  )
}

const Styled = styled(ChatWindow)`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${colors.darkGrey};
  border-radius: 20px;
  padding: 10px 22px;
  min-height: 40px;
  max-width: 280px;
  > div {
    position: absolute;
    bottom: 0;
    right: -10px;
    filter: ${filters[1]};
  }
  ${({ logged }) =>
    logged &&
    css`
      background-color: ${colors.darkBlue};
      margin-right: 10px;
      padding: 10px 14px;
      max-width: 245px;
    `}
`
export default Styled
