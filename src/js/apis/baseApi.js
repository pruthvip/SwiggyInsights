import request from 'superagent';

const appCache = {};

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

        if (appCache[url]) {
            return new Promise((resolve, reject) => {
                resolve(appCache[url]);
            })
        }

        return new Promise((resolve, reject) => {
            request.get(url)
                .set('Accept', 'application/json')
                .query(params)
                .end((err, res) => {
                    if (err) {
                        return reject(err.response ? err.response.body : 'Unknown API error');
                    }

                    appCache[url] = res.body;
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

        console.log('url ', url, params);

        return new Promise((resolve, reject) => {
            request.post(url)
                .set('Accept', 'application/json')
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
