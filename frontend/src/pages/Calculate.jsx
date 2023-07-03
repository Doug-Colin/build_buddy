import React, { useState }  from 'react'
import TriangleCalc from '../components/TriangleCalc'
import ClayCalc from '../components/ClayCalc'
import CircleCalc from '../components/CircleCalc'


export default function Calculate() {
  const [ calcType, setCalcType] = useState('')
  
  const handleCalcChange = (e) => {
    setCalcType(e.target.name)
  }


  return (
    <div className=''>
    <button className='btn' name='triangle' onClick={handleCalcChange}>Triangle Calculator</button>
    <button className='btn' name='clayShrinkRate' onClick={handleCalcChange}>Clay Shrinkrate Calculator</button>
    <button className='btn' name='circleCalculator' onClick={handleCalcChange}>Circle Calculator</button>
    <button className='btn' name='' onClick={handleCalcChange}>Next Caclulator- Carpentry/Rectangle?</button>
    {calcType === 'triangle' && <TriangleCalc />}
    {calcType === 'clayShrinkRate' && <ClayCalc />}
    {calcType === 'circleCalculator' && <CircleCalc />}
    </div>
      )
}