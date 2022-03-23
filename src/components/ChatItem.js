import { Avatar, Grid, css } from '@mui/material'
import styled from '@emotion/styled/macro'

import { Text } from 'components/Text'
import { colors } from 'utils'

const AvatarWrapper = styled(Grid)`
  height: 44px;
  margin: 0 21px 0 5px;

  ${({ multiple }) =>
    multiple &&
    css`
      position: relative;
      margin: 0 16px 0 0;
      width: 54px;
      min-width: 54px;
      > div {
        position: absolute;
        :first-child {
          top: 0;
          left: 0;
          background-color: ${colors.darkGray};
          z-index: 1;
        }
        :last-child {
          bottom: 0;
          right: 0;
        }
      }
    `}
`

const ChatItem = ({
  avatar,
  name,
  latest_msg,
  date,
  sizes,
  group,
  className,
}) => {
  const avatarSize = sizes ?? group ? '34px' : '44px'
  const sx = { width: avatarSize, height: avatarSize }

  return (
    <Grid className={className} container>
      <AvatarWrapper
        container
        alignItems='center'
        width='auto'
        multiple={group}
      >
        {!group ? (
          <Avatar src={avatar} sx={sx} />
        ) : (
          <>
            <Avatar sx={sx}>
              <Text varianet='caption'>+{group}</Text>
            </Avatar>
            <Avatar src={avatar} sx={sx} />
          </>
        )}
      </AvatarWrapper>
      <Grid container>
        <Grid container justifyContent='space-between' mb='5px'>
          <Text varianet='caption'>{name}</Text>
          <Text varianet='caption'>{date}</Text>
        </Grid>
        <Text small varianet='caption'>
          {latest_msg}
        </Text>
      </Grid>
    </Grid>
  )
}

const Styled = styled(ChatItem)`
  flex-wrap: nowrap;
  flex-grow: 1;
`
export default Styled
