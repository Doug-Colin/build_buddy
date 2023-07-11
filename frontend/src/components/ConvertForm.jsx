import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import convert from 'convert-units'
import { setValue, setCurrentUnit, setNewUnit, setResult,  } from '../features/convert/convertSlice'

//add function later to convertSlice for POST request to save converted value to note, and dispatch function here.
//import {createConversionNote} from '../features/convert/convertSlice'

export default function ConvertForm() {

    
    const dispatch = useDispatch()

    //select category that the user clicked on in page Convert.jsx from Redux state 
    const category = useSelector((state) => state.convert.category)
    const value = useSelector((state) => state.convert.value)
    const currentUnit = useSelector((state) => state.convert.currentUnit)
    const newUnit = useSelector((state) => state.convert.newUnit)
    const result = useSelector((state) => state.convert.result)
    
    
    const handleInputChange = (e) => {
        const { name, value } = e.target

        if(name === 'value') {
            dispatch(setValue(value))
        }
        else if (name === 'currentUnit') {
            dispatch(setCurrentUnit(value))
        }
        else if (name === 'newUnit') {
            dispatch(setNewUnit(value))
        }
    }
    
  

    const handleConversion = () => {
        dispatch(
            setResult(convert(value).from(currentUnit).to(newUnit))
        )
    }


 
    return (
        <div className='content'>
            <br/ >
            <h3>Convert {category} units</h3>
            <section className='form-group'>
                <form>   
                    <label>
                      Enter the value you would like to convert:
                      <input
                       type="number"
                       name='value'
                      value={value}
                      onChange={handleInputChange} />
                    </label>
                    
                    <label>
                      Enter your current unit of measurement:
                      <select
                        name="currentUnit"
                        value={currentUnit}
                        onChange={handleInputChange}
                        >
                        {convert().possibilities(category).map((unit, index) => (
                            <option key={index} value={unit}>
                                {unit}
                            </option>
                        ))}
                      </select>
                    </label>
                    
                    <label>
                    Enter the unit of measurement you'd like to convert to:
                      <select
                      name="newUnit"
                      value={newUnit}
                      onChange={handleInputChange}
                      >
                      {convert().possibilities(category).map((unit, index) => ( 
                            <option key={index} value={unit}>
                                {unit}
                            </option>
                        ))}
                      </select>
                    </label>
                </form>
                <button className='btn' type='submit' onClick={handleConversion}>Convert</button>
                <h2>{value} {currentUnit} equals {result} {newUnit}</h2>
            </section> 
        </div>
     )
}

