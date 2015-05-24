## [ReactJS](https://facebook.github.io/react/) Sample project with [Mocha](http://mochajs.org/) and [Jsdom](https://github.com/tmpvar/jsdom)

The project is built on **[node](http://nodejs.org) v2.1.0** and **npm 2.10.1**

### \# to download npm dependencies:

run `npm install`

### \# to run mocha tests:

run `npm test`

### \# to run tests with [gulp](http://gulpjs.com/):

run `gulp mocha`

It's recommended to use `npm test` to run all the tests.

### \# the project structure is:

<pre><code>
  react-mocha-jsdom/
    app/
      components/
        componentName/
          __test__/
            implementation-test.js
          implementation.js
    gulpfile.js
    jsdom-setup.js
    package.json
    README.md
</code></pre>

### \# tips

`./node_modules/.bin/mocha --compilers js:babel/register  app/components/**/__test__/*-test.js jsdom-setup.js`

This command in package.json is the command to run mocha tests.
* it uses babeljs register to interpret JSX contents
* it uses asterisks to include multiple files
* `jsdom-setup.js` is where the dom is setted up using jsdom
* if you put `jsdom-setup.js` before `app/components/\*\*/\_\_test\_\_/\*-test.js`, an error occurs, however, you can use `mocha test1.js test2.js` or `mocha test2.js test1.js`
