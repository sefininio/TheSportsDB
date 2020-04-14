import axios from 'axios';
import { ApolloError } from 'apollo-server';
import {
    errorDispatcher,
    validationErrorDispatcher,
} from '../errors/ErrorDispatcher';

export const API_ENDPOINTS = {
    EVENT: 'lookupevent',
    LEAGUE: 'lookupleague',
    TEAM: 'lookupteam',
    PLAYER: 'lookupplayer',
}

export const DATA_PROPS = {
    EVENT: 'events',
    LEAGUE: 'leagues',
    TEAM: 'teams',
    PLAYER: 'players',
    TABLE: 'table',
}

/**
 *
 * @param {*} options
 *      dataField: DATA_PROPS (Required)
 *      endpoint: API_ENDPOINTS (Required)
 *      validate: validation function returns false | validation error message
 *      transform: transform function
 */
export const createRetrieveResolver = options => {
    const retrieveOptions = {
        ...options,
        aggregate: async(_, args, ctx) => {
            const url = `${ctx.baseUrl}${options.endpoint}.php?id=${args.id}`;
            const res = await axios.get(url);
            return res.data;
        }
    }

    return createResolver(retrieveOptions);
}

/**
 *
 * @param {*} options
 *      dataField: DATA_PROPS (Required)
 *      aggregate: data aggreagtor function (Required)
 *      validate: validation function returns false | validation error message
 *      transform: transform function
 */
export const createResolver = options => async(_, args, ctx) => {
    if (!options.aggregate || !options.dataField) {
        return errorDispatcher('Aggregtor function and dataField are required.');
    }

    if (options.validate) {
        const validationResult = options.validate(args);
        if (validationResult) {
            return validationErrorDispatcher(validationResult);
        }
    }

    const data = await options.aggregate(_, args, ctx);
    const resolvedData = data[options.dataField];
    return resolvedData && options.transform ? options.transform(resolvedData) : resolvedData;
}
