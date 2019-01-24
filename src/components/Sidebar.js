import React, { Component } from 'react'


class Sidebar extends Component {

    state = {
        query: '',
        myVenues: []
    }
    

    venueFilter(query) {

        //Filter venues by the query. 
        let filter = this.props.venuesData.filter(venue => venue.venue.name.toLowerCase().includes(query.toLowerCase()))
    
        //This will show the matched markers (by use of includes() method) and hide the ones that do not match the query
        this.props.mapMarkes.forEach(marker => {
            
             marker.venue.name.toLowerCase().includes(query.toLowerCase()) === true 
             ? marker.setVisible(true) 
             :marker.setVisible(false);
             this.props.infoWindow.close(marker) 
         this.setState( {myVenues: filter, query: query})
        })
    
    }


    //This if the code that runs when we click a venue item in the sidebar.
    listItemClick = (venue) => {
        let marker = this.props.mapMarkes.filter(mark => mark.venue.id === venue.venue.id)[0];
        console.log(marker)
        let content = `<div id=infowindow><h3>${venue.venue.name}</h3>
                        <p>Adress: ${venue.venue.location.formattedAddress[0]}</p></div>`;
        this.props.infoWindow.setContent(content);
        this.props.map.setZoom(12);
        this.props.map.setCenter(marker.position);
        this.props.infoWindow.open(this.map, marker);
        this.props.map.panBy(0, 100);
        if(marker.getAnimation() !==null) {marker.setAnimation(null);}
        else{ marker.setAnimation(this.props.google.maps.Animation.BOUNCE);}
        setTimeout(() => { marker.setAnimation(null) },1500);
      } 

    render() {

    return (
      <aside aria-label="Sidebar displaying list of locations" id="sidebar">
            <input aria-label="filter" tabIndex="0"  placeholder="Filter restaurants"    
            id="input" value={this.state.query} onChange={(event) => {this.venueFilter(event.target.value)}}>
              </input>
                <br/>
            { //myVenues.length have the value of 0. Need this ternary to show all venues in the sidebar at render
                (this.state.myVenues.length < 1) 
                ?
                (this.props.venuesData && this.props.venuesData.length > 0 && this.props.venuesData.map((venue,index) =>(
            <div className ="venues-sidebar" tabIndex="0" key={index} onClick={() => { this.listItemClick(venue)}}>
            {venue.venue.name} 
            </div>)) )
                :
            (this.state.myVenues && this.state.myVenues.length > 0 && this.state.myVenues.map((venue, index) =>(
            <div className ="venues-sidebar" tabIndex="0" id={index} key={index} onClick={() => { this.listItemClick(venue,index)}}>
            {venue.venue.name }</div>)) )
            }
      </aside>
    )
  }
}

export default Sidebar;