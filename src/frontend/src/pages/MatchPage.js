import {React, useEffect, useState} from 'react';
import {MatchDetailCard} from '../components/MatchDetailCard';
import {useParams} from 'react-router-dom/cjs/react-router-dom';
import './MatchPage.scss';
import {YearSelector} from '../components/YearSelector';

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const {teamName, year} = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
      const data = await response.json();
      setMatches(data);
    })();
  }, [teamName, year]);

  if (!matches) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="MatchPage">
      <div className="yearSelector">
        <h3>Select year</h3>
        <YearSelector teamName={teamName}/></div>
      <div className="matches">
        <h1 className="pageHeading">{teamName} matches in {year}</h1>
        {matches.map(match => <MatchDetailCard key={match.id} match={match} teamName={teamName}/>)}
      </div>
    </div>
  );
}
