# Angular and Node seed app with gulp workflow!
### Overview:
Live demo here: [https://angular-node-seed-project.herokuapp.com](https://angular-node-seed-project.herokuapp.com).

This is a minimal but high powered seed app that uses Angular.js 1, Node.js with Express, and a Gulp Browserify workflow!

The demo above utilizes Angular-Material so that is included as well.

To get started:
```
* `npm install`
* `npm install -g gulp` (if don't have gulp)
* `gulp build`
```

Running locally/Dev setup:
```
* Run `node server.js` from project root
* Run `gulp` from project root (while leaving step 1 so will need two tabs)
* It is now running at http://localhost:3002/
* Any changes to js files will automatically be rebundled on the fly
```

Deployment:
```
For now, I am using this Heroku buildpack [https://github.com/timdp/heroku-buildpack-nodejs-gulp.git] (https://github.com/timdp/heroku-buildpack-nodejs-gulp.git).

I intend to improve the gulpfile and various other systems in the near future so that deployment is more flexible.
```

Overview of structure:
