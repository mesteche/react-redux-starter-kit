import React from 'react'
import { Match, Miss } from 'react-router'
// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import Counter from './Counter'

export const createRoutes = (store) => (
  <CoreLayout>
    <Match pattern='/counter' component={Counter(store)} />
    <Miss component={Home} />
  </CoreLayout>
)

export default createRoutes
