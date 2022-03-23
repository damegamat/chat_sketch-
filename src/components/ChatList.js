import styled from '@emotion/styled/macro'
import { Grid } from '@mui/material'
import ChatItem from 'components/ChatItem'

const ChatList = ({ chatList, className }) => {
  return (
    <Grid container flexDirection='column' className={className}>
      {chatList.map((props, i) => (
        <ChatItem {...props} key={i} />
      ))}
    </Grid>
  )
}

const Styled = styled(ChatList)`
  margin-top: 25px;
  ${ChatItem} {
    margin-bottom: 26px;
    :last-child {
      margin-bottom: 22px;
    }
  }
`
export default Styled
