import axios from 'axios';
import leagueTransform from '../transforms/LeagueTransform';

const leagueResolver = async(_, args, ctx) => {
    const url = `${ctx.baseUrl}lookupleague.php?id=${args.leagueId}`;
    const res = await axios.get(url);

    return leagueTransform(res.data.leagues);
};

export default leagueResolver;
