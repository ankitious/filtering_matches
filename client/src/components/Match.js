import React from 'react';
import {div} from 'styled-components';

const Match = ({display_name : name,
                   job_title : title,
                   city : {name : cityName},
                   age,
                   main_photo : photo,
                   height_in_cm : height,
                   compatibility_score : compatibility,
                   contacts_exchanged : contacts,
                   religion
               }) =>
 <div style={{ 'display' :'flex',border : '1px solid lightgray'}}>
     <div
         style={{ 'display' : 'flex',
                 'flexDirection' : 'row',
                 'padding': '10px',
                 'width': '25%',
                }}
     >
         <img
             style={{'borderRadius' : '100px',
                     'verticalAlign': 'text-top',
                      'width' : '70px',
                       'height' : '70px',
                   }}
             alt={'profile avatar'}
             src={photo} />

         <div style={{ 'padding' : '0px 10px'
                    }}
         >
            <div>{name}</div>
             <div>{title}</div>
             <div>{age}</div>
             <div>{cityName}</div>
         </div>
     </div>
     <div style={{'paddingTop': '10px', 'paddingLeft' : '5px'}}>
         <div>Height : {height} cm</div>
         <div>Compatibility Score : {compatibility}</div>
         <div>Contacts Exchanged : {contacts}</div>
         <div>Religion : {religion}</div>
     </div>
 </div>;



export default Match;
