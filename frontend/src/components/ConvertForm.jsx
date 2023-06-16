import {useState} from 'react'
import convert from 'convert-units'
//add function later to convertSlice for POST request to save converted value to note, and dispatch function here.
//import {createConversionNote} from '../features/convert/convertSlice'

export default function ConvertForm() {
    //add the state for this form
    const [convertValue, setConvertValue] = useState({
        value: '',
        currentUnit: '',
        newUnit: '',
        result: '',
      })


    //fucntion to handle the input change of the value and 'unit type' select forms, saving them to state. 
    const handleInputChange = (event) => {
        const { name, value }= event.target;
        setConvertValue((prevState) => ({
          ...prevState,
          [name]: value,
        }))
      }
    
      //function to handle the conversion by taking the state values and plugging them into a convert-units function 
      const handleConversion = () => {
        setConvertValue((prevState) => ({
            ...prevState,
            result: convert(prevState.value).from(prevState.currentUnit).to(prevState.newUnit)
          }))
      }
    
    return (
        <div>
            <h3>Length Conversion</h3>
            <section className='form'>
            <form>
                <div className='form-group'>
                    <label htmlFor="value">Enter the value you would like to convert:</label>
                    <input 
                        type="number"
                        name="value"
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="currentUnit">Select the unit you would like to convert from:</label>
                    <select name="currentUnit" onChange={handleInputChange}>   
                        {convert().possibilities("length").map((unit, index) => (
                            <option key={index} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="newUnit">Select the unit you would like to convert from:</label>
                    <select name="newUnit" onChange={handleInputChange}>   
                        {convert().possibilities("length").map((unit, index) => (
                            <option key={index} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                </div>
                <button onClick={handleConversion}>Convert</button>
                <h2>`Your result is ${convertValue.result}</h2>
            </form>
            </section>
        </div>
 )
}
