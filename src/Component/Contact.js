import React, { Component } from 'react'
import {Form,Container,Row,Col} from 'react-bootstrap';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default class Contact extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            email:'',
            mobile:'',
            city:'',
            state:'',
            pincode:'',
            address:'',
            subject:'',
            message:'',
            nameErr:null,
            emailErr:null,
            mobileErr:null,
            cityErr:null,
            stateErr:null,
            pincodeErr:null,
            addressErr:null,
            subjectErr:null,
            messageErr:null,
            submitMsg:null
        }
    }
    is_valid(){
        let error = true;
        if(this.state.name==null || this.state.name===''){
            this.setState({
                nameErr:'Invalid name'
            });
            error = false;
        }
        if(this.state.mobile!=null || this.state.mobile!==''){
            if(isNaN(this.state.mobile)){
                this.setState({
                    mobileErr:'Invalid mobile'
                });
                error = false;
            }else if(this.state.mobile.length === 10){
                this.setState({
                    mobileErr:''
                });
            }else{
                this.setState({
                    mobileErr:'Invalid mobile'
                });
                error = false;
            }
        }else{
            this.setState({
                mobileErr:''
            });
        }
        if(this.state.pincode!=null || this.state.pincode!==''){
            if(isNaN(this.state.pincode)){
                this.setState({
                    pincodeErr:'Invalid pincode'
                });
                error = false;
            }else if(this.state.pincode.length === 6){
                this.setState({
                    pincodeErr:''
                });
            }else{
                this.setState({
                    pincodeErr:'Invalid pincode'
                });
                error = false;
            }
        }else{
            this.setState({
                pincodeErr:''
            });
        }
        if(this.state.email!=null){
            if(!this.state.email.includes('@')){
                this.setState({
                    emailErr:'Invalid email'
                });
                error = false;
            }else if(this.state.email.lastIndexOf('.') !== (this.state.email.length-3) && this.state.email.lastIndexOf('.') !== (this.state.email.length-4) && this.state.email.lastIndexOf('.') !== (this.state.email.length-5)){
                this.setState({
                    emailErr:'Invalid email'
                });
                error = false;
            }else{
                this.setState({
                    emailErr:''
                });
            }
        }else{
            this.setState({
                emailErr:''
            });
        }
        if(this.state.city==null || this.state.city===''){
            this.setState({
                cityErr:'Invalid city'
            });
            error = false;
        }
        if(this.state.state==null || this.state.state===''){
            this.setState({
                stateErr:'Invalid state'
            });
            error = false;
        }
        if(this.state.address==null || this.state.address===''){
            this.setState({
                addressErr:'Invalid address'
            });
            error = false;
        }
        if(this.state.subject==null || this.state.subject===''){
            this.setState({
                subjectErr:'Invalid subject'
            });
            error = false;
        }
        if(this.state.message==null || this.state.message===''){
            this.setState({
                messageErr:'Invalid message'
            });
            error = false;
        }
        
        return error;
    }
    submit(){
        // const Data = () =>{
        //     return(
        //         <>
        //         <table className="table table-bordered table-striped">
        //             <thead></thead>
        //             <tbody>
        //                 <tr>
        //                     <th>Name</th>
        //                     <td>{this.state.name}</td>
        //                     <th>Email</th>
        //                     <td>{this.state.email}</td>
        //                 </tr>
        //                 <tr>
        //                     <th>Mobile</th>
        //                     <td>{this.state.mobile}</td>
        //                     <th>Pincode</th>
        //                     <td>{this.state.pincode}</td>
        //                 </tr>
        //                 <tr>
        //                     <th>City</th>
        //                     <td>{this.state.city}</td>
        //                     <th>State</th>
        //                     <td>{this.state.state}</td>
        //                 </tr>                        
        //                 <tr>
        //                     <th>Address</th>
        //                     <td>{this.state.address}</td>
        //                     <th>Subject</th>
        //                     <td>{this.state.subject}</td>
        //                 </tr>                        
        //                 <tr>
        //                     <th colspan="2">Message</th>
        //                     <td colspan="2">{this.state.message}</td>
        //                 </tr>
        //             </tbody>
        //             <tfoot></tfoot>
        //         </table>
        //         </>
        //     )
        // }
        if(this.is_valid()){
            this.setState({                
                //submitMsg:<Data />
                submitMsg:"Thank You !!! Your Enquiry has been submitted successfully."
            });
        }
    }
    render() {
        return (
            <>
               <section className="contactSection">
                    <Container>
                        <h1 className='divHeading'>Contact Us</h1>
                        <Row>
                            <Col md={12} className="text-center text-danger m-3">
                                <span>{this.state.submitMsg}</span>
                            </Col>
                            <Col md={4}>
                                <div className="infoDiv" key={1}>
                                    <div className="infoIcon">
                                        <CallIcon />
                                    </div>
                                    <div className="infoContent">
                                        <a href="tel:112345212">+1 112-345-212</a>
                                    </div>
                                </div>
                                <div className="infoDiv" key={2}>
                                    <div className="infoIcon">
                                        <MailOutlineIcon />
                                    </div>
                                    <div className="infoContent">
                                        <a href="mailto:decoxta@test.com">decoxta@test.com</a>
                                    </div>
                                </div>
                                <div className="infoDiv" key={3}>
                                    <div className="infoIcon">
                                        <ContactMailIcon />
                                    </div>
                                    <div className="infoContent">
                                        Sent Peterson Road, Washington, USA.
                                    </div>
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className='contactDiv'>
                                    <Row>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Control size="lg" type="text" name="name" value={this.state.name} placeholder="Name" onChange={(e)=>this.setState({name:e.target.value})} />
                                                <label className='text-danger'>{this.state.nameErr}</label>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Control size="lg" type="email" name="email" value={this.state.email} placeholder="Email" onChange={(e)=>this.setState({email:e.target.value})} />
                                                <label className='text-danger'>{this.state.emailErr}</label>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Control size="lg" type="text" name="mobile" value={this.state.mobile} placeholder="Mobile" onChange={(e)=>this.setState({mobile:e.target.value})} />
                                                <label className='text-danger'>{this.state.mobileErr}</label>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Control size="lg" type="text" name="city" value={this.state.city} placeholder="City" onChange={(e)=>this.setState({city:e.target.value})} />
                                                <label className='text-danger'>{this.state.cityErr}</label>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Control size="lg" type="text" name="state" value={this.state.state} placeholder="State" onChange={(e)=>this.setState({state:e.target.value})} />
                                                <label className='text-danger'>{this.state.stateErr}</label>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Control size="lg" type="text" name="pincode" value={this.state.pincode} placeholder="Pincode" onChange={(e)=>this.setState({pincode:e.target.value})} />
                                                <label className='text-danger'>{this.state.pincodeErr}</label>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Control size="lg" type="text" name="address" value={this.state.address} placeholder="Address" onChange={(e)=>this.setState({address:e.target.value})} />
                                                <label className='text-danger'>{this.state.addressErr}</label>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Control size="lg" type="text" name="subject" value={this.state.subject} placeholder="Subject" onChange={(e)=>this.setState({subject:e.target.value})} />
                                                <label className='text-danger'>{this.state.subjectErr}</label>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Control size="lg" type="textarea" name="message" value={this.state.message} placeholder="Message" onChange={(e)=>this.setState({message:e.target.value})} />
                                                <label className='text-danger'>{this.state.messageErr}</label>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <button className="button" onClick={()=>this.submit()}> Submit </button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
               </section>
            </>
        )
    }
}
