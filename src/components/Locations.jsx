import React from 'react';
import SanfStad from '../Images/sanford_stadium.jpg';
import UGAarch from '../Images/UGA_Arch.jpg';
import '../css/Locations.css'

let loggedstate;

const Locations = props => {
    if (props.loginstatus) {
        loggedstate = (
            <React.Fragment>
                <div className='loc-container'>
                    <div>
                        <img src={SanfStad} alt='sanford-stadium'></img>
                        <h2>Sanford Stadium</h2>
                        <div>
                            <p>This is Sanford Stadium.</p>
                            <p><b>Address:</b> Athens, GA</p>
                        </div>
                    </div>
                    <div>
                        <img src={UGAarch} alt='sanford-stadium'></img>
                        <h2>UGA Arch</h2>
                        <div>
                            <p>This is UGA Arch.</p>
                            <p><b>Address:</b> Athens, GA</p>
                        </div>
                    </div>
                </div>
                <div className='loc-creater'>
                    <h2>Add your Location</h2>
                    <form>
                        <label for="title"><b>Title</b></label>
                        <br></br>
                        <input type="text" placeholder="Enter Title" name="title" required></input>
                        <br></br>

                        <label for="picture"><b>Picture</b></label>
                        <br></br>
                        <input type="text" placeholder="Enter the URL" name="picture" required></input>
                        <br></br>

                        <label for="description"><b>Description</b></label>
                        <br></br>
                        <input type="text" placeholder="Enter Description" name="description" required></input>
                        <br></br>

                        <label for="address"><b>Address</b></label>
                        <br></br>
                        <input type="text" placeholder="Enter Address" name="address" required></input>
                        <br></br>

                        <button type="submit" name="loc-submit"><b>Submit</b></button>
                    </form>
                </div>
            </React.Fragment>
        );
    } else {
        loggedstate = (
            <div className='loc-container'>
                <div>
                    <img src={SanfStad} alt='sanford-stadium'></img>
                    <h2>Sanford Stadium</h2>
                    <div>
                        <p>This is Sanford Stadium.</p>
                        <p><b>Address:</b> Athens, GA</p>
                    </div>
                </div>
                <div>
                    <img src={UGAarch} alt='sanford-stadium'></img>
                    <h2>UGA Arch</h2>
                    <div>
                        <p>This is UGA Arch.</p>
                        <p><b>Address:</b> Athens, GA</p>
                    </div>
                </div>
            </div>
        );
    }

    return loggedstate;
};

export default Locations;