// import React, { useState } from 'react'
// // import { useEffect } from 'react'
// // import {useNavigate } from 'react-router-dom' //to redirect the user
// // import { useSelector, useDispatch } from 'react-redux' //to grab the user from the state to check if logged in or not
// // import TaskForm from '../components/TaskForm'
// // import TaskItem from '../components/TaskItem'
// // import Spinner  from '../components/Spinner'
// // import { getTasks } from '../features/tasks/taskSlice'
// // import { reset } from '../features/auth/authSlice'

// // import configureMeasurements from 'convert-units';
// // import allMeasures from 'convert-units/definitions/all';
// import convert from 'convert-units'

// export default function CalculateConvert() {
//   //create state object to hold user's input values
//   const [inputValues, setInputValues] = useState({
//     value: '',
//     fromUnit: '',
//     toUnit: '',
//     result: '',
//   })

//   const handleInputChange = (event) => {
//     const { name, value }= event.target;
//     setInputValues((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }))
//   }

//   const handleConversion = () => {
//     // const { value, fromUnit, toUnit } = inputValues;
//     // const result = convert(value).from(fromUnit).to(toUnit);
//     return result
//   }

//   const result = convert(1).from('l').to('ml');
//   console.log(convert().possibilities('length'))
//   return (
//     <div>
//     <h1>Demonstration: result is {result}</h1>
    
//       <h2>What type of unit conversion do you need?</h2>
//       <button className='btn'>Volume</button>
//       <button className='btn'>Length</button>
//       <button className='btn'>Temperature</button>
//       <h3>Volume Conversion</h3>
//       <form>
//         <label htmlFor="value">Input:</label>
//         <input type="number" name="value" onChange={handleInputChange} />
//         <label htmlFor="fromUnit">Convert From:</label>
//         <select name="fromUnit" onChange={handleInputChange}>   
//           <option value="">Select Unit</option>
//           <option value="l">Liters</option>
//           <option value="gal">Gallons</option>
//           <option value="ml">Milliliters</option>
//         </select>
//         <label htmlFor="toUnit">To:</label>
//         <select name="toUnit" onChange={handleInputChange}>
//           <option value="">Select Unit</option>
//           <option value="l">Liters</option>
//           <option value="gal">Gallons</option>
//           <option value="ml">Milliliters</option>
//         </select>
//         <button onClick={handleConversion}>Convert</button>
//       </form>
//       <button>Save To Project Notes</button>
//       <form>
//         <label htmlFor="noteText">Add Text To Your Note:</label>
//         <input type="text" name="noteText" />
//         <button>Save</button>
//       </form>
//     </div>
//   );

// }

import React, { useState } from 'react'
import convert from 'convert-units'
//add function later to convertSlice for POST request to save converted value to note, and dispatch function here.
//import {createConversionNote} from '../features/convert/convertSlice'

export default function ConvertForm() {
    //add the state for this form
    const [convertState, setConvertState] = useState({
        value: 0,
        currentUnit: '',
        newUnit: '',
        result: 0,
      })

      // const handleSubmit

    //fucntion to handle the input change of the value and 'unit type' select forms, saving them to state. 
    const handleInputChange = (e) => {
        const { name, value }= e.target;
        setConvertState((prevState) => ({
          ...prevState,
          [name]: value,
        }))
        // console.log(convertState)
      }
    
      //function to handle the conversion by taking the state values and plugging them into a convert-units function 
      const handleConversion = () => {
        setConvertState((prevState) => ({
            ...prevState,
            result: convert(prevState.value).from(prevState.currentUnit).to(prevState.newUnit)
          }))
      }
    
    return (
        <div>
            <h3>Length Conversion</h3>
            <section className='form-group'>
            <form>   
                    <label>
                      Enter the value you would like to convert:
                      <input
                       type="number"
                       name='value'
                      value={convertState.value}
                      onChange={handleInputChange} />
                    </label>
                    
                    <label>
                      Enter your current unit of measurement:
                      <select
                        name="currentUnit"
                        value={convertState.currentUnit}
                        onChange={handleInputChange}
                        >
                        {convert().possibilities("length").map((unit, index) => (
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
                      value={convertState.newUnit}
                      onChange={handleInputChange}
                      >
                      {convert().possibilities("length").map((unit, index) => (
                            <option key={index} value={unit}>
                                {unit}
                            </option>
                        ))}
                      </select>
                    </label>
                    

            </form>
                <button className='convert-btn' type='submit' onClick={handleConversion}>Convert</button>
                <h2>{convertState.value} {convertState.currentUnit} equals {convertState.result} {convertState.newUnit}</h2>
            
            </section> 
        </div>
 )
}


{/* <div className='form-group'>
<label htmlFor="value">Enter the value you would like to convert:</label>
<input
    id = "value"
    type="number"
    name="value"
    onChange={handleInputChange}
/>
</div>
<div className='form-group'>
<label htmlFor="currentUnit">Select the unit you would like to convert from:</label>
<select 
  id="currentUnit"
  type="text"
  name="currentUnit"
  onChange={handleInputChange}>   
  {convert().possibilities("length").map((unit, index) => (
        <option key={index} value={unit}>
            {unit}
        </option>
    ))}
</select> */}