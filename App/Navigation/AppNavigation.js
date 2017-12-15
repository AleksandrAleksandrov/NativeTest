import { TabNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import DashboardScreen from '../Containers/DashboardScreen'
import ProjectScreen from '../Containers/ProjectScreen'
import StatisticScreen from '../Containers/StatisticsScreen'
import TasksScreen from '../Containers/TasksScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = TabNavigator({
  Dashboard: { screen: DashboardScreen },
  Project: { screen: LaunchScreen },
  Statistic: { screen: StatisticScreen },
  Tasks: { screen: TasksScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Dashboard',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
