import React, { useState }  from 'react'
import TriangleCalc from './calculators/TriangleCalc'
import ClayCalc from './calculators/ClayCalc'
import CircleCalc from './calculators/CircleCalc'
import CompoundMiterCalc from './calculators/CompoundMiterCalc'


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
    <button className='btn' name='compoundMiterCalc' onClick={handleCalcChange}>Compound Miter Calculator</button>
    {calcType === 'triangle' && <TriangleCalc />}
    {calcType === 'clayShrinkRate' && <ClayCalc />}
    {calcType === 'circleCalculator' && <CircleCalc />}
    {calcType === 'compoundMiterCalc' && <CompoundMiterCalc />}
    </div>
      )
}