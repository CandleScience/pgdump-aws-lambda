const path = require('path')

module.exports = {
    PGDATABASE: process.env.PGDATABASE,
    PGUSER: process.env.PGUSER,
    PGPASSWORD: process.env.PGPASSWORD,
    PGHOST: process.env.PGHOST,
    S3_BUCKET: process.env.S3_BUCKET,
    S3_ROOT_DIRECTORY: process.env.S3_ROOT_DIRECTORY,
    S3_REGION: process.env.S3_REGION || 'us-east-1',
    PGDUMP_PATH: path.join(__dirname, '../bin/postgres-9.6.2')
}
