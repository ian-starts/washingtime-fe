import React, {useEffect, useState} from 'react';
import ReserveCard from "./ReserveCard";
import moment from "moment";

export default (props) => {
    const [timeRange, setTimeRange] = useState(createTimeRange(props.day));
    return (
        <div className="reserve-col">
            <h3 className={"reserve-col__header"}>
                {props.day.format("MMM Do YYYY")}
            </h3>
            {timeRange.slice(0, -1).map((range, i) => {
                let reservation = props.reservation.find(r => {
                    return moment(r.startDateTime).valueOf() === range.valueOf()
                });
                return <ReserveCard key={i} date={props.day} startTime={range} disabled={reservation}
                                    endTime={timeRange[i + 1]}/>
            })}
                <style jsx>{`
                .reserve-col {
                    @apply flex flex-col px-4 py-3 bg-white rounded-lg mt-10 mx-3
                }
                .reserve-col__header{
                  @apply text-center text-xl p-3 text-gray-800 text-secondary
                }
             `}</style>
                </div>)
            }
            const createTimeRange = (date) => {
            date.hours(6).minutes(45).seconds(0).millisecond(0);
            return [0,0,0,0,0,0,0,0,0,0,0,0,0].map(i => {
            return moment(date.add(75, 'm'));
        });
        };

