import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import SearchBarHome from './SearchBarHome'

class SharedLayout extends Component{
  
  getFilters(filters){    
    this.props.carsfilters(filters);
  }

  renderSearchBar(){
    const path=window.location.href.split('/')[3];
    if(path==='home' || path===''){
      return  (
        <div>
          <section className="block-sl">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="banner-item banner-2x no-bg color-inher">
                    <h2 className="f-weight-300">Sri Lankan Sell Vehicle </h2>
                 		
                  </div>
                </div>
              </div>
            </div>
          </section>
          <SearchBarHome filters={this.getFilters.bind(this)}/>
        </div>
      );
    }
  }


  render(){
    return (
      <div id="wrap"  className="color1-inher">
        <Header/>
        {this.renderSearchBar()}
        <div id="wrap-body" className="p-t-lg-45">
                <div className="container">
                  {this.props.children}
                </div>
        </div>
        <Footer/>
      </div>
    );
  }

}
export default SharedLayout;
