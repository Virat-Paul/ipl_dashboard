import MatchCard from '../MatchCard'

import './index.css'

const LatestMatch = props => {
  const {recentMatchesUpdated, latestMatchDetailsUpdated} = props
  const {
    competingTeam,
    competingTeamLogo,
    firstInnings,
    manOfTheMatch,
    date,
    secondInnings,
    umpires,
    venue,
    result,
  } = latestMatchDetailsUpdated
  console.log(recentMatchesUpdated)
  return (
    <>
      <div className="latest-match-details-container">
        <div className="first-latest-container">
          <p className="team-heading">{firstInnings}</p>
          <p className="latest-match-info extra1">{date}</p>
          <p className="latest-match-info extra2">{venue}</p>
          <p className="latest-match-info extra2">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="competing-team-logo"
          alt={`latest match ${competingTeam}`}
        />
        <div className="latest-information-container">
          <p className="latest-match-info extra2">First Innings</p>
          <p className="latest-match-info extra3">{competingTeam}</p>
          <p className="latest-match-info extra2">Second Innings</p>
          <p className="latest-match-info extra3">{secondInnings}</p>
          <p className="latest-match-info extra2">Man of The Match</p>
          <p className="latest-match-info extra3">{manOfTheMatch}</p>
          <p className="latest-match-info extra2">Umpires</p>
          <p className="latest-match-info extra3">{umpires}</p>
        </div>
      </div>
      <ul className="recent-matches-container">
        {recentMatchesUpdated.map(eachItem => (
          <MatchCard key={eachItem.id} details={eachItem} />
        ))}
      </ul>
    </>
  )
}

export default LatestMatch
