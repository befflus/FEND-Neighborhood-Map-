import React, { Component } from 'react';
import './App.css';
import {load_google_maps, getVenues} from './Utils'


class App extends Component {

  state = {
  venuesData: {}
  }

  componentDidMount (){
    
    /* From MDN webpage: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    
    "The Promise.all() method returns a single Promise that resolves when all 
    of the promises passed as an iterable have resolved or when the iterable 
    contains no promises. It rejects with the reason of the first promise that rejects." 
    So let's make use of this and have our async functions get the data they need before we proceed.*/
    
    let googlePromise = load_google_maps();
    let getFoursquaredata = getVenues();
  
    Promise.all([
    googlePromise, getFoursquaredata]
    ).then(promisesData => {

      // With the returned promise from the Promise.all() we can now set up the map 

      let google = promisesData[0]; // Store google maps object
      this.myVenues = promisesData[1].data.response.groups[0].items;// Store data from foursquare
          console.log(google,this.myVenues) 
      
      //Store the data as component properties so it is easyer to use the googlemaps api
      
      this.google = google; 

      //Array for all the mapMarkers
      this.mapMarkes = [];

      //Make the mapinstance. Loction is Bergen City in Hordaland, Norway

      this.infoWindow = new google.maps.InfoWindow();
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,   
        center: {lat: 60.39299, lng: 5.32415},      
      });
      
      //Create a marker for each venue
      this.myVenues.forEach( venues => { 
        
        let marker = new google.maps.Marker({
          position: {lat: venues.venue.location.lat, lng: venues.venue.location.lng},
          map: this.map,
          venue: venues.venue,
          id: venues.venue.id,
          name: venues.venue.name,
          animation: google.maps.Animation.DROP
          });
          
          //add a listener for the marker to do some animation
          marker.addListener('click', () => {
            if(marker.getAnimation() !==null) {marker.setAnimation(null);}
            else{ marker.setAnimation(google.maps.Animation.BOUNCE);}
            setTimeout(() => { marker.setAnimation(null) },1500);
          });

          //add a listener to show an infowindow when a marker is clicked

          google.maps.event.addListener(marker, 'click', () => {
            this.infoWindow.setContent(marker.venue.name);
            this.map.setZoom(13);
            this.map.setCenter(marker.position);
            this.infoWindow.open(this.map, marker);
            this.map.panBy(0, -125);
          });

          //add the marker to the marker array
          this.mapMarkes.push(marker);
          });
          
          //update state with venuesdata
          this.setState({venuesData: this.myVenues})
        })
}
  

  render() {
    console.log(this.google)
    return (
      <div>
        <div id="map">

        </div>       
      </div>
    );
  }
}

export default App;
