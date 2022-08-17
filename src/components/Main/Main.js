import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import NumberCard from './NumberCard/NumberCard'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import BarChartIcon from '@material-ui/icons/BarChart'
import VisibilityIcon from '@material-ui/icons/Visibility'
import DoughnutDiv from './DoughnutDiv/DoughnutDiv'
import LineChartDiv from './LineChartDiv/LineChartDiv'
import BarChartDiv from './BarChartDiv/BarChartDiv'
import DataDisplayDiv from './DataDisplayDiv/DataDisplayDiv'
import Footer from './Footer/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#EEEEEE',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingBottom: '0px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0px',
    }
  },
  chartContainerSmall: {
    width: '39%',
  },
  chartContainerMedium: {
    width: '49%',
  },
  chartContainerLarge: {
    width: '59%',
  },
  chartContainer: {
    marginTop: '0px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '15px',
    },
  },
  fullWidth: {
    width: '100%'
  }
}))

const initialTopFourData = [
  {
    id: 1,
    icon: <AttachMoneyIcon />,
    text: 'Total Revenue',
    value: 0,
    color: 'blue',
  },
  {
    id: 2,
    icon: <ShoppingCartIcon />,
    text: 'Today\'s Sales',
    value: 0,
    color: 'purple',
  },
  {
    id: 3,
    icon: <BarChartIcon />,
    text: 'conversion',
    value: 0,
    color: 'blue',
  },
  {
    id: 4,
    icon: <VisibilityIcon />,
    text: 'Today\'s Visits',
    value: 0,
    color: 'purple',
  }
]

const Main = () => {
  const classes = useStyles()

  const [data, setData] = useState(null)
  const [topFourData, setTopFourData] = useState(initialTopFourData)

  useEffect(() => {
    axios
      .get('https://wygtwu2p2j.execute-api.ap-south-1.amazonaws.com/test')
      .then(response => {
        const responseData = response.data
        // console.log(responseData)
        setData(responseData)
        const newTopFourData = [...topFourData]
        newTopFourData[0].value = responseData.dataForTopFourBoxes.totalRevenue
        newTopFourData[1].value = responseData.dataForTopFourBoxes.todaysSales
        newTopFourData[2].value = responseData.dataForTopFourBoxes.conversion
        newTopFourData[3].value = responseData.dataForTopFourBoxes.todaysVisits
        setTopFourData(newTopFourData)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <div>
            <Typography variant="h5" component="h5">
              Dashboard
            </Typography>
            <Typography paragraph color="secondary">
              Welcome to Elecbits admin panel!
            </Typography>
          </div>

          <div className={`${classes.row} ${classes.chartContainer}`}>
            {topFourData.map(item => (
              <NumberCard key={item.id} data={item} />
            ))}
          </div>

          <div className={classes.row}>

            <div className={`${classes.chartContainerSmall} ${classes.chartContainer}`}>
              <DoughnutDiv />
            </div>

            <div className={`${classes.chartContainerLarge} ${classes.chartContainer}`}>
              <LineChartDiv />
            </div>
          </div>

          <div className={classes.row}>

            <div className={`${classes.fullWidth} ${classes.chartContainer}`}>
              <BarChartDiv />
            </div>

          </div>

          <div className={classes.row}>
            <div className={`${classes.fullWidth} ${classes.chartContainer}`}>
              <DataDisplayDiv data={data !== null ? data.dataForBottomRightTable : []} />
            </div>
          </div>

          <footer className={classes.row}>
            <Footer />
          </footer>
      </main>
    </div>
  )
}

export default Main
