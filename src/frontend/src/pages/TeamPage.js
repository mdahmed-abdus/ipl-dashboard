import {React, useEffect, useState} from "react";
import {MatchDetailCard} from "../components/MatchDetailCard";
import {MatchSmallDetailCard} from "../components/MatchSmallDetailCard";

export const TeamPage = () => {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8080/team/Delhi%20Capitals');
      const data = await response.json();
      setTeam(data);
    })();
  }, []);

  if (!team) {
    return <></>;
  }

  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailCard match={team.matches[0]}/>
      {team.matches.slice(1).map(match => <MatchSmallDetailCard key={match.id} match={match}/>)}
    </div>
  );
}
