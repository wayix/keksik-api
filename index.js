const axios = require('axios');

class API {
    constructor(options = {}) {
        this.options = options;

        this.postURI = 'https://api.keksik.io/';
    }

    /**
     * donates
     */

    async donatesGet(options = {}) {
        const result = await this.sendRequest({
            action: 'donates/get',
            options
		})

        return result;
    }

    async donatesGetLast(options = {}) {
        const result = await this.sendRequest({
            action: 'donates/get-last',
            options
        })

        return result;
    }

    async donatesChangeStatus(options = {}) {
        const result = await this.sendRequest({
            action: 'donates/get-last',
            options
        })

        return result;
    }

    async donatesAnswer(options = {}) {
        const result = await this.sendRequest({
            action: 'donates/answer',
            options
        })

        return result;
    }

    async donatesChangeRewardStatus(options = {}) {
        const result = await this.sendRequest({
            action: 'donates/change-reward-status',
            options
        })

        return result;
    }
    
    /**
     * campaigns
     */

    async campaignsGet(options = {}) {
        const result = await this.sendRequest({
            action: 'campaigns/get',
            options
        })

        return result;
    }

    async campaignsGetActive(options = {}) {
        const result = await this.sendRequest({
            action: 'campaigns/get-active',
            options
        })

        return result;
    }

    async campaignsGetRewards(options = {}) {
        const result = await this.sendRequest({
            action: 'campaigns/get-rewards',
            options
        })

        return result;
    }

    async campaignsChange(options = {}) {
        const result = await this.sendRequest({
            action: 'campaigns/change',
            options
        })

        return result;
    }

    async campaignsChangeReward(options = {}) {
        const result = await this.sendRequest({
            action: 'campaigns/change-reward',
            options
        })

        return result;
    }

    /**
     * payments
     */

    async paymentsGet(options = {}) {
        const result = await this.sendRequest({
            action: 'payments/get',
            options
        })

        return result;
    }
    
    async paymentsCreate(options = {}) {
        const result = await this.sendRequest({
            action: 'payments/create',
            options
        })

        return result;
    }

    /**
     * balance
     */

    async balance(options = {}) {
        const result = await this.sendRequest({
            action: 'balance',
            options
        })

        return result;
    }

    async sendRequest(url = {}) {
        try {
            const result = await axios.post(`https://api.keksik.io/${url.action}`, {
                ...this.options,
                ...url.options
            });
            
            return result.data;
        }

        catch (e) {
            return new Error('Error sending request:\n' + e);
        }
	}
}

module.exports = API;