import React from 'react';
import './Loading.css';
export const Loading = ({isLoading}) => {
     if(isLoading){
          return( 
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
        )
     }
     return <div></div>
}