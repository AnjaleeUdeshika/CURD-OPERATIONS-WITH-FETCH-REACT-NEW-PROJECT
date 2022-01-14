import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import { Button ,Form } from "react-bootstrap";

import "../App.css";

function AddCountry() {

  const [ countryName, setCountryName ] = useState("");
  const [ currency, setCurrency ] = useState("");
  const [ population, setPopulation ] = useState("");
  const [ flagUrl, setFlagUrl ] = useState("");
  const [ gdp, setGdp ] = useState("");


  const handleSubmit = (e) => {

    //e.preventDefault();

    //auto generated id
    const id = uuid();


    //bind the values to the item
    const item = { id, countryName, currency, population, flagUrl, gdp };

    console.log(item);

  //fetch data
  fetch("http://localhost:3006/item", {
      method: "POST",
      headers: {"Content-Type": 'application/json' },
      body: JSON.stringify(item),

  }).then(function (response) {
    console.log(response);
    return response.json();
  });

  };

return (
    <div className="AddCountry">

      {/*<h1>Add Country Details</h1>*/}

      {/*Add form*/}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formCountryName">
          <Form.Label>Country Name</Form.Label>
          <Form.Control
            type="text"
            value={countryName}
            placeholder="Enter Country Name"
            required="required"
            onChange={(e) => setCountryName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCurrency">
          <Form.Label>Currency</Form.Label>
          <Form.Control
            type="text"
            value={currency}
            placeholder="Enter Country Currency"
            required="required"
            onChange={(e) => setCurrency(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPopulation">
          <Form.Label>Population</Form.Label>
          <Form.Control
            type="text"
            value={population}
            placeholder="Enter Country Population"
            required="required"
            onChange={(e) => setPopulation(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFlagUrl">
          <Form.Label>Flag URI</Form.Label>
          <Form.Control
            type="text"
            value={flagUrl}
            placeholder="Enter Country Flag URL"
            onChange={(e) => setFlagUrl(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGdp">
          <Form.Label>GDP</Form.Label>
          <Form.Control
            type="text"
            value={gdp}
            placeholder="Enter Country GDP"
            required="required"
            onChange={(e) => setGdp(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="submit" style={{ width: "100%" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddCountry;
