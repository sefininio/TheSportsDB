const League = `
    type League {
        id: ID!                             # idLeague
        name: String                        # strLeague
        altName: String                     # strLeagueAlternate
        sportType: String                   # strSport
        division: String                    # strDivision
        cupId: ID                           # idCup
        currentSeason: String               # strCurrentSeason
        formedYear: Int                     # intFormedYear
        firstEvent: String                  # dateFirstEvent
        gender: String                      # strGender
        country: String                     # strCountry
        description: String                 # strDescriptionEN
        badgeImg: String                    # strBadge
        bannerImg: String                   # strBanner
        logoImg: String                     # strLogo
        posterImg: String                   # strPoster
        trophyImg: String                   # strTrophy
        naming: String                      # strNaming
        social: Social
    }
`;

export default League;
