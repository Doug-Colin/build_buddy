import React, { useState } from 'react';

export default function CircleCalc() {
  //state for <input> forms that accept circle calculation values
  const [circleInput, setCircleInput] = useState({
    radius: '',
    diameter: '',
    circumference: '',
    area: '',
  });

  //state for output/calculated values
  const [circleOutput, setCircleOutPut] = useState({
    radius: '',
    diameter: '',
    circumference: '',
    area: '',
  });

  const [showRoundedValues, setShowRoundedValues] = useState(false);

  //Dictionary/Lookup table used to first determine radius value from any input
  const radiusDictionary = {
    radius: (value) => value,
    diameter: (value) => value / 2,
    circumference: (value) => value / (2 * Math.PI),
    area: (value) => Math.sqrt(value / Math.PI),
  };

  //Dictionary/Lookup table to determine remaining non-radius circle values
  const nonRadiusDictionary = {
    diameter: (r) => r * 2,
    circumference: (r) => r * 2 * Math.PI,
    area: (r) => Math.PI * r ** 2,
  };

  //handle input change
  const handleInputChange = (event) => {
    //destructure input, grab name= attribute & value
    const { name, value } = event.target;
    const radius = radiusDictionary[name](value);

    //not necessary for calculation but we need it  prevents eslint 'no-unused-vars' warning
    setCircleInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    //set output vals via nonRadius value lookup/dictionary
    setCircleOutPut({
      radius,
      diameter: nonRadiusDictionary.diameter(radius),
      circumference: nonRadiusDictionary.circumference(radius),
      area: nonRadiusDictionary.area(radius),
    });
  };

  const handleToggleRoundedValues = () => {
    setShowRoundedValues((prevShowRoundedValues) => !prevShowRoundedValues);
  };

  return (
    <div>
      <h1>Circle Calculator</h1>
      <label>
        Radius:
        <input
          type="number"
          name="radius"
          min="0"
          value={circleInput.radius}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Diameter:
        <input
          type="number"
          name="diameter"
          min="0"
          value={circleInput.diameter}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Circumference:
        <input
          type="number"
          name="circumference"
          min="0"
          value={circleInput.circumference}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Area:
        <input
          type="number"
          name="area"
          min="0"
          value={circleInput.area}
          onChange={handleInputChange}
        />
      </label>
      <h2>Results</h2>
      <p>Radius: {showRoundedValues ? Number(circleOutput.radius).toFixed(3) : circleOutput.radius}</p>
      <p>Diameter: {showRoundedValues ? Number(circleOutput.diameter).toFixed(3) : circleOutput.diameter}</p>
      <p>Circumference: {showRoundedValues ? Number(circleOutput.circumference).toFixed(3) : circleOutput.circumference}</p>
      <p>Area: {showRoundedValues ? Number(circleOutput.area).toFixed(3) : circleOutput.area}</p>
      <button onClick={handleToggleRoundedValues}>
        {showRoundedValues ? 'Show Exact Values' : 'Show Rounded Values'}
      </button>
    </div>
  );
}
