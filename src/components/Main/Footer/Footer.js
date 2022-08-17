import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderTop: '1px solid darkgray',
    marginTop: '15px',
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography style={{ color: 'darkgray' }} paragraph>2020 &copy; Elecbits</Typography>
    </div>
  )
}

export default Footer
