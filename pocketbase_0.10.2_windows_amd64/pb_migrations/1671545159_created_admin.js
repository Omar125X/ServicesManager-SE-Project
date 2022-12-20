migrate((db) => {
  const collection = new Collection({
    "id": "qcbkb3kgdadfp9m",
    "created": "2022-12-20 14:05:59.486Z",
    "updated": "2022-12-20 14:05:59.486Z",
    "name": "admin",
    "type": "auth",
    "system": false,
    "schema": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qcbkb3kgdadfp9m");

  return dao.deleteCollection(collection);
})
