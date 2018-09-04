import React from "react";
import { Icon, Card } from 'semantic-ui-react';
import "../App.css";


class CustomFooter extends React.Component {
    render() {
       return (
           <Card className='custFooter' color='green' centered>
          <div>
            By ScrumTeam1: <Icon name ='copyright' size="small" />
             
            <div>
              47 S Meridian St, Indianapolis, IN 46204
          </div>
          
          </div>
          </Card>
         
       );
    }
 }

 export default CustomFooter;