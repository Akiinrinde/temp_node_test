// nmp - global command, comes with node 
//local dependency - use it only in this particular project
// npm i <packageName> 

// global dependacy - use it in any project 
// npm install -g<packageName>

//package.json - manifest file (store importnat info avbout project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init -y (evertything default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)  ;
