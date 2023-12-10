import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "./utils/calender";
import cn from "./utils/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import './Calender.css'
const Calender = () => {
    
    const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);

  const [appointment,setAppointment] = new useState([]);
    const callAppointment = async () => {
        try {
          const response = await fetch('/fetchAppointmentDates', {
            method: 'GET',
            headers: {
              Accept : 'application/json',
              'Content-Type': 'application/json'
              
            },
            credentials:'include'
          });
          
          const data = await response.json();
          setAppointment(data);
          if (response.status !== 201) {
                const error = new Error(response.error);
                throw error;
          }
        //   console.log(data);
        } catch (err) {
                window.alert(err);
          }
      }

      useState(()=> {
        callAppointment();
      },[])
	return (
		<div className="calender-border">
			<div className=" ">
				<div className="calenderheader">
					<h1 className="">
						{months[today.month()]}, {today.year()}
					</h1>
					<div className="day">
						<GrFormPrevious
							className=""
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
						<h1 className="weekday"	>
							Today
						</h1>
						<GrFormNext
							className=""
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className="week">
					{days.map((day, index) => {
						return (
							<p
								key={index}
								className=""
							>
								{day}
							</p>
						);
					})}
				</div>

				<div className="date">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {

							return (
								<div
									key={index}
									className={currentMonth && today ? "eachDate currbg" : currentMonth ? " eachDate blackcolor" : "eachDate greycolor"}>
									<p onClick={() => {
											setSelectDate(date);
										}}
									>
                    <NavLink 
                    className = "navlink"
                    to={`/Showappointment/${(date.year() + '-' + (date.month()+1+'').padStart(2, '0')  + '-'+(date.date()+'').padStart(2, '0'))}`}>
                    <div
									className={appointment[(date.year() + '-' + (date.month()+1+'').padStart(2, '0')  + '-'+(date.date()+'').padStart(2, '0'))] === 'true'  ? "redbg" : ""}>
										{date.date()}
                </div>
                  </NavLink>
									</p>
								</div>
							);
						}
					)}
				</div>
			</div>
		</div>
  );
  
}

export default Calender