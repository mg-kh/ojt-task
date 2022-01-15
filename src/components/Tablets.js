import React from 'react'
import useData from '../useHooks/useData'

function Tablets() {
  const elements = useData()

  return <>{elements()}</>
}

export default Tablets
