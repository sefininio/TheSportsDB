const playerTransform = (data) => {
    const transformed = data.map(player => {
        const {
            idPlayer,
            strNationality,
            strPlayer,
            strSport,
            strNumber,
            strWage,
            strOutfitter,
            strAgent,
            idPlayerManager,
            dateBorn,
            dateSigned,
            strBirthLocation,
            strDescriptionEN,
            strGender,
            strSide,
            strPosition,
            strCollege,
            strHeight,
            strWeight,
            strThumb,
            strCutout,
            strBanner,
            ...otherProps
        } = player;

        return {
            id: idPlayer,
            nationality: strNationality,
            name: strPlayer,
            sportType: strSport,
            bornDate: dateBorn,
            number: strNumber,
            signedDate: dateSigned,
            wage: strWage,
            outfitter: strOutfitter,
            agent: strAgent,
            playerManagerId: idPlayerManager,
            birthLocation: strBirthLocation,
            description: strDescriptionEN,
            gender: strGender,
            side: strSide,
            position: strPosition,
            college: strCollege,
            height: strHeight,
            weight: strWeight,
            thumbImg: strThumb,
            cutout: strCutout,
            banner: strBanner,
            ...otherProps
        };
    });

    return transformed;
};

export default playerTransform;
