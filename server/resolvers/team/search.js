import axios from 'axios';
import { ApolloError } from 'apollo-server';
import teamTransform from './TeamTransform';
import { createResolver, DATA_PROPS } from '../ResolverFactory';
import errorDispatcher from '../../errors/ErrorDispatcher';

const aggregate = async(_, args, ctx) => {
    let url;
    if (args.name) {
        url = `${ctx.baseUrl}searchteams.php?t=${args.name}`;
    } else if (args.leagueId) {
        url = `${ctx.baseUrl}lookup_all_teams.php?id=${args.leagueId}`;
    } else {
        return errorDispatcher(_, args, 'Cannot search Team: name or leagueId not provided.');
    }

    const res = await axios.get(url);

    return res.data;
};

const resolver = createResolver({
    dataField: DATA_PROPS.TEAM,
    aggregate,
    transform: teamTransform,
});

export default resolver;
