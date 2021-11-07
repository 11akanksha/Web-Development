# Commands needed to work with express.js:

We can use our cmd or (as i did) use the vscode's terminal.
The following is a stepwise guide for future reference,as I am just starting out with express.

-  npm init


O/P:
```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (my_express_server)
version: (1.0.0)
description: My first express server
entry point: (server.js)
test command:
git repository:
keywords:
author: Akanksha N Shenoy
license: (ISC)
About to write to C:\Users\KIIT\OneDrive\Documents\Akanksha\VSC programs\self practice\webDev\My_express_server\package.json:

{
  "name": "my_express_server",
  "version": "1.0.0",
  "description": "My first
  express server",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "Akanksha N Shenoy",
  "license": "ISC"
}


Is this OK? (yes)
```

Then we do:
-  npm install express

And then write code in our server.js file and run it using:
- node server.js
