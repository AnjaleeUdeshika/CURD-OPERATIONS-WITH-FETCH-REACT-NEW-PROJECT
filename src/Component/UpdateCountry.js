import React from 'react';
import { useState , useEffect } from 'react';
import { Button, Form } from "react-bootstrap";
//import { v4 as uuid } from "uuid";


import "../App.css";

function UpdateCountry({ children }){

    //set usestate for inputs
    const [ id , setId ] = useState(children.id);
    const [ countryName , setCountryName ] = useState(children.countryName);
    const [ currency , setCurrency ] = useState(children.currency);
    const [ population , setPopulation ] = useState(children.population);
    const [ flagUrl , setFlagUrl ] = useState(children.flagUrl);
    const [ gdp , setGdp ] = useState(children.gdp);


   console.log(children.countryName)

   //click update
   const [showModel, setShowModel] = useState(false);

   //click cancel
   const handleClose = () => setShowModel(false);

    //click submit
    const handleSubmit = (e) => {
        //e.preventDefault();
       // const id = uuid();

        //bind data to the item
        const item = {id, countryName, currency, population, flagUrl, gdp};
        console.log(item);

         //fetch data
         fetch("http://localhost:3006/item/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
          }).then(() => {
            console.log(item);
          });
        
    };

        return (
            <div>
                {/*<h1>Update Country Details</h1>*/}

                {/*Update Form*/}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formCountryId"  >
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                            type="text"
                            value={id}
                            readOnly="redOnly"
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Form.Group>

                <Form.Group className="mb-3" controlId="formCountryName">
                    <Form.Label>Country Name</Form.Label>
                    <Form.Control
                    type="text"
                    value={countryName}
                    required="required"
                    onChange={(e) => setCountryName(e.target.value)}
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCurrency">
                    <Form.Label>Currency</Form.Label>
                    <Form.Control
                        type="text"
                        value={currency}
                        required="required"
                        onChange={(e) => setCurrency(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPopulation">
                    <Form.Label>Population</Form.Label>
                    <Form.Control
                        type="text"
                        value={population}
                        required="required"
                        onChange={(e) => setPopulation(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFlagUri">
                <Form.Label>Flag URL</Form.Label>
                <Form.Control
                    type="text"
                    value={flagUrl}
                    onChange={(e) => setFlagUrl(e.target.value)}
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGdp">
                    <Form.Label>GDP</Form.Label>
                    <Form.Control
                        type="text"
                        value={gdp}
                        required="required"
                        onChange={(e) => setGdp(e.target.value)}
                    />
                </Form.Group>

                <Button 
                    variant="success"
                    type="submit" 
                    style={{ width: "100%" }}
                    onClick={handleSubmit}>
                     Save
                </Button>

                <Button 
                    variant="warning"
                    type="submit" 
                    style={{ width: "100%" }}
                    onClick={handleClose}>
                     Cancel
                </Button>
                </Form>
                
            </div>
        );
    
}

export default UpdateCountry;
