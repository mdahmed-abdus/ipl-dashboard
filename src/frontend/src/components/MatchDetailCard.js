import {React} from 'react';
import {Link} from 'react-router-dom';
import './MatchDetailCard.scss';

export const MatchDetailCard = ({match, teamName}) => {
  if (!match) {
    return null;
  }

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamName === match.matchWinner;

  return (
    <div className={(isMatchWon ? 'wonCard' : 'lostCard') + ' MatchDetailCard'}>
      <div>
        <span className="vs">vs</span>
        <h1><Link to={otherTeamRoute}>{otherTeam}</Link></h1>
        <h2 className="matchDate">{match.date}</h2>
        <h3 className="matchVenue">at {match.venue}</h3>
        <h3 className="matchResult">{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
      </div>
      <div className="additionalDetail">
        <h3>First Innings</h3>
        <p>{match.team1}</p>
        <h3>Second Innings</h3>
        <p>{match.team2}</p>
        <h3>Man of the Match</h3>
        <p>{match.playerOfMatch}</p>
        <h3>Umpire 1</h3>
        <p>{match.umpire1}</p>
        <h3>Umpire 2</h3>
        <p>{match.umpire2}</p>
      </div>
    </div>
  );
}
