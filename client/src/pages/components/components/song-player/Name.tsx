import React from 'react';


function Name({className,length,name}:any) {
    return (
        <p className={className}>
                { length > 12 ? name.substring(0,12)+"..." : name}
        </p>
    );
}

export default Name;