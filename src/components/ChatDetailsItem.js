import { Grid, css } from '@mui/material'
import styled from '@emotion/styled/macro'

import Text from 'components/Text'
import InncomingUser from 'components/InncomingUser'
import ChatWindow from 'components/ChatWindow'

const ChatDetailsItem = ({
  avatar,
  text,
  logged,
  info,
  inncoming,
  className,
}) => {
  return (
    <Grid className={className}>
      {text && <ChatWindow avatar={avatar} text={text} logged={logged} />}
      {inncoming && <InncomingUser inncoming={inncoming} avatar={avatar} />}
      {info && (
        <Text small regular opacity={0.2}>
          {info}
        </Text>
      )}
    </Grid>
  )
}

const Styled = styled(ChatDetailsItem)`
  position: relative;
  display: flex;
  align-items: center;
  align-self: flex-start;

  ${({ logged, inncoming }) =>
    (logged || inncoming) &&
    css`
      align-self: flex-end;
      text-align: right;
    `}

  ${({ info }) =>
    info &&
    css`
      margin-top: 10px;
    `}
`
export default Styled
