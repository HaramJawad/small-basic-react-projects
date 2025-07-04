import React from 'react';
function ChannelInfo({ info }) {

    return (
        <div className=" flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 shadow-lg rounded-2xl bg-white dark:bg-gray-800 transition-all duration-300  "    >
            <img src={info?.snippet?.thumbnails?.high?.url} alt="Channel" className=" w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow-md border-4 border-gray-200 dark:border-gray-700 " />
            <div className=" flex-1 text-center sm:text-left  ">
                <h2 className="text-2xl sm:text-3xl  font-bold text-gray-900 dark:text-white  ">{info?.snippet?.title}</h2>
                <p className="text-gray-600 dark:text-gray-300   text-sm md:text-base line-clamp-3 "   >{info?.snippet?.description}</p>
             
                <p  className="text-sm text-blue-400 mb-1"   >👥  Subscribers: {info?.statistics?.subscriberCount}</p>
                <p className="text-sm text-green-400"   >📺   Videos: {info?.statistics?.videoCount}</p>
            </div>
            
        </div>
    );
}

export default ChannelInfo;