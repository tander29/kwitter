import React from "react";
import { Icon, Card } from 'semantic-ui-react';
import "../App.css";


class CustomFooter extends React.Component {
    render() {
       return (
           <Card className='custFooter' style={{padding:'1vh'}} fluid>
          <Card.Content textAlign='center'>
            By ScrumTeam1: <Icon name ='copyright' size="small" />

            <p className='developers'>Patrick Hanson</p>
            <p className='developers'>Kyle Meiklejohn</p>
            <p className='developers'>Travis Anderson</p>
            <p className='developers'>David Stewart</p>
             
            <div>
              47 S Meridian St, Indianapolis, IN 46204
          </div>
          
          </Card.Content>
          </Card>
         
       );
    }
 }

 export default CustomFooter;