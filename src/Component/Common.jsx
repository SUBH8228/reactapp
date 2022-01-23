import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Common extends Component {
    constructor(props){
        super(props);
        this.state = {
            page_title:this.props.page_title,
            page_desc:this.props.page_desc
        }
    }
    render() {
        return (
            <>
            <section className='home-content-section'>
                <div className="container">
                    <div className="row">
                        <div className='col-md-12 welcome-div'>
                            <h1 className='divHeading'>{this.props.page_title}</h1>
                            <div className='content'>{this.props.page_desc}</div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export class ProductCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            pid:this.props.pid,
            imgsrc:this.props.imgsrc,
            title:this.props.title,
            category:this.props.category,
            description:this.props.description
        }
    }
    render() {
        return (
            <>
            <div className='mainDiv'>
                <div className='imgDiv'>
                    <img src={this.props.imgsrc} alt={this.props.title} />
                </div>
                <div className='divDesc'>
                    <div className='divSubtitle'>{this.props.category}</div>
                    <div className='divTitle'>{this.props.title}</div>
                    <div className='divContent'>
                        {this.props.description.substring(0,64)}...
                    </div>
                    <div className='divButton'>
                        <NavLink to={"/products/"+this.props.pid} className='button'>View Details</NavLink>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
