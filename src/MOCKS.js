import { v4 as uuidv4 } from 'uuid'
import person1 from 'imgs/person1.jpeg'
import person2 from 'imgs/person2.jpeg'
import person3 from 'imgs/person3.jpeg'

export const USER_DATA = {
  name: 'Martyna Wolna',
  id: '1234321',
  avatar: person1,
}

export const FAVOURITES_LIST = [
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
]

export const CHAT_LIST = [
  {
    avatar: person2,
    group: 5,
    name: 'Bożenka Malina',
    latest_msg: 'Uploaded file.',
    date: 'Sun',
  },
  {
    avatar: null,
    group: null,
    name: 'Odeusz Piotrowski',
    latest_msg: 'Will do, super, thank you',
    date: 'Tue',
  },
  {
    avatar: null,
    group: 3,
    name: 'Krysia Eurydyka',
    latest_msg: 'How is koronavirus?',
    date: 'Mon',
  },
  {
    avatar: null,
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
    avatar: null,
    group: null,
    name: 'jarosław kowalski',
    latest_msg: 'no pracujemy z domu przez 5 ...',
    date: '01 Feb',
  },
].map((obj) => ({ ...obj, id: uuidv4() }))

export const AVATAR_LIST = [
  { avatar: null, id: uuidv4() },
  { avatar: null, id: uuidv4() },
  { avatar: null, id: USER_DATA.id },
  { avatar: null, id: uuidv4() },
  { avatar: person1, id: uuidv4() },
  { avatar: person2, id: uuidv4() },
  { avatar: person3, id: uuidv4() },
]

export const CHAT_DATA = [
  {
    id: uuidv4(),
    text: 'Anybody affected by coronavirus?',
    inncoming: null,
    info: null,
    avatar: person2,
  },
  {
    id: USER_DATA.id,
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
    id: USER_DATA.id,
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
