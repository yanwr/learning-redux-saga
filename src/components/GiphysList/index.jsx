import React from 'react';

const GiphysListComponent = ({ giphys }) => {

    function renderGiphy() {
        return giphys.map( x => (
            <img key={x.hash} src={x.url}  alt={x.url} />
        ))
    };

    return(
        <div>
            { giphys.length > 0 
                ? renderGiphy()
                : <p>No results ...</p> 
            }
        </div>
    );
};

export default GiphysListComponent;