const config = {
    base: {
        api: {
            rest_one: {
                https_enabled: false,
                host: '52.74.254.35:8086'
            },
            governance: {
                https_enabled: false,
                host: '172.16.120.73:8092'
            },
            governanceLogging: {
                https_enabled: false,
                host: '54.255.196.97:8087'
            }
        }
    },
    development: {
        api: {
            governance: {
                https_enabled: false,
                host: '54.255.196.97:8001'
            },
            governanceLogging: {
                https_enabled: false,
                host: '54.255.196.97:8087'
            }
        }
    },
    uat: {
        api: {
            rest_one: {
                https_enabled: false,
                host: '10.0.10.201:8086'
            },
            governance: {
                https_enabled: false,
                host: '54.255.196.97:8001'
            }
        }
    },
    production: {
        api: {
            rest_one: {
                https_enabled: false,
                host: 'rest-one-service.swiggyint.in'
            }
        }
    }
};

const env = process.env.NODE_ENV || 'development';

config[env] = Object.assign(config[env], config.base);

module.exports = config[env];
