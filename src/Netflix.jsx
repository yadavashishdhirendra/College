import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const Netflix = () => {
    return (
        <Card
            imgsrc={Sdata[1].imgsrc}
            key={Sdata[1].id}
            title={Sdata[1].title}
            sname={Sdata[1].sname}
            link={Sdata[1].link} />
    );
}

export default Netflix;