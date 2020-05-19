# ****Theory****

### What is it?

- A *runtime environment* for Javascript.
- Backend Development
- Largest Library

### Advantage?
- Superfast
- Fewer lines of code
- Front and back end have consistent code

### Environment?
- Browsers have JS engines to have js code run in browsers
- embedded V8 JS engine from chrome in a c++ program and called it node.
- so it's kinda like a browser

### Programmig language?
**NO**
- NOT EVEN A FRAMEWORK

### Properties? Characteristics?

- Asynchronous
- Single thread can handle multiple requests
- Has an event queue which is always monitored
- scallable
- good for I/O intensive apps
- **bad** for CPU intensive apps.

### files

use `readStream and writeStream` and use chunks instead.

use `pipe` for writing from f1 to f2.

### Create package.json file - hold metatdata for our project
 in cmd: npm init, default is current

 description

 entrypoint:

### Get modules

- npmjson.com : For packages.
- `npm i lodash`
- `npm uninstall lodash`

### Semantic Versioning

- major.minor.patch
- `^` - major.x.x
- `~` - major.minor.x
- _nothing_ - mojor.minor.x

### Express server

- queries are optional
- just use `res.send(message)`
- access parameters with `req.params.parameterName`
#### Staic files using Express:

- 
