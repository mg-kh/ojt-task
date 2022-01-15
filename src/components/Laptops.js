import React from 'react'
import useData from '../useHooks/useData'

function Laptops() {
  const elements = useData()

  return <>{elements()}</>
}

export default Laptops
