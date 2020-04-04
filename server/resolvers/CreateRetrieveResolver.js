import axios from 'axios';

export const API_ENDPOINTS = {
    EVENT: 'lookupevent',
    LEAGUE: 'lookupleague',
    TEAM: 'lookupteam',
    PLAYER: 'lookupplayer',
}

/**
 *
 * @param {*} options
 *      endpoint: API_ENDPOINTS
 *      transform: transform function
 */
const createRetrieveResolver = (options) => {
    return async(parent, args, ctx) => {
        const url = `${ctx.baseUrl}${options.endpoint}.php?id=${args.id}`;
        const res = await axios.get(url);

        return options.transform(res.data);
    }
}

export default createRetrieveResolver;
