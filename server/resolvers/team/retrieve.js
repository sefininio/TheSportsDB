import axios from 'axios';
import teamTransform from '../transforms/TeamTransform';

const teamResolver = async(_, args, ctx) => {
    const url = `${ctx.baseUrl}lookupteam.php?id=${args.teamId}`;
    const res = await axios.get(url);

    return teamTransform(res.data.teams);
};

export default teamResolver;