module.exports = {
    app: {
        apiPath: '/api'
    },
    mongo: {
        host: "127.3.100.130:27017",
        db: "jenkings",
        user: "admin",
        pass: "hVdCnwfBTr-i"
    },
    git: {
        domain: "https://gitlab.nowtv.bskyb.com",
        token: "fHddn8qV87AWosfhGz5r",
        project: "iceberg"
    },
    ci: {
        domain: "http://build.nowtv.bskyb.com",
        view: "6.1%20Iceberg%20Editorial",
        jobs: [
            "iceberg-macslave-frontend-unit",
            "iceberg-macslave-backend-unit",
            "iceberg-macslave-backend-e2e",
            "iceberg-macslave-protractor-shard-1",
            "iceberg-macslave-protractor-shard-2",
            "iceberg-macslave-protractor-shard-3"
        ]
    }
};
