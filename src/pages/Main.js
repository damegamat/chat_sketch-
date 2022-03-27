import styled from '@emotion/styled/macro'
import { Grid } from '@mui/material'

import Avatar from 'components/Avatar'
import Search from 'components/Search'
import Slider from 'components/Slider'
import ChatList from 'components/ChatList'
import { FAVOURITES_LIST, CHAT_LIST, USER_DATA } from 'MOCKS'

const Main = ({ className }) => (
  <Grid className={className} container flexDirection='column'>
    <Avatar name={USER_DATA.name} sizes='45px' img={USER_DATA.avatar} />
    <Search />
    <Slider name='Favourites' items={FAVOURITES_LIST} />
    <ChatList chatList={CHAT_LIST} />
  </Grid>
)

const Styled = styled(Main)`
  ${Avatar} {
    padding: 0 25px 0;
  }
  ${Search} {
    padding: 14px 20px 12px 25px;
  }
  ${ChatList} {
    padding: 0 28px 0 25px;
  }
`
export default Styled
