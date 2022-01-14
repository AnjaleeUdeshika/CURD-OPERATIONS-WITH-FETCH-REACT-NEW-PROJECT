import React, { useState, useEffect} from 'react';
import { Button, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";


import "../App.css";
//import AddCountry from './AddCountry';
import UpdateCountry from './UpdateCountry';

function ContryDetails(){

    //fetch api
    const [data, setData] = useState([]);

    //show model useState
    //const [show, setShow] = useState(false);

    //show add model
   // const [showAddModel, setShowAddModel] = useState(false);
    //const handleCloseAddModel = () => setShowAddModel(false);

    //click add
   // const handelAdd = ()=> {
    //    setShowAddModel(true);
   // };

    /*const handleAdd = () => {

        //show Add form
        var v = document.getElementById("show").style.display;
        if (v == "none") {
          document.getElementById("show").style.display = "inline";
        } else {
          document.getElementById("show").style.display = "none";
        }
    };*/

    //set usestate for update
    const [colunmData, setColunmData ] = useState([]);
    const [showModel, setShowModel] = useState(false);

    //click update
    const handleClose = () => setShowModel(false);
    const handleUpdate = ([colunmData]) => () => {
        setShowModel(true);
        setColunmData(colunmData);
        //console.log(colunmData);

        //show update field
        {/*var v = document.getElementById("show1").style.display;
        if (v == "none") {
          document.getElementById("show1").style.display = "inline";
        } else {
          document.getElementById("show1").style.display = "none";
        }*/}
    };


    //const [ showAddForm, setShowAddForm ] = useState('none');

    // DELETE request using fetch with error handling
    const handleDelete = (id) => () => {

        console.log(id);

    //fetch data  
    fetch('http://localhost:3006/item/' + id, { method: 'DELETE' })
        .then(async response => {
            const isJson = response.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            console.log(response);
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            console.log('Delete successful');
        })
        .catch(error => {
            console.log('There was an error!');
        }).then(
            function () {
              window.location.reload();
            }
          );

    };
    


     //get data from json object
    const getData = () => {
        fetch("http://localhost:3006/item", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        })
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
            setData(myJson);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return(
        
        <div className="container">
            
            <Table className="tableCountry">
                <thead>
                    <tr  style={ {color:"white"}}>
                        <th scope="col" data-field="countryName">Country Name</th>
                        <th scope="col" data-field="currency">Currency</th>
                        <th scope="col" data-field="population">Population</th>
                        <th scope="col" data-field="flag">Flag</th>
                        <th scope="col" data-field="flagUrl">Flag Url</th>
                        <th scope="col" data-field="gdp">GDP</th>
                        <th scope="col" data-field="actions"></th>
                        <th scope="col" data-field="actions"></th>
                    </tr>
                </thead>
                
                <tbody style={ {color:"white"}} >
                    {data &&
                        data.length > 0 &&
                        data.map((item) => (
                        <tr key={item.id}>
                            <td>{ item.countryName }</td>
                            <td>{ item.currency }</td>
                            <td>{ item.population }</td>
                            
                            <td>
                                <img 
                                style={ { width: 100, height: 50}}
                                src={ item.flagUrl } 
                                alt='Flag' />
                            </td>
                            <td>
                            <a href={ item.flagUrl }>
                                Click here for visit Flag
                            </a>
                            </td>
                            <td>{ item.gdp }</td>
                            <td>
                            <Button 
                                type="submit" 
                                variant="outline-success"
                                onClick={handleUpdate([item])}
                                >
                                    Update
                            </Button>
                            </td>
                            <td>
                            <Button 
                                type="submit" 
                                variant="outline-danger"
                                onClick={ handleDelete(item.id) } 
                                >
                                    Delete
                            </Button>
                            </td>
                            
                        </tr>
                        ))}
                </tbody>
            </Table>

        {/* add button 
        <div>
                <Button onClick={handelAdd}>Add Country</Button>
            </div>
        */}

        
          {/*Add Model
       <Modal show={showAddModel} onHide={handleCloseAddModel}>
       <Modal.Header closeButton>
          <Modal.Title>Add Country</Modal.Title>
        </Modal.Header>
        <Modal.Body id='modelAdd'>
          <AddCountry />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>*/}

      {/*Update Model */}
       <Modal show={showModel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Country Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateCountry>{colunmData}</UpdateCountry>
        </Modal.Body>
      </Modal>


         {/*SHow Update form
            <div id="show1" style={{ display: "none" }}>
                <UpdateCountry>{ colunmData }</UpdateCountry>
            </div>
               */}


        </div>




    );

}
export default ContryDetails;