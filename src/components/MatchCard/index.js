import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = details
  const winOrLose =
    matchStatus === 'Won' ? 'match-status-won' : 'match-status-lost'
  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="latest-match-info extra2">{competingTeam}</p>
      <p className="latest-match-info extra2">{result}</p>
      <p className={`match-status ${winOrLose}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
