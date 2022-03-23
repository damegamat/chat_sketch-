import { Grid, styled } from '@mui/material'

import Tile from 'components/Tile'
import { Dot } from 'components/Dot'
import { Text } from 'components/Text'

const TileWrapper = styled(Grid)`
  flex-wrap: nowrap;
`

export const Slider = ({ items, name }) => {
  return (
    <Grid container>
      <Text title varianet='h6' padding='0 0 10px 35px'>
        {name}
      </Text>
      <TileWrapper container mb='31px' pl='25px' justifyContent='flex-start'>
        {items.map(({ name, img }) => (
          <Tile key={img} img={img} name={name} marginRight='15px' />
        ))}
      </TileWrapper>
      <Grid container justifyContent='center'>
        {items.map((_, i) => (
          <Grid mr='9px'>
            <Dot active={i === 0} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
