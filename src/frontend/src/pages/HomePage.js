import {React, useEffect, useState} from 'react';
import {TeamTile} from '../components/TeamTile';
import './HomePage.scss';

export const HomePage = () => {
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
      const data = await response.json();
      setTeams(data);
    })();
  }, []);

  if (!teams) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="HomePage">
      <div className="headerSection">
        <h1 className="appName">IPL Dashboard</h1>
      </div>
      <div className="teamGrid">
        {teams.map(team => <TeamTile key={team.id} teamName={team.teamName}/>)}
      </div>
    </div>
  );
}
