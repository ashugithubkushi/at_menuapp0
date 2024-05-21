import { Box } from '@mui/material'
import React from 'react'
import Sidenav from '../../Component/Sidenav'
import Navbar from '../../Component/Navbar'

const Home = () => {
  return (
  <>
  <Navbar/>
  <Box >
<Sidenav/>  

<Box component="main" sx={{flexGrow:1, p:3}}>
{/* <h1>Home</h1> */}
</Box>
  </Box>
  </>
  )
}

export default Home