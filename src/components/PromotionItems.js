import React from 'react'
import useData from '../useHooks/useData'

function PromotionItems() {
  const elements = useData(true)
  return <>{elements()}</>
}

export default PromotionItems
