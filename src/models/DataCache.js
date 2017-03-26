import db from '../config/Db';

export default class DataCache {
  static setCache(key, value) {
    let caches = db.objects('DataCache').filtered('key="' + key + '"');
    db.write(() => {
      if (caches.length > 0) db.create('DataCache', {key: key, value: JSON.stringify(value), createdAt: new Date()}, true);
      else db.create('DataCache', {key: key, value: JSON.stringify(value), createdAt: new Date()});
    });
  }

  static getCache(key) {
    let caches = db.objects('DataCache').filtered('key="' + key + '"');
    if (caches.length > 0) return JSON.parse(caches[0].value);
    return undefined;
  }
}