import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    paddingTop: '14px',
  },
  fullWidth: {
    width: '100%',
  },
  caption: {
    color: 'gray',
    margin: '0px',
  },
}))

const DataContainer = ({ heading, value, fontWeight, width }) => {
  const classes = useStyles()

  return (
    <div style={{ width: `${width}%`}} className={classes.root}>

      <div className={classes.fullWidth}>
        <Typography paragraph className={classes.caption}>{heading}</Typography>
      </div>

      <div className={classes.fullWidth}>
        <Typography variant="h6" style={{ fontWeight: fontWeight }}>{value}</Typography>
      </div>

    </div>
  )
}

export default DataContainer
