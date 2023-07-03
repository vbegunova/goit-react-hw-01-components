import user from '../user.json'
import data from '../data.json'
import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile name={username} tag={tag} location={location} avatar={avatar} stats={stats}/>
      <Statistics data/>
    </>
  );
};
