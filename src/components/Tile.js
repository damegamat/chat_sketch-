import { Grid, css } from '@mui/material'
import styled from '@emotion/styled/macro'

import { HeartIcon } from 'components/Icons'
import Text from 'components/Text'

const SBox = styled(Grid)`
  ${({ img }) => css`
    width: 95px;
    min-width: 95px;
    height: 140px;
    flex-direction: column;
    justify-content: flex-end;
    background: ${img
      ? `url(${img})`
      : 'linear-gradient(180deg, #03A9F1 0%, #A0025A 100%);'};

    background-size: cover;
    padding: 0 15px 12px 10px;
    filter: drop-shadow(20px 24px 34px rgba(0, 0, 0, 0.45));
    border-radius: 30px;
  `};
`

const Tile = ({ img, name, ...rest }) => {
  return (
    <SBox container img={img} {...rest}>
      <Text smaller variant='subtitle2'>
        {name}
      </Text>
      <Grid container justifyContent='flex-end'>
        <HeartIcon />
      </Grid>
    </SBox>
  )
}

const Styled = styled(Tile)``
export default Styled
