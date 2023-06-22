// //-------------- This code is the functioning version of the convert form without Redux -------------

// import React, { useState } from 'react'
// import convert from 'convert-units'
// //Add function later to convertSlice for POST request to save converted value to note, and dispatch function here.
// //import {createConversionNote} from '../features/convert/convertSlice'

// export default function ConvertForm() {
//     //add the state for this form
//     const [convertState, setConvertState] = useState({
//         value: 0,
//         currentUnit: 'cm',
//         newUnit: 'in',
//         result: 0,
//       })

//       // const handleSubmit

//     //fucntion to handle the input change of the value and 'unit type' select forms, saving them to state. 
//     const handleInputChange = (e) => {
//         const { name, value }= e.target;
//         setConvertState((prevState) => ({
//           ...prevState,
//           [name]: value,
//         }))
//         // console.log(convertState)
//       }
    
//       //function to handle the conversion by taking the state values and plugging them into a convert-units function 
//       const handleConversion = () => {
//         setConvertState((prevState) => ({
//             ...prevState,
//             result: convert(prevState.value).from(prevState.currentUnit).to(prevState.newUnit)
//           }))
//       }
    
//     return (
//         <div>
//             <h3>Length Conversion</h3>
//             <section className='form-group'>
//             <form>   
//                     <label>
//                       Enter the value you would like to convert:
//                       <input
//                        type="number"
//                        name='value'
//                       value={convertState.value}
//                       onChange={handleInputChange} />
//                     </label>
                    
//                     <label>
//                       Enter your current unit of measurement:
//                       <select
//                         name="currentUnit"
//                         value={convertState.currentUnit}
//                         onChange={handleInputChange}
//                         >
//                         {convert().possibilities("length").map((unit, index) => (
//                             <option key={index} value={unit}>
//                                 {unit}
//                             </option>
//                         ))}
//                       </select>
//                     </label>
                    
//                     <label>
//                     Enter the unit of measurement you'd like to convert to:
//                       <select
//                       name="newUnit"
//                       value={convertState.newUnit}
//                       onChange={handleInputChange}
//                       >
//                       {convert().possibilities("length").map((unit, index) => (
//                             <option key={index} value={unit}>
//                                 {unit}
//                             </option>
//                         ))}
//                       </select>
//                     </label>
                    

//             </form>
//                 <button className='btn' type='submit' onClick={handleConversion}>Convert</button>
//                 <h2>{convertState.value} {convertState.currentUnit} equals {convertState.result} {convertState.newUnit}</h2>
            
//             </section> 
//         </div>
//  )
// }

import React  from 'react'
import ConvertForm from '../components/ConvertForm'


export default function Convert() {
  return (
    <ConvertForm />
  )
}