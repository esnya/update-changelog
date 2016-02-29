# update-changelog
[![npm package](https://img.shields.io/npm/v/update-changelog.svg?style=flat-square)](https://www.npmjs.org/package/update-changelog)
[![Build Status](https://img.shields.io/travis/ukatama/update-changelog/master.svg?style=flat-square)](https://travis-ci.org/ukatama/update-changelog)
[![PeerDependencies](https://img.shields.io/david/peer/ukatama/update-changelog.svg?style=flat-square)](https://david-dm.org/ukatama/update-changelog#info=peerDependencies&view=list)
[![Dependencies](https://img.shields.io/david/ukatama/update-changelog.svg?style=flat-square)](https://david-dm.org/ukatama/update-changelog)
[![DevDependencies](https://img.shields.io/david/dev/ukatama/update-changelog.svg?style=flat-square)](https://david-dm.org/ukatama/update-changelog#info=devDependencies&view=list)

Update [Unreleased] in CHANGELOG.md to current package version.

## Usage
1. Install with npm
  ```bash
  $ npm install --save-dev update-changelog
  ```

2. Add script `version` to `package.json`.

  ```package.json
    "scripts": {
      "version": "update-changelog && git add CHANGELOG.md"
    }
  ```
## Example
```
$ git tag
v1.0.0
$ npm version minor
v1.1.0
...
$ git tag
v1.0.0
v1.1.0
$ git diff HEAD^
 [master]> git diff HEAD^
diff --git a/CHANGELOG.md b/CHANGELOG.md
index b799e02..374de36 100644
--- a/CHANGELOG.md
+++ b/CHANGELOG.md
@@ -2,7 +2,7 @@
 All notable changes to thpris oject will be documented in this file.
 This project adheres to [Semantic Versioning](http://semver.org/).

-## [Unreleased]
+## [1.1.0] - 2016-02-29
 ### Added
 - Feature1
 - Feature2
diff --git a/package.json b/package.json
index 506db12..df0a2e4 100644
--- a/package.json
+++ b/package.json
@@ -1,6 +1,6 @@
 {
   "name": "example",
-  "version": "1.0.0",
+  "version": "1.1.0",
   "description": "Example package",
   "main": "index.js",
   "scripts": {
```
