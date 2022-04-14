import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competeTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = recentMatchDetails

  let matchResult = null

  if (matchStatus === 'Won') {
    matchResult = true
  } else {
    matchResult = false
  }

  const resultClassName = matchResult ? 'won' : 'loss'

  return (
    <li className="recent-match-card">
      <img
        src={competingTeamLogo}
        className="recent-match-image"
        alt={`competing team ${competeTeam}`}
      />
      <p className="recent-match-heading competing-team">{competeTeam}</p>
      <p className="recent-match-heading">{result}</p>
      <p className={`recent-match-heading ${resultClassName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
