import React from 'react'

function loader() {
  return (
    <div>
        
         <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src="/images/logo.png" // put your image in public/images
        alt="Loading"
        sx={{
          width: 80,
          height: 80,
        }}
      />
    </Box>
    
    </div>
  )
}

export default loader