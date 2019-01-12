import axios from 'axios';


/*  https://github.com/ryanwaite28/script-store/blob/master/js/react_resolve_google_maps.js
  This function is creating a global callback in a Promise that resolves the Promise, 
  then handing that to the Map script (the Google Maps script needs a global function for a callback)
*/



export function load_google_maps() {
    return new Promise(function(resolve, reject) {
      // define the global callback that will run when google maps is loaded
      window.resolveGoogleMapsPromise = function() {
        // resolve the google object
        resolve(window.google);
        // delete the global callback to tidy up since it is no longer needed
        delete window.resolveGoogleMapsPromise;
      }
      // Now, Load the Google Maps API
      const script = document.createElement("script");
      const API_KEY = 'AIzaSyB3mamzau4DG8qPRaMKdGJzQv8R8awfDbw&callback=initMap';
      script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${API_KEY}&callback=resolveGoogleMapsPromise`;
      script.async = true;
      document.body.appendChild(script);
    });
  }


//Function to fetch data for Foursquare

  export function getVenues() {
  
    const client_id = 'GB0O1HWSUS3ONDOBBNUEHU1WBZ02E5UNLQMNODJXROTQKEGV';  // Client ID at foursquare API
    const client_secret = 'YQSE4FW12TYK2DKB21EN5ATSVTLCD35FSWWYWLOI1BQOXYXT';  // Client Secret at foursqare API
    
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    
    //Parameters for the get request
    const parameters = {
      client_id: client_id,
      client_secret: client_secret,
      query: 'shopping',
      near: 'bergen',
      v: '20190101'
    }
    // Axiosrequest to get data from fourSqare. 

    return axios.get(endPoint + new URLSearchParams(parameters))
    
  }
  
