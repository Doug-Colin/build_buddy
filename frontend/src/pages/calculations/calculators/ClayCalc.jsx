import { useState } from 'react';

//---------- Once 'notes' functionality is implemented, implement Redux Slice & Service & use async Thunk to 'add converted units to project notes' function (in addition to the extraReducers for async error handling). State is local here, but just create an action in the Slice file to grab the local state here as a param and dispatch it to the redux store.  

  /*Psuedo code: Ceramics Calculators 
   

    Steps in order to do it:
    -write initial copy (Dry dims, Your Volume is:, Shrink Rate, Wet Dims)
    -declare all relevant states & stateSetters via useState() (dry & wetDims, shape, shrinkRate)
    -write functions to handleShapeChange, handleDry & WetDims change, handleSubmit
    -in handleSubmit, declare variables for each dimension and assign them the formula for determining each wet dimension, using the properties of dryDims state. For ex. wetHeight= dryDims.height / (1 - shrinkRate). Then use setWetDims() to pass each value into that state
    -render/return forms and tags:
        -create select box/toggle/two buttons for shape, assign value and onChange attributes
        -if round shape is selected there, display diameter and height dryDims.properties only ({shape === round && <inputs>} or ({round===true && <inputs>}))
        -if rect shape selected, use similar logic to display 3 (lg x wd x ht) inputs
        -create select or input form for shrinkrate
        -display wet dimensions from state wetDims, again using logic to render different things depending on shape selection. 
    */


export default function ClayCalc() {
  const [shape, setShape] = useState({
    round: true,
    rect: false
  })

  const [dryDims, setDryDims] = useState({
    diameter: 0,
    height: 0,
    length: 0,
    width: 0
  });


  const [wetDims, setWetDims] = useState({
    diameter: 0,
    height: 0,
    length: 0,
    width: 0
  });

  const [shrinkRate, setShrinkRate] = useState(5)

  const handleShapeChange = (event) => {
    event.preventDefault();
    event.target.name ==='round' ? setShape({ round: true, rect: false}) : setShape({ round: false, rect: true})
  }

  const handleDryDimsChange = (event) => {
    const { name, value } = event.target
    setDryDims((prevDims) => ({
        ...prevDims,
        [name]: value
    }))
  }

  const handleShrinkRateChange = (event) => {
    setShrinkRate(event.target.value);
  };

  const options = [];
  for (let i = 6; i <= 18; i += .5) {
    options.push(
        <option key={i} value={i}>{i}%</option>
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const wetDiameter = ((dryDims.diameter / (100 - shrinkRate))*100).toFixed(2)
    const wetHeight = ((dryDims.height / (100 - shrinkRate))*100).toFixed(2)
    const wetWidth = ((dryDims.width / (100 - shrinkRate))*100).toFixed(2)
    const wetLength = ((dryDims.length / (100 - shrinkRate))*100).toFixed(2)

    setWetDims({
        diameter: wetDiameter,
        height: wetHeight,
        length: wetLength,
        width: wetWidth
    })
  }
    
  //ERROR HANDLING & RESET HANDLING?
  //const [errorMessage, setErrorMessage] = useState(null);
  //const handleReset = () => {
  //};


  return (
    <div className="content">
      <section>
        <h2>Clay Shrinkage & Wet Dimensions</h2>
        <h3>
          Calculate the wet dimensions of your work so you can ensure it shrinks
          to the desired dimensions in the firing process.
        </h3>
        <span>
          Just select the shape of your piece, enter its final dimensions, and
          select the shrink rate of your clay.
        </span>
      </section>
      <section className="form-group">
        <div className="shape-selector">
          <button
            name="round"
            onClick={handleShapeChange}
            className={shape.round ? 'selected' : ''}
          >
            Round
          </button>
          <button
            name="rect"
            onClick={handleShapeChange}
            className={shape.rect ? 'selected' : ''}
          >
            Rectangular
          </button>
        </div>
        {shape.round && (
          <div className="input-group">
            <label htmlFor="diameter">Diameter:</label>
            <input
              type="number"
              id="diameter"
              name="diameter"
              onChange={handleDryDimsChange}
            />
            <label htmlFor="height">Height:</label>
            <input
              type="number"
              id="height"
              name="height"
              onChange={handleDryDimsChange}
            />
          </div>
        )}
        {shape.rect && (
          <div className="input-group">
            <label htmlFor="length">Length:</label>
            <input
              type="number"
              id="length"
              name="length"
              onChange={handleDryDimsChange}
            />
            <label htmlFor="width">Width:</label>
            <input
              type="number"
              id="width"
              name="width"
              onChange={handleDryDimsChange}
            />
            <label htmlFor="height">Height:</label>
            <input
              type="number"
              id="height"
              name="height"
              onChange={handleDryDimsChange}
            />
          </div>
        )}
        <div className="input-group">
          <label htmlFor="shrinkRate">Shrink Rate:</label>
          <select
            name="shrinkRate"
            onChange={handleShrinkRateChange}
            >{options}
          </select>
          </div>
        <button onClick={handleSubmit}>Calculate</button>
      </section>
      <section>
        <h3>Wet Dimensions</h3>
        {shape.round && (
          <div className="result-group">
            <div>Diameter: {wetDims.diameter}</div>
            <div>Height: {wetDims.height}</div>
          </div>
        )}
        {shape.rect && (
          <div className="result-group">
            <div>Length: {wetDims.length}</div>
            <div>Width: {wetDims.width}</div>
            <div>Height: {wetDims.height}</div>
          </div>
        )}
      </section>
    </div>
  );
}