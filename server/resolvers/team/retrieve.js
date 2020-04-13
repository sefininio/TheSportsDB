import teamTransform from './TeamTransform';
import { createRetrieveResolver, API_ENDPOINTS, DATA_PROPS } from '../ResolverFactory';

const resolver = createRetrieveResolver({
    endpoint: API_ENDPOINTS.TEAM,
    dataField: DATA_PROPS.TEAM,
    transform: teamTransform,
});

export default resolver;
