const _ = require('lodash')

const items = [1,[2,[4]]]
const newitem = _.flattenDeep(items);
console.log(newitem)