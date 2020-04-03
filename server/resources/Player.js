const Player = `
    type Player {
        id: ID!                             # idPlayer
        nationality: String                 # strNationality
        name: String                        # strPlayer
        sportType: String                   # strSport
        bornDate: String                    # dateBorn
        number: String                      # strNumber
        signedDate: String                  # dateSigned
        wage: String                        # strWage
        outfitter: String                   # strOutfitter
        agent: String                       # strAgent
        playerManagerId: ID                 # idPlayerManager
        birthLocation: String               # strBirthLocation
        description: String                 # strDescriptionEN
        gender: String                      # strGender
        side: String                        # strSide
        position: String                    # strPosition
        college: String                     # strCollege
        height: String                      # strHeight
        weight: String                      # strWeight
        thumbImg: String                    # strThumb
        cutout: String                      # strCutout
        banner: String                      # strBanner
        social: Social
        team: [Team]
    }
`;

export default Player;
