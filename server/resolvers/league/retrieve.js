import leagueTransform from './LeagueTransform';
import { createRetrieveResolver, API_ENDPOINTS, DATA_PROPS } from '../ResolverFactory';

const resolver = createRetrieveResolver({
    endpoint: API_ENDPOINTS.LEAGUE,
    dataField: DATA_PROPS.LEAGUE,
    transform: leagueTransform,
});

export default resolver;
