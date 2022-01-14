import React from 'react';
import { useState } from 'react';
import AddCountry from './AddCountry';
//import { ReactDOM } from 'react';

import "../App.css";
import Navbar from "react-bootstrap/Navbar";
import { Button, Modal } from 'react-bootstrap';
//import { Wave } from 'react-animated-text';
//import { Typograpy, AppBar, CssBaseline, Toolbar } from "@mui/material";


function Header() {

        //set usestate for modal
        const [showAddModel, setShowAddModel] = useState(false);
        const handleCloseAddModel = () => setShowAddModel(false);
  
        //click add
        const handelAdd = ()=> {
                setShowAddModel(true);
        };

        //animated title
//        const showTitle = () => {
                //setShowTitle(true);
//        <Wave>Ecammmmmmmm</Wave>
//        };

//      const { Component, Children, PropTypes } = React

//              class SplitText extends Component {
//            render(){
//                return(
//              <span aria-label={this.props.copy} role={this.props.role}>
//                       {this.props.copy.split("").map(function(char, index){
//                        let style = {"animation-delay": (0.5 + index / 10) + "s"}
//                        return <span
//                       aria-hidden="true"
//                       key={index}
//                        style={style}>
//                       {char}
//                        </span>;
 //                       })}
 //                       </span>
 //               );
 //               }
 //               }

//             class Layout extends Component {
//              render() {
//              return(
//              <h1><SplitText copy="Country Details" role="heading" /></h1>
//              );
//                }
//              }

       


        return (
            <div>
                   
                    
                  <Navbar bg="" style={{ marginBottom: 50 }}>
                        <div className="container">
                                {/*Animated Title*/}
                                {/*<Wave.Wave1
                                        text="LOADING DATA"
                                        effect="stretch"
                                        effectChange =''
                                />*/}
                               
                                <h1 style={{ color: "#ffdd1f" , textAlign: "left"}}>
                                        Country Details ..........................................................................................
                                </h1>
                                
                                
                                <Navbar.Brand href="#home">
                                        <Button 
                                        variant="outline-warning"
                                        onClick={handelAdd}
                                        >
                                        Add Country
                                        </Button>
                                
                                </Navbar.Brand>

                                 {/*Add Model*/}
                                <Modal show={showAddModel} onHide={handleCloseAddModel}>
                                <Modal.Header closeButton>
                                        <Modal.Title>Add Country</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body id='modelAdd'>
                                        <AddCountry />
                                        </Modal.Body>
                                        <Modal.Footer>
                                        </Modal.Footer>
                                </Modal>
                                
                        </div>
                   </Navbar>
            </div>
        )
    
}
//ReactDOM.render(<Layout />, document.getElementById('app'));
export default Header
