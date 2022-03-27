import { Grid, styled } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'

import Tile from 'components/Tile'
import Dot from 'components/Dot'
import Text from 'components/Text'

const Slider = ({ items, name, className }) => {
  return (
    <Grid container className={className}>
      <Text title varianet='h6' padding='0 0 10px 35px'>
        {name}
      </Text>
      <Grid container mb='31px' pl='25px' justifyContent='flex-start'>
        {items.map(({ name, img }) => (
          <Tile key={uuidv4()} img={img} name={name} marginRight='15px' />
        ))}
      </Grid>
      <Grid container justifyContent='center'>
        {items.map((_, i) => (
          <Grid mr='9px' key={uuidv4()}>
            <Dot active={i === 0} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

const Styled = styled(Slider)`
  > div:nth-of-type(1) {
    flex-wrap: nowrap;
  }
`
export default Styled
