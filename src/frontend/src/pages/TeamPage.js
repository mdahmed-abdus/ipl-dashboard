import {React, useEffect, useState} from 'react';
import {MatchDetailCard} from '../components/MatchDetailCard';
import {MatchSmallDetailCard} from '../components/MatchSmallDetailCard';
import {useParams} from 'react-router-dom/cjs/react-router-dom';

export const TeamPage = () => {
  const [team, setTeam] = useState(null);
  const {teamName} = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}`);
      const data = await response.json();
      setTeam(data);
    })();
  }, [teamName]);

  if (!team || !team.teamName) {
    return <h1>Team not found</h1>;
  }

  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
      {team.matches.slice(1).map(match => (
        <MatchSmallDetailCard key={match.id} match={match} teamName={team.teamName}/>
      ))}
    </div>
  );
}
