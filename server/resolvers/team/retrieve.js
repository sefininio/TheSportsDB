import teamTransform from './TeamTransform';
import createRetrieveResolver, { API_ENDPOINTS } from '../CreateRetrieveResolver';

const resolver = createRetrieveResolver({
    endpoint: API_ENDPOINTS.TEAM,
    transform: teamTransform,
});

export default resolver;
