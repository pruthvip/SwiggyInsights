import request from 'superagent';

/**
 * Base api calls
 *
 * - Add access Id to the headers
 * - Append '/api' to every url
 */
export default {
    /**
     * Wrapper function for making `GET` api calls
     *
     * @param  {String} url
     * @param  {Object} params
     *
     * @return {Promise}
     */
    get: (url, params = {}) => {
        url = `/api/${url}`;

        return new Promise((resolve, reject) => {
            request.get(url)
                .query(params)
                .end((err, res) => {
                    if (err) {
                        return reject(err.response ? err.response.body : 'Unknown API error');
                    }

                    resolve(res.body);
                });
        });
    },


    /**
     * Wrapper function for making `POST` api calls
     *
     * @param  {String} url
     * @param  {Object} params
     *
     * @return {Promise}
     */
    post: (url, params = {}) => {
        url = `/api/${url}`;

        return new Promise((resolve, reject) => {
            request.post(url)
                .send(params)
                .end((err, res) => {
                    if (err) {
                        return reject(err.response ? err.response.body : 'Unknown API error');
                    }

                    resolve(res.body);
                });
        });
    },


    /**
     * Wrapper function for making `PUT` api calls
     *
     * @param  {String} url
     * @param  {Object} params
     *
     * @return {Promise}
     */
    put: (url, params = {}) => {
        url = `/api/${url}`;

        return new Promise((resolve, reject) => {
            request.put(url)
                .send(params)
                .end((err, res) => {
                    if (err) {
                        return reject(err.response ? err.response.body : 'Unknown API error');
                    }

                    resolve(res.body);
                });
        });
    },


    /**
     * Wrapper function for making `DELETE` api calls
     *
     * @param  {String} url
     * @param  {Object} params
     *
     * @return {Promise}
     */
    delete: (url, params = {}) => {
        url = `/api/${url}`;

        return new Promise((resolve, reject) => {
            request.delete(url)
                .send(params)
                .end((err, res) => {
                    if (err) {
                        return reject(err.response ? err.response.body : 'Unknown API error');
                    }

                    resolve(res.body);
                });
        });
    }
};
