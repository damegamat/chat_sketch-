import styled from '@emotion/styled/macro'
import { Avatar, Grid } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'

import { colors } from 'utils'
import { useUser } from 'hooks/useUser'

const AvatarGroup = ({ avatars, className }) => {
  const user = useUser()
  const sx = {
    width: 34,
    height: 34,
  }

  return (
    <Grid className={className} container>
      {avatars?.map(({ avatar, id }) => (
        <Avatar
          key={uuidv4()}
          src={avatar}
          sx={{
            ...sx,
            border: `2px solid ${
              id === user.id ? colors.lightPurple : colors.darkerGray
            }`,
          }}
        />
      ))}
    </Grid>
  )
}

const Styled = styled(AvatarGroup)`
  height: 48px;
  flex-wrap: nowrap;
  width: auto;
  > div {
    margin-right: 6px;
    :nth-last-of-type() {
      margin-right: 0;
    }
    :nth-of-type(2n) {
      align-self: flex-end;
    }
  }
`
export default Styled
