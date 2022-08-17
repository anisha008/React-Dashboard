import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import DataTable from './DataTable/DataTable'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '0px',
    height: '100%',
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0px 0px 4px 0px rgba(50, 50, 50, 0.5)',
    overflowX: 'scroll',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  halfWidth: {
    width: '50%',
  },
}))

const DataDisplayDiv = ({ data }) => {
  const classes = useStyles()

  return (
    <div className={`${classes.root} ${classes.fullWidth}`}>

      <div className={classes.row}>

        <div className={classes.fullWidth}>
          <Typography variant="h6" style={{ fontWeight: '400', fontSize: '15px' }}>RECENT ORDERS</Typography>
          <Typography paragraph style={{ fontSize: '10px', color: 'gray' }}>
            You can edit & add more records in the table.
          </Typography>
        </div>

      </div>

      <div className={classes.row}>
        <DataTable tableData={data} />
      </div>

    </div>
  )
}

export default DataDisplayDiv
