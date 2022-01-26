import React from 'react';
import { Link } from 'react-router-dom';


function Home(props) {
    return (
        <>
        <div>
            This is the landing page for this app. 
        </div>
        <Link to='/world'>World</Link>
        </>
    );
}

export default Home;