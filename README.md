# pure-jest-es6-runner
Quickly write es6+ modules with airbnb linting and jest tests and no other frameworks.

*A simple react-style setup without react.*

Made for technical JS challenges where you need linting and a setup you're familiar with.

If you need to write ES5, copy the example of src/sample.es5.style.js and add the file to the .eslintignore (or eslint will flip out)

You can use *npm run test* but it's best used with VS Code debugging.

![VS Code Debug Preview]https://github.com/nwallace534/pure-jest-es6-runner/master/img/vscodeDebugExample.png "VS Code Debug Preview")

Add a launch.json for great debugging:
```json
{
    "version": "0.2.0",
    "configurations": [
      {
        "name": "Debug Jest Tests",
        "type": "node",
        "request": "launch",
        "runtimeArgs": [
          "--inspect-brk",
          "${workspaceRoot}/node_modules/.bin/jest",
          "--runInBand"
        ],
        "console": "integratedTerminal",
        "internalConsoleOptions": "neverOpen",
        "port": 9229
      }
    ]
}
```

Inclusion of babel was unavoidable as jest and node are not ready for import syntax.


