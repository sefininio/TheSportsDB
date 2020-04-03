const Team = `
    type Team {
        id: ID!                             # idTeam
        name: String                        # strTeam
        shortName: String                   # strTeamShort
        altName: String                     # strAlternate
        formedYear: Int                     # intFormedYear
        sportType: String                   # strSport
        keywords: String                    # strKeywords
        description: String                 # strDescriptionEN
        country: String                     # strCountry
        gender: String                      # strGender
        badgeImg: String                    # strTeamBadge
        jerseyImg: String                   # strTeamJersey
        logoImg: String                     # strTeamLogo
        bannerImg: String                   # strTeamBanner
        stadium: Stadium
        social: Social
        league: [League]
    }
`;

export default Team;