export const getReposPerLang = (repos) => {
    const reposPerLang = {};
    repos.forEach((repo) => {
        if (reposPerLang[repo.language]) {
            reposPerLang[repo.language] += 1;
        } else {
            reposPerLang[repo.language] = 1;
        }
    });
    return reposPerLang;
}