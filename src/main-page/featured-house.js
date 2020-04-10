import React from 'react';
import House from '../house'

const FeaturedHouse = (props) => {
  if (props.house) return (
    <div>
      <div className="row featuredHouse">
        <h3 className="col-md-12 text-center">
        Featured House
        </h3>
        <House house={props.house} />
      </div>
    </div>
  )
  return ( <div>No houses yet</div>  );
}

export default FeaturedHouse