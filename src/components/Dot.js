import { Grid, styled } from '@mui/material'
import { colors } from 'utils'

const Dot = ({ className }) => {
  return <Grid className={className} />
}

const Styled = styled(Dot)`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${colors.gray};
  opacity: ${({ active }) => !active && 0.3};
`
export default Styled
