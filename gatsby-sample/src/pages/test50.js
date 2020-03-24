import React, { Component } from 'react';
import { Link } from 'gatsby';
const axios = require('axios');

const test50 = () => {

    const download = () => {

        axios({
            //url: 'http://localhost:3000/20200324121117_file.txt',
            url: 'http://15.165.204.186:3000/20200304181835_photo.png',

            method: 'GET',
            responseType: 'blob', // important

        }).then((response) => {
            
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            
            link.href = url;
            link.setAttribute('download', 'file.png');
            document.body.appendChild(link);
            link.click();

        });

    }

    return (
        <div style={{border:'1px solid', height:'200px'}}>
            <div style={{border:'1px solid', height:'100px', width:'100px', margin:'10px'}}>
                
                <a href="http://localhost:3000/20200324121117_file.txt" target="_blank" download>Download</a>

                <br/>

                <Link to="http://localhost:3000/20200324121117_file.txt" >Download</Link>

                <br/>

                <a onClick={download} >Download</a>

            </div>
        </div>
    );
};

export default test50;