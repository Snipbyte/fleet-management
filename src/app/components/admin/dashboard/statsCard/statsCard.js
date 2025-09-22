import React from 'react';
import { IconType } from 'react-icons';

const StatsCard = ({ count, label, Icon, iconBgColor, iconColor }) => {
    return (
        <div className="flex items-center p-4 rounded-md shadow-sm bg-white w-full md:w-[24%] h-28 mb-2 md:mb-0">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${iconBgColor} mr-4`}>
                <Icon className={`text-xl ${iconColor}`} style={{ lineHeight: '1' }} />
            </div>
            <div className="flex flex-col">
                <div className="text-xl font-medium text-black">{count}</div>
                <div className="text-sm text-gray-400 mt-1">{label}</div>
            </div>
        </div>
    );
};

export default StatsCard;