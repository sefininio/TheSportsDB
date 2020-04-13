import eventTransform, { eventTeamTransform } from './EventTransform';
import { createRetrieveResolver, API_ENDPOINTS, DATA_PROPS } from '../ResolverFactory';

const resolver = createRetrieveResolver({
    endpoint: API_ENDPOINTS.EVENT,
    dataField: DATA_PROPS.EVENT,
    transform: eventTransform,
});

export const eventTeamResolver = (event, type) => {
    return eventTeamTransform(event, type);
}

export default resolver;
