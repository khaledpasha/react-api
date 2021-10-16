import React, { Component } from 'react'
// import Fetch from './Fetch'

export default class Detail extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
              <div id="info-wrapper">
             <h1>Details</h1>
             <p>Click on a table item to get detailed information</p> 
            <div id="info-content">
         <div> <p>User selected:{this.props.firstName}</p></div>
         <div>
             <b>Description: </b>
             <textarea cols="50" rows="5" readonly>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
             </textarea>
         </div>
         <div><b>Address:</b> 6480 Nec Ct</div>
         <div><b>City:</b> Dinwiddie</div>
         <div><b>State:</b> NV</div>
         <div><b>Zip:</b> 91295</div>
        </div>
        </div>  
            </div>
        )
    }
}

//  {/* <!-- Details box --> */}

// <div id="info-wrapper">
//     <h1>Details</h1>
//     <p>Click on a table item to get detailed information</p> 
//     <div id="info-content">
//         <div><b>User selected:</b> {this.this.props.firstName}</div>
//         <div>
//             <b>Description: </b>
//             <textarea cols="50" rows="5" readonly>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
//             </textarea>
//         </div>
//         <div><b>Address:</b> 6480 Nec Ct</div>
//         <div><b>City:</b> Dinwiddie</div>
//         <div><b>State:</b> NV</div>
//         <div><b>Zip:</b> 91295</div>
//     </div>
// </div>
// export default Detail;

