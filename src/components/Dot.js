import { Grid, styled } from '@mui/material'
import { colors } from 'utils'

const SDot = styled(Grid)`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${colors.gray};
  opacity: ${({ active }) => !active && 0.3};
`

export const Dot = ({ active }) => {
  return <SDot active={active} />
}
