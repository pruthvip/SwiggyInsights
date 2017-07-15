module.exports = {
    getProxyTarget: function (tag, config) {
        const tagConfig = config.api[tag];
        const protocol = tagConfig.https_enabled ? 'https' : 'http';
        const target = `${protocol}://${tagConfig.host}`;

        return target;
    }
};
