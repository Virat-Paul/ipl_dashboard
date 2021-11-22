import Loader from 'react-loader-spinner'

import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import './index.css'

const gradientColors = [
  'red-black',
  'green-yellow',
  'pink-blue',
  'brown-black',
  'blue-violet',
  'grey-brown',
  'goldenrod-red',
  'blue-white',
  'red-green',
  'yellow-pink',
]

class TeamMatches extends Component {
  constructor() {
    super()
    const randomNumber = Math.floor(Math.random() * 10)
    const randomGradientColor = gradientColors[randomNumber]
    this.state = {
      teamMatchDetails: [],
      isLoading: true,
      randomGradient: randomGradientColor,
    }
  }

  componentDidMount() {
    this.getTeamMatch()
  }

  getTeamMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const teamBannerUrl = data.team_banner_url
    const latestDetails = data.latest_match_details
    const latestMatchDetails = {
      competingTeam: latestDetails.competing_team,
      competingTeamLogo: latestDetails.competing_team_logo,
      firstInnings: latestDetails.first_innings,
      date: latestDetails.date,
      id: latestDetails.id,
      manOfTheMatch: latestDetails.man_of_the_match,
      matchStatus: latestDetails.match_status,
      result: latestDetails.result,
      secondInnings: latestDetails.second_innings,
      umpires: latestDetails.umpires,
      venue: latestDetails.venue,
    }
    const recentMatches = data.recent_matches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      id: eachItem.id,
      result: eachItem.result,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      firstInnings: eachItem.first_innings,
      secondsInnings: eachItem.second_innings,
    }))

    this.setState({
      teamMatchDetails: {
        teamBannerImageUrl: teamBannerUrl,
        latestMatchDetailsUpdated: latestMatchDetails,
        recentMatchesUpdated: recentMatches,
      },
      isLoading: false,
    })
  }

  renderTeamMatch = () => {
    const {teamMatchDetails, randomGradient} = this.state
    const {
      teamBannerImageUrl,
      latestMatchDetailsUpdated,
      recentMatchesUpdated,
    } = teamMatchDetails
    const {id} = latestMatchDetailsUpdated

    return (
      <div className={`team-match-bg-container ${randomGradient}`}>
        <img
          src={teamBannerImageUrl}
          className="banner-image"
          alt="team banner"
        />
        <p className="latest-matches-heading">Latest Matches</p>
        <LatestMatch
          key={id}
          latestMatchDetailsUpdated={latestMatchDetailsUpdated}
          recentMatchesUpdated={recentMatchesUpdated}
        />
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatch()
        )}
      </div>
    )
  }
}

export default TeamMatches
