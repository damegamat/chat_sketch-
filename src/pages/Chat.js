import styled from '@emotion/styled/macro'
import { Grid } from '@mui/material'

import Text from 'components/Text'
import AvatarGroup from 'components/AvatarGroup'
import ChatDetailsList from 'components/ChatDetailsList'
import ChatInput from 'components/ChatInput'
import { AVATAR_LIST, CHAT_DATA } from 'MOCKS'

const Chat = ({ className }) => {
  return (
    <Grid
      className={className}
      container
      flexDirection='column'
      alignItems='center'
    >
      <AvatarGroup avatars={AVATAR_LIST} />
      <Text smaller uppercase variant='h6'>
        3 MAR 13:34
      </Text>
      <ChatDetailsList list={CHAT_DATA} />
      <ChatInput />
    </Grid>
  )
}

const Styled = styled(Chat)`
  > ${AvatarGroup} {
    margin: 0 39px 22px 33px;
  }
  > ${Text} {
    text-align: center;
    margin-bottom: 12px;
  }
  > ${ChatDetailsList} {
    padding: 0 35px;
  }
  > ${ChatInput} {
    padding: 10px 20px 52px 25px;
  }
`
export default Styled
