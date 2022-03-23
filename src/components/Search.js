import { Grid, Input } from '@mui/material'
import styled from '@emotion/styled/macro'

import { IconWrapper, PlusIcon, SearchIcon } from 'components/Icons'
import { colors } from 'utils'

const StyledInput = styled(Input)`
  width: auto;
  flex-grow: 1;
  color: ${colors.opacity1};
  background-color: ${colors.opacity};
  border-radius: 10px;
  padding-left: 15px;
  max-width: 600px;
`

const Search = ({ className }) => {
  return (
    <Grid
      className={className}
      container
      alignItems='center'
      justifyContent='center'
    >
      <StyledInput
        disableUnderline
        placeholder='Search...'
        endAdornment={
          <IconWrapper color={colors.grey}>
            <SearchIcon />
          </IconWrapper>
        }
      />
      <IconWrapper color={colors.blue} marginLeft='15px'>
        <PlusIcon />
      </IconWrapper>
    </Grid>
  )
}

const Styled = styled(Search)``
export default Styled
