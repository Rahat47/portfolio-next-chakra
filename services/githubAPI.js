import axios from 'axios';

class GithubAPI {
    constructor() {
        this.access_token = process.env.GITHUB_ACCESS_TOKEN;
    }

    async getUser(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`, {
                headers: {
                    Authorization: `token ${this.access_token}`
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getMe() {
        try {
            const response = await axios.get(`https://api.github.com/user`, {
                headers: {
                    Authorization: `token ${this.access_token}`
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getRepos(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
                headers: {
                    Authorization: `token ${this.access_token}`
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getRepo(username, repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${username}/${repo}`, {
                headers: {
                    Authorization: `token ${this.access_token}`
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getRepoLanguages(username, repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${username}/${repo}/languages`, {
                headers: {
                    Authorization: `token ${this.access_token}`
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getRepoContributors(username, repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${username}/${repo}/contributors`, {
                headers: {
                    Authorization: `token ${this.access_token}`
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getRepoCommits(username, repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${username}/${repo}/commits`, {
                headers: {
                    Authorization: `token ${this.access_token}`
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getUserStats(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}/events/public`, {
                headers: {
                    Authorization: `token ${this.access_token}`
                }
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}


export default GithubAPI;