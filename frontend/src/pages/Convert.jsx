import React  from 'react'
import ConvertForm from '../components/ConvertForm'
import { useDispatch } from 'react-redux'
import { setCategory } from '../features/convert/convertSlice'

export default function Convert() {

  const dispatch = useDispatch()

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category))
  }

  // length area mass volume each temperature time digital partsPer speed pace pressure current voltage power reactivePower apparentPower energy reactiveEnergy volumeFlowRate illuminance frequency angle

  return (
    <div className=''>
      <div className='conversion-unit-categories'>
        <h1>Unit Conversion:</h1>
        <br/>
        <h1>Common Units</h1>
        <section>
          <button className='btn' type='button' onClick={() => handleCategoryClick('length')}>Length</button>
          <button className='btn' type='button' onClick={() => handleCategoryClick('area')}>Area</button>
          <button className='btn' type='button' onClick={() => handleCategoryClick('time')}>Time</button>
          <button className='btn' type='button' onClick={() => handleCategoryClick('speed')} >Speed</button>
          <button className='btn' type='button' onClick={() => handleCategoryClick('temperature')}>Temperature</button>
          <button className='btn' type='button' onClick={() => handleCategoryClick('pressure')}>Pressure</button>
        </section>
        <br/> 
        <section>
          <button className='btn' type='button' onClick={() => handleCategoryClick('volume')}>Volume</button>
          <button className='btn' type='button' onClick={() => handleCategoryClick('volumeFlowRate')}>Flow Rate</button>
          <button className='btn' type='button' onClick={() => handleCategoryClick('angle')}>Angle</button>
        </section>
        <br/>
        <h1>Light & Electric</h1>
        <section className='energy-units'>
          <button className='btn' type='button' onClick={() => handleCategoryClick('illuminance')}>Illuminance</button>
          <button className='btn' type='button' onClick={() => handleCategoryClick('frequency')}>Frequency</button>
          <button className='btn' type='button' onClick={() => handleCategoryClick('voltage')}>Voltage</button>
          <button className='btn' type='button' onClick={() => handleCategoryClick('current')}>Current</button>
        </section>
        <br/>
        <h1>Energy & Power</h1>
        <section>
          <button className='btn' type='button' onClick={() => handleCategoryClick('energy')}>Energy</button>
          <button className='btn' type='button' onClick={() => handleCategoryClick('reactiveEnergy')}>Reactive Energy</button>
          <button className='btn' type='button' onClick={() => handleCategoryClick('power')}>Power</button>
          <button className='btn' type='button' onClick={() => handleCategoryClick('apparentPower')}>Apparent Power</button>
          <button className='btn' type='button' onClick={() => handleCategoryClick('reactivePower')}>Reactive Power</button>
        </section>
        <br/>
      </div>
      <ConvertForm />
    </div>
      )
}