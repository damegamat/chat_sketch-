import styled from '@emotion/styled/macro'
import { Grid } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'

import ChatDetailsItem from 'components/ChatDetailsItem'
import { USER_DATA } from 'MOCKS'

const ChatDetailsList = ({ list, className }) => {
  return (
    <Grid container flexDirection='column' className={className}>
      {list?.map((props) => (
        <ChatDetailsItem
          {...props}
          logged={props.id === USER_DATA.id}
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
