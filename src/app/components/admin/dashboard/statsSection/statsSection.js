import React from 'react';
import StatsCard from '../statsCard/statsCard';
import { AiOutlineDollarCircle } from 'react-icons/ai'; 
import { BsCardChecklist } from 'react-icons/bs';
import { BiSolidNotification } from "react-icons/bi";
import { TbWorldSearch } from 'react-icons/tb';


const StatsSection = () => {
    const statsData = [
        { count: "178+", label: "Total Booking", Icon: BsCardChecklist, iconBgColor: "bg-blue-50", iconColor: "text-blue-600" },
        { count: "20+", label: "Pending Confirmation", Icon: BiSolidNotification, iconBgColor: "bg-yellow-50", iconColor: "text-yellow-600" },
        { count: "190+", label: "Pending Payment", Icon: AiOutlineDollarCircle, iconBgColor: "bg-orange-50", iconColor: "text-orange-600" },
        { count: "12+", label: "Upcoming Trips", Icon: TbWorldSearch, iconBgColor: "bg-indigo-50", iconColor: "text-indigo-600" },
    ];

    return (
        <div className="md:flex justify-between p-2">
            {statsData.map((stat, index) => (
                <StatsCard
                    key={index}
                    count={stat.count}
                    label={stat.label}
                    Icon={stat.Icon}
                    iconBgColor={stat.iconBgColor}
                    iconColor={stat.iconColor}
                />
            ))}
        </div>
    );
};

export default StatsSection;