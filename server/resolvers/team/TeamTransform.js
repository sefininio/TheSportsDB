const teamTransform = (data) => {
    const transformed = data.map(team => {
        const {
            idTeam,
            strTeam,
            strTeamShort,
            strAlternate,
            intFormedYear,
            strSport,
            strKeywords,
            strDescriptionEN,
            strGender,
            strCountry,
            strTeamBadge,
            strTeamJersey,
            strTeamLogo,
            strTeamBanner,
            ...otherProps
        } = team;

        return {
            id: idTeam,
            name: strTeam,
            shortName: strTeamShort,
            altName: strAlternate,
            formedYear: intFormedYear,
            sportType: strSport,
            keywords: strKeywords,
            description: strDescriptionEN,
            gender: strGender,
            country: strCountry,
            badgeImg: strTeamBadge,
            jerseyImg: strTeamJersey,
            logoImg: strTeamLogo,
            bannerImg: strTeamBanner,
            ...otherProps
        };
    });

    return transformed;

};


export default teamTransform;
