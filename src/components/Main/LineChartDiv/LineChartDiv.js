import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LineChart from './LineChart/LineChart'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '0px',
    marginRight: '0px',
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
}))

const LineChartDiv = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.fullWidth}>
        <Typography variant="h6" style={{ fontWeight: '400', fontSize: '15px' }}>TOTAL SALES</Typography>
      </div>
      <div className={classes.fullWidth}>
        <LineChart />
      </div>
    </div>
  )
}

export default LineChartDiv
