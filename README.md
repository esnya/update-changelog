# update-changelog
[![npm package](https://img.shields.io/npm/v/update-changelog.svg?style=flat-square)](https://www.npmjs.org/package/update-changelog)
[![Build Status](https://img.shields.io/travis/ukatama/update-changelog/master.svg?style=flat-square)](https://travis-ci.org/ukatama/update-changelog)
[![PeerDependencies](https://img.shields.io/david/peer/ukatama/update-changelog.svg?style=flat-square)](https://david-dm.org/ukatama/update-changelog#info=peerDependencies&view=list)
[![Dependencies](https://img.shields.io/david/ukatama/update-changelog.svg?style=flat-square)](https://david-dm.org/ukatama/update-changelog)
[![DevDependencies](https://img.shields.io/david/dev/ukatama/update-changelog.svg?style=flat-square)](https://david-dm.org/ukatama/update-changelog#info=devDependencies&view=list)

Update [Unreleased] in CHANGELOG.md to current package version.

## Usage
Add script `version` to `package.json`.

```package.json
  "scripts": {
    "version": "update-changelog && git add CHANGELOG.md"
  }
```
