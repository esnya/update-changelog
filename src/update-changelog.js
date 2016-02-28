'use strict';

const fs = require('fs-promise');
const moment = require('moment');

const version = process.env.npm_package_version;
const date = moment().format('YYYY-MM-DD');

fs.readFile('CHANGELOG.md')
    .then((data) =>
        data
            .toString()
            .replace(/## \[Unreleased\]/, `## [${version}] - ${date}`)
    )
    .then((data) => fs.writeFile('CHANGELOG.md', data))
    .catch((e) => {
        throw e;
    });
