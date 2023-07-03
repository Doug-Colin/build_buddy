
import React, { useState } from 'react';

export default function CompoundMiterCalculator() {

  // State variables for input 
  const [compoundInput, setCompoundInput] = useState ({
    slope: null,
    corner: null,
    drop: null,
    projection:null,
  })

  //State variables for output
  const [compoundOutput, setCompoundOutput] = useState({
    miter: null,
    bevel: null,
    slope: null
  }); 
  
// Error handling?    
//   const [error, setError] = useState(null);

//caclulate miter/bevel settings- JS Math object uses radians so input in degrees must be converted 
function calculateMiterBevel(slopeAngle, cornerAngle) {
    let slopeAngleRad = slopeAngle * (Math.PI / 180);
    let cornerAngleRad = cornerAngle * (Math.PI / 180);

    let miterAngleRad = Math.atan(Math.tan(cornerAngleRad / 2) * Math.cos(slopeAngleRad))
    let bevelAngleRad = Math.asin(Math.sin(cornerAngleRad / 2) * Math.sin(slopeAngleRad));

    let miterAngle = (miterAngleRad * (180 / Math.PI)).toFixed(1);
    let bevelAngle = (bevelAngleRad * (180 / Math.PI)).toFixed(1);

    return {miter: miterAngle, bevel: bevelAngle};
  }
  //calculateMiterBevel(52, 90) // returns { miter: '31.6', bevel: '33.9' }. Finally correct!!

  //calculate slope
  function calculateSlope(drop, projection) {
    let slopeRad = Math.atan(drop/projection)
    let slopeDegrees = slopeRad * (180 / Math.PI)
    return slopeDegrees.toFixed(1)
  }

  const handleCompoundInputChange = (event) => {
    const { name, value } = event.target
    setCompoundInput((prevState) => ({
        ...prevState,
        [name]: value //parseFloat(value)?
    }))
    
  }
  
//  const result = calculateMiterBevel(compoundInput.slope, compoundInput.corner)
    const handleSubmit = () => {
        const result = calculateMiterBevel(compoundInput.slope, compoundInput.corner)
        setCompoundOutput((prevState) => ({
            ...prevState,
            miter: result.miter,
            bevel: result.bevel
         }))
    }

  return (
    <div>
        <span> Calculate your saw's settings for a compound miter cut </span>
        <form>
          <div>
            <label htmlFor="slope-angle">Slope Angle:</label>
            <input type="number" id="slope-angle" name="slope" value={compoundInput.slope} onChange={handleCompoundInputChange} step="0.1" />
          </div>
          <div>
            <label htmlFor="corner-angle">Corner Angle (degrees):</label>
            <input type="number" id="corner-angle" name="corner" value={compoundInput.corner} onChange={handleCompoundInputChange} step="0.1" />
          </div>
          <div>
            <label htmlFor="drop">Drop:</label>
            <input type="number" id="drop" name='drop' value={compoundInput.drop || ''} onChange={handleCompoundInputChange} step="0.01" />
          </div>
          <div>
            <label htmlFor="projection">Projection (inches):</label>
            <input type="number" id="projection" name='projection' value={compoundInput.projection || ''} onChange={handleCompoundInputChange} step="0.1" />
          </div>
        </form>          
          <div>
            <button onClick={handleSubmit}>Calculate</button>
            <label htmlFor="miter-setting">Miter Setting (degrees):</label>
            <output id="miter-setting" name='miter' value={compoundOutput.miter}>{compoundOutput.miter}</output>
          </div>
          <div>
            <label htmlFor="bevel-setting">Bevel Setting (degrees):</label>
            <output id="bevel-setting" name='bevel' value={compoundOutput.bevel}> {compoundOutput.bevel}</output>
          </div>
    </div>
  )
}