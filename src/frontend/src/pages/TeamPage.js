import {React, useEffect, useState} from 'react';
import {MatchDetailCard} from '../components/MatchDetailCard';
import {MatchSmallDetailCard} from '../components/MatchSmallDetailCard';
import {useParams} from 'react-router-dom/cjs/react-router-dom';
import {PieChart} from 'react-minimal-pie-chart';
import './TeamPage.scss';
import {Link} from 'react-router-dom';

export const TeamPage = () => {
  const [team, setTeam] = useState(null);
  const {teamName} = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
      const data = await response.json();
      setTeam(data);
    })();
  }, [teamName]);

  if (!team || !team.teamName) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="TeamPage">
      <div className="teamNameSection">
        <h1 className="teamName">{team.teamName}</h1>
      </div>
      <div className="winsLossSection">
        Wins / Losses
        <PieChart data={[
          {title: 'Losses', value: team.totalMatches - team.totalWins, color: '#a34d5d'},
          {title: 'Wins', value: team.totalWins, color: '#4da375'}
        ]}/>
      </div>
      <div className="matchDetailSection">
        <h3>Latest Matches</h3>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
      </div>
      {team.matches.slice(1).map(match => (
        <MatchSmallDetailCard key={match.id} match={match} teamName={team.teamName}/>
      ))}
      <div className="moreLink">
        <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More ></Link>
      </div>
    </div>
  );
}
