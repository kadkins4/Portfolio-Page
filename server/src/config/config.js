module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'portfolio',
        user: process.env.DB_USER ||'root',
        password: process.env.DB_PASS || 'password',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.DB_HOST || 'localhost',
            storage: './portfolio.sqlite',
            operatorsAliases: false
        }
    }
}