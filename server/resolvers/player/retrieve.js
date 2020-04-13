import playerTransform from './PlayerTransform';
import { createRetrieveResolver, API_ENDPOINTS, DATA_PROPS } from '../ResolverFactory';

const resolver = createRetrieveResolver({
    endpoint: API_ENDPOINTS.PLAYER,
    dataField: DATA_PROPS.PLAYER,
    transform: playerTransform,
});

export default resolver;
