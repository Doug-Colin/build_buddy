import { useDispatch, useSelector } from 'react-redux'
import convert from 'convert-units'
import { setCurrentUnit, setNewUnit, setResult, setValue } from '../features/convert/convertSlice'


export default function ConvertForm() {

    const dispatch = useDispatch()

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
        <div>
            <h3>Length Conversion</h3>
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
                      value={newUnit}
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
                <button className='btn' type='submit' onClick={handleConversion}>Convert</button>
                <h2>{value} {currentUnit} equals {result} {newUnit}</h2>
            
            </section> 
        </div>
     )
}

