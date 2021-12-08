import { HeroComponent } from '../../components/GithubPageComps';
import GithubAPI from '../../services/githubAPI';

const GithubPage = ({ user }) => {
    return (
        <>
            <HeroComponent user={user} />
        </>
    );
};

export default GithubPage;

export const getStaticProps = async () => {
    const github = new GithubAPI();

    const user = await github.getMe();

    return {
        props: {
            user,
        },
    };
};
