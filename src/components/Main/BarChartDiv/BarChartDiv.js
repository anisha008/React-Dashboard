import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BarChart from './BarChart/BarChart'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: '100%',
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0px 0px 4px 0px rgba(50, 50, 50, 0.5)',
  },
  fullWidth: {
    width: '100%',
  },
  fullWidthLimited: {
    width: '100%',
    maxWidth: '960px',
    maxHeight: '560px'
  },
}))

const BarChartDiv = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.fullWidth}>
        <Typography variant="h6" style={{ fontWeight: '400', fontSize: '15px' }}>SALES ANALYTICS</Typography>
      </div>
      <div className={classes.fullWidthLimited}>
        <BarChart />
      </div>
    </div>
  )
}

export default BarChartDiv
