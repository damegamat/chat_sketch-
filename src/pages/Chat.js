import styled from '@emotion/styled/macro'
import { Grid } from '@mui/material'

import Text from 'components/Text'
import AvatarGroup from 'components/AvatarGroup'
import ChatDetailsList from 'components/ChatDetailsList'
import ChatInput from 'components/ChatInput'
import { v4 as uuidv4 } from 'uuid'

import person1 from 'imgs/person1.jpeg'
import person2 from 'imgs/person2.jpeg'
import person3 from 'imgs/person3.jpeg'

const MOCK_AVATAR_LIST = [
  { avatar: null, id: uuidv4() },
  { avatar: null, id: uuidv4() },
  { avatar: null, id: '1234321' },
  { avatar: null, id: uuidv4() },
  { avatar: person1, id: uuidv4() },
  { avatar: person2, id: uuidv4() },
  { avatar: person3, id: uuidv4() },
]

const MOCK_CHAT_DATA = [
  {
    id: uuidv4(),
    text: 'Anybody affected by coronavirus?',
    inncoming: null,
    info: null,
    avatar: person2,
  },
  {
    id: '1234321',
    text: 'At out office 3 ppl are infected. We work from home.',
    inncoming: null,
    info: null,
    avatar: null,
  },
  {
    id: uuidv4(),
    text: 'All good here. We wash hands and stay home.',
    inncoming: null,
    info: null,
    avatar: person1,
  },
  {
    id: uuidv4(),
    text: null,
    inncoming: true,
    info: null,
    avatar: person3,
  },
  {
    id: '1234321',
    text: 'This is our new manager, She will join chat. Her name is Ola.',
    inncoming: null,
    info: null,
    avatar: null,
  },
  {
    id: uuidv4(),
    text: null,
    inncoming: null,
    info: 'Marissa joined.',
    avatar: person2,
  },
  {
    id: uuidv4(),
    text: 'Hello everybody! I’m Ola.',
    inncoming: null,
    info: null,
    avatar: person3,
  },
  {
    id: uuidv4(),
    text: 'Hi Ola!',
    inncoming: null,
    info: null,
    avatar: null,
  },
]

const Chat = ({ className }) => {
  return (
    <Grid
      className={className}
      container
      flexDirection='column'
      alignItems='center'
    >
      <AvatarGroup avatars={MOCK_AVATAR_LIST} />
      <Text smaller uppercase variant='h6'>
        3 MAR 13:34
      </Text>
      <ChatDetailsList list={MOCK_CHAT_DATA} />
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
