import React from 'react';
import CampsiteInfo from './CampsiteInfoComponent';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';

function RenderDirectoryItem(campsite, onClick) {
    return(
        <Card></Card>
    );
}

function Directory(props){
    const directory = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col-md-5 m-1">
            <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;