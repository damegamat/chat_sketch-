import { Grid, Input } from '@mui/material'
import styled from '@emotion/styled/macro'

import { IconWrapper, CloudIcon, CameraIcon } from 'components/Icons'
import { colors, opacity } from 'utils'

const StyledInput = styled(Input)`
  width: auto;
  flex-grow: 1;
  color: ${colors.white};
  background-color: ${opacity[0]};
  border-radius: 10px;
  padding: 15px 13px 15px 15px;
  max-width: 600px;
`

const ChatInput = ({ className }) => {
  return (
    <Grid
      className={className}
      container
      alignItems='flex-end'
      justifyContent='center'
    >
      <StyledInput
        disableUnderline
        placeholder='Write'
        multiline
        value='Hello, hw are you? This is out ream chat, you can write here about your projects. I heared you have experience in marketing, I would like to hear more about it. We need to focuse more on promoting our products.'
      />
      <Grid flexDirection='columnn' marginLeft='15px'>
        <IconWrapper color={colors.green} marginBottom='10px'>
          <CameraIcon />
        </IconWrapper>
        <IconWrapper color={colors.purple}>
          <CloudIcon />
        </IconWrapper>
      </Grid>
    </Grid>
  )
}

const Styled = styled(ChatInput)``
export default Styled
