import React from 'react';
import '../css/Home.css';
import UserInputContent from './UserInputContent';

const Home = props => (
    <div className='home-page'>
        <div className='home-banner'>
            <h1>Welcome to Athens Tourism!</h1>
        </div>

        <h2>What to Expect</h2>

        <div className='what-to-expect'>
            <div className='item-col'>
                <h4>Tourism</h4>
                <p> 
                    Find the best spots in Athens with our up
                    to date additions with constant users adding new
                    and excited places everyday. Wether it would be comedy clubs 
                    concert venues around town. Or Delecioous spots to eat. We make sure
                    to keep you updated everyday
                </p>
            </div>
            <div className='item-col'>
                <h4>Dynamic</h4>      
                <p>
                    Over the course of this app we vow to give our customers what they want by making the
                    neccesary changes everyday to given them the best product. Therefore by giving them 
                    the power for them to add and delete Events to authenticated users to giving them a emerse world
                    full of oppurtunies. Not only will a list be created with a multitude of applicants.
                    but this can be benificial to the world. No Kizzy
                </p>
            </div>
        </div>
<UserInputContent/>
    </div>
);

export default Home;