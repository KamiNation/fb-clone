import React from 'react'
import { useState } from 'react';

const Modal = (props) => {

    const [year, setYear] = useState(0);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('Jan');
    const [radioOption, setRadioOption] = useState('');




    // Function to handle changes in the day dropdown
    const DayChangeHandle = (e) => {
        setDay(e.target.value);
    };

    // Function to handle changes in the month dropdown
    const MonthChangeHandle = (e) => {
        setMonth(e.target.value);
    };


    // Function to handle changes in the year dropdown
    const YearChangeHandle = (e) => {
        setYear(e.target.value);
    };

    const radioOptionChange = (e) => {
        setRadioOption(e.target.value);
    };

    const generateDayOptions = () => {
        const arr = [];

        const startDay = 1;
        const endDay = 31;

        for (let i = endDay; i >= startDay; i--) {
            arr.push(<option value={i}>{i}</option>);
        }

        return arr
    }

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


    const generateYearOptions = () => {
        const arr = [];

        const startYear = 1900;
        const endYear = new Date().getFullYear();

        for (let i = endYear; i >= startYear; i--) {
            arr.push(<option value={i}>{i}</option>);
        }

        return arr
    }



    return (
        <div id="control">
            <div id="Modal-container">
            <div id='Sign-Modal-container'>
                <div id='Sign-Modal-container-left' >
                    <h2 id='Sign-Modal-container-left-h2' >Sign Up</h2>
                    <p>It's quick and easy.</p>
                </div>

                <div id='Sign-Modal-container-left'>
                    <span id="close" onClick={(e) => props.onClick(e)}>
                        &times;
                    </span>
                </div>

            </div>
            <hr />
            <form id="Modal-form-container">

                <div id='Modal-form-container-text'>
                    <div className='Modal-form-container-name'>
                        <input type="text" placeholder="FirstName" />
                    </div>

                    <div className='Modal-form-container-name'>
                        <input type="text" placeholder="LastName" />
                    </div>

                </div>

                <div >
                    <input type="text" placeholder="Email address or Phone number" />
                </div>

                <div >
                    <input type="password" placeholder="Password" />
                </div>

                <div id='Sign-Modal-container-select'>
                    <p>Date of birth</p>

                    <div id='Sign-Modal-container-span'>
                        <span>
                            <select
                                name='day'
                                onChange={DayChangeHandle}
                                value={day}
                            >
                                <option value='0'>Day</option>
                                {generateDayOptions()}
                            </select>
                        </span>


                        {/* month */}
                        <span>
                            <select
                                name='month'
                                onChange={MonthChangeHandle}
                                value={month}
                            >
                                <option value=''>Month</option>
                                {
                                    monthNames.map((month, index) => (
                                        <option key={index} value={month}>{month}</option>
                                    ))
                                }
                            </select>
                        </span>

                        <span>
                            <select
                                name='year'
                                onChange={YearChangeHandle}
                                value={year}
                            >
                                <option value='0'>Year</option>
                                {generateYearOptions()}
                            </select>
                        </span>

                    </div>

                </div>

                <div id='Sign-Modal-container-radio'>

                    <span><div>

                        Female

                        <input
                            type="radio"
                            value="female"
                            checked={radioOption === "female"}
                            onChange={radioOptionChange}
                        // defaultChecked={value ==="female"} 
                        />
                    </div></span>

                    
                    <span> <div>
                        Male
                        <input
                            type="radio"
                            value="male"
                            checked={radioOption === "male"}
                            onChange={radioOptionChange}
                        />
                    </div>
                    </span>



                    <span><div>

                        Custom

                        <input
                            type="radio"
                            value="custom"
                            checked={radioOption === "custom"}
                            onChange={radioOptionChange}
                        />
                    </div></span>
                </div>

                <div id='text-content'>
                    <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                    <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                </div>
                <div>
                    <button >Sign Up</button>
                </div>
            </form>
        </div>
        </div>
        
    )
}

export default Modal