import styled from '@emotion/styled/macro'
import { Grid } from '@mui/material'

import ChatDetailsItem from 'components/ChatDetailsItem'
import { v4 as uuidv4 } from 'uuid'

const ChatDetailsList = ({ list, className }) => {
  return (
    <Grid container flexDirection='column' className={className}>
      {list?.map((props) => (
        <ChatDetailsItem
          {...props}
          logged={props.id === '1234321'}
          key={uuidv4()}
        />
      ))}
    </Grid>
  )
}

const Styled = styled(ChatDetailsList)`
  ${ChatDetailsItem} {
    margin-bottom: 10px;
  }
`
export default Styled
