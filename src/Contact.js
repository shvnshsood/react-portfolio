import React from 'react'
import { useState } from 'react'

const Contact = () => {


    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",


    });

    let name, value;

    //function to get usertyped data

    const postUserData = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUserData = ({ ...userData, [name]: value });
    };

    //connection to firebase

    const submitData = async (e) => {
        e.preventDefault();
        const { firstName, lastName, phone, email, address, message } = userData
        const res = await fetch('https://portfolio-769ce-default-rtdb.firebaseio.com/userDataRecord.json',{
            method: "POST",
            headers:{
                "Content-Type" : "application/json",
                    },
            body: JSON.stringify({ firstName, lastName, phone, email, address, message, }),

        },
        );



        if(res)
        {
            alert("data stored")
        }
        else
        {
            alert("fill data")
        }
    };

    return (
        <>
            <section className='contactus-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12  col-lg-10 mx-auto'>
                            <div className='row'>

                                <div className='contact-leftside col-12 col-lg-5'>
                                    <h1 className='main-heading fw-bold'>
                                        Connect with our <br /> sales team</h1>
                                    <p className='main-hero-para'>

                                        Lorem ipsum dolor sit
                                    </p>

                                    <figure>
                                        <img src='./images/hero1.jpg' alt='' />
                                    </figure>
                                </div>

                                {/*right side */}
                                <div className='contact-rightside col-12 col-lg-7' >
                                    <form method='POST'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-12 col-lg-6 contact-input-feild'>
                                                    <input type="text" name="firstName" className='form-control' placeholder="First-Name" value={userData.firstName} onChange={postUserData} /></div>
                                                <div className='col-12 col-lg-6 contact-input-feild'>
                                                    <input type="text" name="lastName" className='form-control' placeholder="Last-Name" value={userData.lastName} onChange={postUserData} /></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-12 col-lg-6 contact-input-feild'>
                                                    <input type="text" name="phone" className='form-control' placeholder="PhoneNumber" value={userData.phone} onChange={postUserData} /></div>
                                                <div className='col-12 col-lg-6 contact-input-feild'>
                                                    <input type="text" name="email" className='form-control' placeholder="Email" value={userData.email} onChange={postUserData} /></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-12 contact-input-feild'>
                                                    <input type="text" name="address" className='form-control' placeholder="Address" value={userData.address} onChange={postUserData} /></div>
                                                <div className='col-12'>
                                                    <input type="text" name="message" className='form-control' placeholder="Message" value={userData.message} onChange={postUserData} /></div>
                                                <div class="form-check form-checkbox-style">
                                                    <input
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="flexCheckChecked"
                                                    />
                                                    <label
                                                        class="form-check-label"
                                                        className="main-hero-para">
                                                        I agree that website may contact me at the
                                                        email address or phone number above
                                                    </label><br /><br />
                                                    <button type="submit" className="btn btn-style w-100" onClick={submitData}>
                                                        Submit
                                                    </button>



                                                </div>


                                            </div>


                                        </div>
                                    </form>


                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section></>
    )
}

export default Contact