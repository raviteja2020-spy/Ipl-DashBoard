import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamDetails: [],
    formattedMatchDetails: [],
    recentMatch: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const latestMatchDetails = {
      competingTeam: formattedData.latestMatchDetails.competing_team,
      competingTeamLogo: formattedData.latestMatchDetails.competing_team_logo,
      date: formattedData.latestMatchDetails.date,
      firstInnings: formattedData.latestMatchDetails.first_innings,
      id: formattedData.latestMatchDetails.id,
      manOfTheMatch: formattedData.latestMatchDetails.man_of_the_match,
      matchStatus: formattedData.latestMatchDetails.match_status,
      result: formattedData.latestMatchDetails.result,
      secondInnings: formattedData.latestMatchDetails.second_innings,
      umpires: formattedData.latestMatchDetails.umpires,
      venue: formattedData.latestMatchDetails.venue,
    }

    const recentMatchDetails = formattedData.recentMatches.map(eachMatch => ({
      competeTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    this.setState({
      teamDetails: formattedData,
      formattedMatchDetails: latestMatchDetails,
      recentMatch: recentMatchDetails,
      isLoading: false,
    })
  }

  renderMatchDetails = () => {
    const {teamDetails, formattedMatchDetails, recentMatch} = this.state
    const {teamBannerUrl} = teamDetails
    console.log(recentMatch)

    return (
      <div className="team-card">
        <img src={teamBannerUrl} className="banner" alt="team banner" />
        <h1 className="latest-match-heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={formattedMatchDetails} />
        <ul className="recent-match-list">
          {recentMatch.map(eachMatch => (
            <MatchCard key={eachMatch.id} recentMatchDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team-match-card ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>{this.renderMatchDetails()}</div>
        )}
      </div>
    )
  }
}

export default TeamMatches
