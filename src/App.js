import React, { Component } from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import Boxes from "./components/Boxes";
import Data from "./Data";

class App extends Component {
  render() {
    const boxes = Data.map(place=>(
      <Boxes
         key={place.id}
         title={place.title}
         locat={place.location}
         Googlemap={place. googleMapsUrl}
         sdate={place.startDate}
         edate={place.endDate}
         description={place.description}
         image={place.imageUrl}


      />
    
    ));
    return (
      <div className='react-container'>
        <div className='app-container'>
          <Navbar />
          <section className='box-list'>
            {boxes}
          </section>
        
        </div>
      </div>
    );
  }
}

export default App;
