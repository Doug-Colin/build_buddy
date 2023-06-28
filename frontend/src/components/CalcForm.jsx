
import  {solveTriangle} from 'triangle-completion';
import { useState } from 'react'
import triangleIcon from '../assets/triangleIcon.png'

const initialState = {
  A: null, 
  B: null,
  C: null ,
  alpha: null, 
  beta: null, 
  gamma: null
}

export default function CalcForm() {

    //setup state to mirror properties that need to be passed into solveTriange() from 'triangle-completion' library - docs state that null values will not trigger an error. 
    const [trigState, setTrigState] = useState(initialState)

    const [errorMessage, setErrorMessage] = useState(null) 
    const [solvedTriangle, setSolvedTriangle] = useState(null)

    //update the relevant state property by plugging the name and value attributes of the relevant <input> into our state object as key, and the value 
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setTrigState({
          ...trigState,
          [name] : value
        })
    }
         //Your values would comprise a triangle with the following dimensions:


    //before passing object into fnctn solveTriangle(), from imported library, filter out properties with value of null
    //(triangle-completion package says null values can be passed in without error, but it seems that isn't true)
    const unsolvedTriangle = Object.fromEntries(
      Object.entries({...trigState}).filter(([key, value]) => value !== null)
    );

    //save result to variable, if sucessfull, set result in relevant state, if not, set error in relevant state 
    const handleTriangle = () => {
      try {
        const result = solveTriangle(unsolvedTriangle)
        setSolvedTriangle(result)
        setErrorMessage(null) //if successfull, reset error message 
      } catch (error) {
        if (error) {
          setErrorMessage('Sorry, that seems to be an Invalid Triangle.')
          setSolvedTriangle(null) //if error, reset solved triangle 
        } 
      }
    }

    //reset values to initial state
    const handleReset = () => {
      setTrigState(initialState)
      setSolvedTriangle(null)
      setErrorMessage(null)
    }

    return (
        <div className='content'>
        <section>
            <h2>Triangle Calculator</h2>
            <br/>
            <img src={triangleIcon} alt='Diagram of a triangle showing it contains angles a1, a2, and a3 and sides S1, S2, and S3. angle 1 is between sides s1 and 2, angle 2 is between sides s2 and 3, angle three is between sides s3 and 1.' height='300' width='300'/>
            <br/>
            <br/>
            <ul>Calculate the remaining angles or side lengths of a triangle by entering either:
            <li>the length of two sides and the angle between them</li>
            <li>the length of two angles and the side between them</li>
            <li>the length of all three sides</li>
            </ul>
            <p>You may also enter two sides and the angle not between them, though this may comprise an invalid triangle.</p>
            <br/>
        </section>
            {/* <span>Enter those values to calculate the remaining side lengths and angles.</span> */}
            <section className='form-group'>
            <form>
                    <label>
                      Enter the length of side 1:
                      <input
                       type="number"
                       name='A'
                      //  required={true}
                       onChange={handleInputChange} />
                    </label>                  
                    <label>
                      Enter the length of side 2:
                      <input
                       type="number"
                       name='B'
                       //  required={true}
                       onChange={handleInputChange} />
                    </label>
                    <label>
                      Enter the length of side 3:
                      <input
                       type="number"
                       name='C'
                       //  required={true}
                       onChange={handleInputChange} />
                    </label>
                    <label>
                      Enter angle 1:
                      <input
                       type="number"
                       name='alpha'
                       //  required={true}
                       onChange={handleInputChange} />
                    </label>
                    <label>
                      Enter angle 2:
                      <input
                       type="number"
                       name='beta'
                       //  required={true}
                       onChange={handleInputChange} />
                    </label>
                    <label>
                      Enter angle 3:
                      <input
                       type="number"
                       name='gamma'
                       //  required={true}
                       onChange={handleInputChange} />
                    </label>
            </form>
            </section>
            <section>
              <button className='btn' type='button' onClick={handleTriangle}>Find Remaining Values</button>
              <button className='btn' type='button' onClick={handleReset}>Clear</button>
            </section>
            <section>
            {errorMessage && <p>{errorMessage}</p>}
            {solvedTriangle && (
              <div>
                <span>The values of your triangle are:</span>
                <p>Side S1: {solvedTriangle.A}</p>
                <p>Side S2: {solvedTriangle.B}</p>
                <p>Side S3: {solvedTriangle.C}</p>
                <p>Angle a1: {solvedTriangle.alpha}</p>
                <p>Angle a2: {solvedTriangle.beta}</p>
                <p>Angle a3: {solvedTriangle.gamma}</p>
              </div>
            )}
           <h2></h2>
            </section> 
        </div>
     )
}
