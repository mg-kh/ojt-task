import React from 'react'

import useData from '../useHooks/useData'

function Phones() {
  const elements = useData()

  return <>{elements()}</>
}

export default Phones
