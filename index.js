const axios = require('axios');

class API {
    constructor(options = {}) {
        this.options = options;
        this.baseURL = 'https://api.keksik.io/';
    }

    async sendRequest(action, options = {}) {
        try {
            const result = await axios.post(`${this.baseURL}${action}`, {
                ...this.options,
                ...options
            });
            return result.data;
        } catch (error) {
            throw new Error('Error sending request:\n' + error);
        }
    }

    // Donates
    async donatesGet(options = {}) {
        return await this.sendRequest('donates/get', options);
    }

    async donatesGetLast(options = {}) {
        return await this.sendRequest('donates/get-last', options);
    }

    async donatesChangeStatus(options = {}) {
        return await this.sendRequest('donates/change-status', options);
    }

    async donatesAnswer(options = {}) {
        return await this.sendRequest('donates/answer', options);
    }

    async donatesChangeRewardStatus(options = {}) {
        return await this.sendRequest('donates/change-reward-status', options);
    }

    // Campaigns
    async campaignsGet(options = {}) {
        return await this.sendRequest('campaigns/get', options);
    }

    async campaignsGetActive(options = {}) {
        return await this.sendRequest('campaigns/get-active', options);
    }

    async campaignsGetRewards(options = {}) {
        return await this.sendRequest('campaigns/get-rewards', options);
    }

    async campaignsChange(options = {}) {
        return await this.sendRequest('campaigns/change', options);
    }

    async campaignsChangeReward(options = {}) {
        return await this.sendRequest('campaigns/change-reward', options);
    }

    // Payments
    async paymentsGet(options = {}) {
        return await this.sendRequest('payments/get', options);
    }

    async paymentsCreate(options = {}) {
        return await this.sendRequest('payments/create', options);
    }

    // Balance
    async getBalance(options = {}) {
        return await this.sendRequest('balance', options);
    }
}

module.exports = API;
