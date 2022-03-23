import styled from '@emotion/styled/macro'
import { Grid } from '@mui/material'

import Avatar from 'components/Avatar'
import Search from 'components/Search'
import { Slider } from 'components/Slider'
import ChatList from 'components/ChatList'

import person1 from 'imgs/person1.jpeg'
import person2 from 'imgs/person2.jpeg'
import person3 from 'imgs/person3.jpeg'

const MOCK_CHAT_LIST = [
  {
    avatar: person2,
    group: 5,
    name: 'Bożenka Malina',
    latest_msg: 'Uploaded file.',
    date: 'Sun',
  },
  {
    avatar: [],
    group: null,
    name: 'Odeusz Piotrowski',
    latest_msg: 'Will do, super, thank you',
    date: 'Tue',
  },
  {
    avatar: [],
    group: 3,
    name: 'Krysia Eurydyka',
    latest_msg: 'How is koronavirus?',
    date: 'Mon',
  },
  {
    avatar: [],
    group: 22,
    name: 'jarosław kowalski',
    latest_msg: 'jarek.kowal@emaile.com',
    date: '01 Feb',
  },
  {
    avatar: person3,
    group: null,
    name: 'Krysia Eurydyka',
    latest_msg: 'Uploaded file.',
    date: '18 Mar',
  },
  {
    avatar: [],
    group: null,
    name: 'jarosław kowalski',
    latest_msg: 'no pracujemy z domu przez 5 ...',
    date: '01 Feb',
  },
]

const Main = ({ className }) => {
  return (
    <Grid className={className} container flexDirection='column'>
      <Avatar name='Martyna Wolna' sizes='45px' img={person1} />
      <Search />
      <Slider
        name='Favourites'
        items={[
          { name: 'Bożenka Malina', img: person1 },
          { name: 'Anastazja Ziemkowska', img: person2 },
          { name: 'Magdalena Pomorska', img: person3 },
          { name: 'Natalia Nowak', img: null },
          { name: 'Natalia Natalia', img: null },
          { name: 'Natalia Magdalena', img: null },
          { name: 'Anastazja Pomorska', img: null },
          { name: 'Michal Wisniewski', img: null },
          { name: 'Jarek Silny', img: null },
          { name: 'Daniel Slaby', img: null },
          { name: 'Mateusz Stary', img: null },
          { name: 'Kamil Kos', img: null },
        ]}
      />
      <ChatList chatList={MOCK_CHAT_LIST} />
    </Grid>
  )
}

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
