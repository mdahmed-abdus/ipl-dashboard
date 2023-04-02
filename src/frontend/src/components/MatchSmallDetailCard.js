import {React} from 'react';
import {Link} from 'react-router-dom';
import './MatchSmallDetailCard.scss';

export const MatchSmallDetailCard = ({match, teamName}) => {
  if (!match) {
    return null;
  }

  const isMatchWon = teamName === match.matchWinner;

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;

  return (
    <div className={(isMatchWon ? 'wonCard' : 'lostCard') + ' MatchSmallDetailCard'}>
      <span className="vs">vs</span>
      <h1><Link to={otherTeamRoute}>{otherTeam}</Link></h1>
      <p className="matchResult">{match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>
  );
}
