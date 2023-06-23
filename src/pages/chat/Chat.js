import React from 'react'
import Inbox from '../../components/inbox/Inbox'
import { Box } from '@mui/material'

const Chat = () => {
  return (
    <Box sx={{width:{xs:"90%",md:"70%"}}} mx={"auto"}>
        <Inbox/>
    </Box>
  )
}

export default Chat