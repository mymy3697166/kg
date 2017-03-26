import Realm from 'realm';
import Schemas from './Schemas';

let nextSchemaIndex = Realm.schemaVersion(Realm.defaultPath);
if (nextSchemaIndex > -1) {
  console.log(nextSchemaIndex);
  while (nextSchemaIndex < Schemas.length) {
    let migratedRealm = new Realm(Schemas[nextSchemaIndex++]);
    migratedRealm.close();
  }
}

const db = new Realm(Schemas[Schemas.length - 1]);
export default db;
