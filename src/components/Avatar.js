import styled from '@emotion/styled/macro'
import { Avatar as MAvatar, Grid } from '@mui/material'

import { Text } from 'components/Text'

const Avatar = ({ img, name, sizes, className }) => {
  return (
    <Grid className={className} container alignItems='center'>
      <MAvatar src={img} sx={{ width: sizes, height: sizes }} />
      <Text title variant='h6' marginLeft='8px'>
        {name}
      </Text>
    </Grid>
  )
}

const Styled = styled(Avatar)``
export default Styled
