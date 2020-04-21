import React, { Component } from 'react';
import ReactGiphySearchbox from 'react-giphy-searchbox'

import GifPlayer from 'react-gif-player';
import 'react-gif-player/dist/GifPlayer.css';

export default class GifComponent extends Component {

    constructor(props) {
        
        super(props);

        this.state = {
            gif : '',
            still : '',
        }
        
    } // end constructor

    render() {

        const addGif = e => {

            //const gif = e.images.fixed_width_downsampled.url; // *.gif 
            const gif = e.images['downsized_medium'].url; // *.gif 

            const still = e.images['downsized_still'].url; // *.jpg 

            console.log( gif, still, e )

            this.setState( { ...this.state, gif, still } )
    
        };

        return (
            <div>

                <div>[A] : <img src={this.state.gif} /> </div>
                <div>[B] : {this.state.gif !='' && <GifPlayer gif={this.state.gif} still={this.state.still} />} </div>

                <ReactGiphySearchbox
                    apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7" // Required: get your on https://developers.giphy.com
                    onSelect={addGif}
                    poweredByGiphy={false}
                    searchPlaceholder="Search"

                    masonryConfig={[
                        { columns: 2, imageWidth: 110, gutter: 1 },
                        { mq: "1000px", columns: 5, imageWidth: 120, gutter: 1 }
                    ]}
                />
            </div>
        );
    }
}