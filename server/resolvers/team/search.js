import axios from 'axios';
import teamTransform from './TeamTransform';

const teamByNameResolver = async(_, args, ctx) => {
    const url = `${ctx.baseUrl}searchteams.php?t=${args.name}`;
    const res = await axios.get(url);

    return teamTransform(res.data.teams);
};

export default teamByNameResolver;