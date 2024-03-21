import React, { useState } from 'react';
// import TextField from '@material-ui/core/TextField';
// import MuiPhoneNumber from 'material-ui-phone-number';


const LoginPage = () => {
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [otp, setOtp] = useState('');

    // const handleLogin = (event) => {
    //     event.preventDefault();
    //     // Handle login logic here
    // };

    return (
        <section className="flex font-sans items-center justify-center h-screen bg-cover bg-center" style={{backgroundImage: 'url(\'/bg.jpeg\')'}}>
            <div className="bg-black bg-opacity-40 w-1/2 h-1/2 rounded-3xl filter backdrop-filter backdrop-blur-md flex flex-row overflow-hidden">
                    <div className='flex items-start bg-cover h-full w-2/5' style={{backgroundImage: 'url(\'/bg1.jpg\')'}}></div>
                <div className="w-3/5 p-4">
                    <h1 className="text-2xl ml-10 mt-10 font-semibold text-white">Enter Phone Number</h1>
                    <form className="flex flex-col items-center justify-center mt-10">
                        <input type="text" placeholder="Phone Number" className="w-3/4 p-2 rounded-lg border-none bg-gray-200" />
                        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                        {/* <MuiPhoneNumber defaultCountry={'in'} onChange={handleOnChange}/> */}
                        <button type="submit" className="w-3/4 p-2 mt-4 rounded-lg bg-blue-500 text-white font-bold">Send OTP</button>
                    </form>
                    <h1 className="text-2xl ml-10 mt-10 font-semibold text-white">Enter OTP</h1>
                    <form className="flex flex-col items-center justify-center mt-10">
                        <input type="text" placeholder="OTP" className="w-3/4 p-2 rounded-lg border-none bg-gray-200" />
                        <button type="submit" className="w-3/4 p-2 mt-4 rounded-lg bg-blue-500 text-white font-bold">Login</button>
                    </form>
                    <div className='text-m italic mt-5 ml-10 text-white'>Having trouble logging in? <a href="#" className="text-blue-500">Get Help</a></div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
// Remove the unnecessary closing </label> tag
// </label>