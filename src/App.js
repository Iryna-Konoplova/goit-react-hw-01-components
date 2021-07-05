import React from 'react';
import Profile from "./components/social-profile/Profile";
import user from "./components/social-profile/user.json";
import Statistics from "./components/statistics/Statistics";
import statisticalData from "./components/statistics/statistical-data.json";
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

console.log(statisticalData)

const App = () => {
    return (
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                url={user.avatar}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            />
            <Statistics
                title='Upload stats'
                stats={statisticalData}   
            />
            <FriendList
                friends={friends}
            />
        </div>
    );
};

export default App;