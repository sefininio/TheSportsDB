const transform = (data) => {
    return {
        website: data.strWebsite,
        facebook: data.strFacebook,
        twitter: data.strTwitter,
        instagram: data.strInstagram,
        youtube: data.strYoutube,
        rssFeed: data.strRSS,
    };
}

const socialResolver = (parent, args, ctx) => {
    return transform(parent);
};

export default socialResolver;