import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import Netflix from './Netflix';
import Images from './Images';
import Amazon from './Amazon';

const favseries = "netflix";

const FavS = () => {
    if (favseries == 'netflix') {
        return(
            <Netflix />
        )
    }
    else {
        return (
            <Amazon />
        );
    }
}

const App = () => (
    <>
        {/* <FavS /> */}
        { (favseries == "netflix")? <Netflix /> : <Amazon /> }
        {/* {Sdata.map((val) => {
            // return (
            //     <Card
            //         imgsrc={val.imgsrc}
            //         key={val.id}
            //         title={val.title}
            //         sname={val.sname}
            //         link={val.link} />
            // );
        })} */}
    </>
);

export default App;

