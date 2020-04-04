import playerTransform from './PlayerTransform';
import createRetrieveResolver, { API_ENDPOINTS } from '../CreateRetrieveResolver';

const resolver = createRetrieveResolver({
    endpoint: API_ENDPOINTS.PLAYER,
    transform: playerTransform,
});

export default resolver;
