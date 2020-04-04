import leagueTransform from './LeagueTransform';
import createRetrieveResolver, { API_ENDPOINTS } from '../CreateRetrieveResolver';

const resolver = createRetrieveResolver({
    endpoint: API_ENDPOINTS.LEAGUE,
    transform: leagueTransform,
});

export default resolver;
