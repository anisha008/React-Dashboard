import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    display: 'flex',
    padding: '13px',
    width: '23%',
    [theme.breakpoints.down('sm')]: {
      width: '47%',
    },
    marginBottom: '10px',
    borderRadius: '5px',
    height: '100px',
    paddingTop: '15px',
    boxShadow: '0px 0px 4px 0px rgba(50, 50, 50, 0.5)',
    borderLeft: `5px solid ${theme.status.blue.main}`,
    backgroundColor: 'white',
  },
  iconDiv: {
    width: '40%',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  iconBadge: {
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    width: '60px',
    height: '60px',
    backgroundColor: theme.status.blue.light,
    border: `3px solid ${theme.status.blue.main}`,
    color: theme.status.blue.dark,
    textAlign: 'center',
    borderRadius: '50%',
    paddingTop: '7px',
  },
  textDiv: {
    width: '60%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  fullWidth: {
    width: '100%'
  }
}))

const NumberCard = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ fontSize: '32px', paddingTop: '5px' }} className={classes.iconDiv}>
        <div className={classes.iconBadge}>
          {data.icon}
        </div>
      </div>
      <div className={classes.textDiv}>
        <div style={{ fontSize: '30px' }} className={classes.fullWidth}>
          {data.value}
        </div>
        <div className={classes.fullWidth}>
          {data.text}
        </div>
      </div>
    </div>
  )
}

export default NumberCard
