describe('update-changelog', () => {
    jest.autoMockOff();

    const fork = require('child_process').fork;
    const fs = require('mz/fs');
    const path = require('path');

    const bin = path.join(__dirname, '../update-changelog.js');
    const tmp = path.join(__dirname, '../../tmp');
    const file = path.join(tmp, 'CHANGELOG.md');

    pit('replaces [Unreleased]', () =>
        fs.writeFile(file, '## [Unreleased]\n## [0.0.1]')
            .then(() =>
                new Promise((resolve) => {
                    const child = fork(bin, {
                        cwd: tmp,
                        env: {
                            npm_package_version: '0.1.0'
                        }
                    });
                    child.on('close', (code) => {
                        expect(code).toBe(0);
                        resolve();
                    });
                })
            )
            .then(() => fs.readFile(file))
            .then((data) => {
                expect(data.toString()).toMatch(/## \[0\.1\.0\] - [0-9]{4}-[0-9]{2}-[0-9]{2}/);
            })
    );
});
