import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DoughnutChart from './DoughnutChart/DoughnutChart'
import DataContainer from './DataContainer/DataContainer'
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
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  fullWidth: {
    width: '100%',
  },
  oneThirdWidth: {
    width: '32%',
  },
  textCenter: {
    textAlign: 'center',
  }
}))

const DoughnutDiv = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.fullWidth}>
      <Typography variant="h6" style={{ fontWeight: '400', fontSize: '15px' }}>TOTAL REVENUE</Typography>
      </div>

      <DoughnutChart />

      <DataContainer heading={'Total sales made today'} value={'$75'} width={100} fontWeight={500} />

      <div className={`${classes.fullWidth} ${classes.flexContainer}`}>
        <DataContainer heading={'Target'} value={'$1000'} width={32} fontWeight={400} />
        <DataContainer heading={'Last Week'} value={'$523'} width={32} fontWeight={400} />
        <DataContainer heading={'Last Month'} value={'$965'} width={32} fontWeight={400} />
      </div>
    </div>
  )
}

export default DoughnutDiv
