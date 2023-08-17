import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Basket from './Basket';
import {turnOffHomefilter} from '../actions';
import { connect } from "react-redux";

class Header extends  Component{
    render(){
        return(
            <header id="wrap-header" className="color-inher">
                <div className="top-header">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 hidden-xs">
                        <p className="f-14">
                        <i className="fa fa-map-marker m-r-lg-5" />
                        <strong>SL Cars</strong> - 103 NAGAHAWATTE ROAD, MAHARAGAMA
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <ul className="pull-right">
                        <li>
                            <a   className="icon-1">
                            <i className="fa fa-user" />
                            <span>My Account</span>
                            </a>
                        </li>
                        <li>
                            <a className="icon-1">
                            <i className="fa fa-cart-plus" />
                            <span>Checkout</span>
                            </a>
                        </li>
                        <li className="cart-icon">
                            <Link to={"/whishlist"}>
                            
                                <i className="fa fa-heart" />
                                <span className="badge">{this.props.whishlistproducts.length}</span>    
                                                                
                            </Link>
                        </li>
                        <Basket/>  
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
    
                <div className="menu-bg">
                <div className="container">
                    <div className="row">
                    <div className="col-md-3 col-lg-3">
                    
                    </div>
                    <div className="col-md-9 col-lg-9">
                        <div className="hotline">
                       </div>
                        <div className="clearfix" />
    
                        <div className="main-menu">
                        <div className="container1">
                            <nav className="navbar navbar-default menu">
                            <div className="container1-fluid">
                                <div className="navbar-header">
                                <button
                                    type="button"
                                    className="navbar-toggle collapsed"
                                    data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1"
                                    aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                </div>
                                <div
                                className="collapse navbar-collapse"
                                id="bs-example-navbar-collapse-1"
                                >
                                <ul className="nav navbar-nav">
                                    <li className="dropdown">                                
                                        <Link to={"/home"} className="dropdown-toggle">
                                        HOME
                                        </Link>
                                    </li>
                                    <li className="dropdown" onClick={()=>this.props.turnOffHomefilter()}> 
                                        <Link to={"/cars"} className="dropdown-toggle">
                                        CARS 
                                        </Link>
                                    </li>
                                    <li className="dropdown">
                                        <Link to={"/products"} className="dropdown-toggle">
                                        PRODUCTS
                                        </Link>
                                    </li>
                                    <li className="dropdown">
                                        <Link to={"/sellacar"} className="dropdown-toggle">
                                        Sell A Car
                                        </Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </nav>
    
      
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </header>
        );
    }
};
function mapStateToProps({ whishlistproducts }) {
    return { whishlistproducts };
  }
  
export default connect(mapStateToProps,{turnOffHomefilter})(Header);

