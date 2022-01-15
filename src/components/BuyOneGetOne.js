import React from 'react'
import useData from '../useHooks/useData'

function BuyOneGetOne() {
  const elements = useData()

  return <>{elements()}</>
}

export default BuyOneGetOne
