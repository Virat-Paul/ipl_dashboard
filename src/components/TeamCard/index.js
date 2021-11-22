import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {iplDetails} = props
  const {id, name, teamImageUrl} = iplDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-card">
        <img src={teamImageUrl} className="team-card-image" alt={name} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
