import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const Amazon = () => {
    return (
        <Card
            imgsrc={Sdata[3].imgsrc}
            key={Sdata[3].id}
            title={Sdata[3].title}
            sname={Sdata[3].sname}
            link={Sdata[3].link} />
    );
}

export default Amazon;