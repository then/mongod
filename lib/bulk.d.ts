/**
 * WARNING: This file is autogenerated by `build.js` from in `/schema/`bulk.js
 */

import Promise = require("promise");

export default class Bulk {
  find(query: any): {upsert(): any, remove(): any, removeOne(): any, update(updateObj: any): any, updateOne(updateObj: any): any, replaceOne(updObj: any): any}
  insert(doc: any): void
  tojson(): Object
  toString(): Object
  execute(): Promise<any>
}