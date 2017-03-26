const Schemas = [
  {
    schema: [
      {
        name: 'DataCache',
        primaryKey: 'key',
        properties: {
          key: 'string',
          value: 'string'
        }
      }
    ], schemaVersion: 1, migration: (oldRealm, newRealm) => {}
  },
  {
    schema: [
      {
        name: 'DataCache',
        primaryKey: 'key',
        properties: {
          key: 'string',
          value: 'string',
          createdAt: 'date'
        }
      }
    ], schemaVersion: 2, migration: (oldRealm, newRealm) => {}
  }
];
export default Schemas;