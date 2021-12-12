import { HeroComponent, Stats } from '../../components/GithubPageComps';
import { getLinesOfCode, getUser } from '../../services/githubGQL';

const GithubPage = ({ user, totalLinesOfcode }) => {
    return (
        <>
            <HeroComponent user={user} linesOfCode={totalLinesOfcode} />
            <Stats name={user.name} />
        </>
    );
};

export default GithubPage;

export const getStaticProps = async () => {
    const user = await getUser('Rahat47');

    const { totalLinesOfcode } = await getLinesOfCode('Rahat47');

    return {
        props: {
            user,
            totalLinesOfcode,
        },
    };
};
