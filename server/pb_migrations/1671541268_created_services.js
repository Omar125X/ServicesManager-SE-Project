migrate((db) => {
  const collection = new Collection({
    "id": "0955as026hcvk6f",
    "created": "2022-12-20 13:01:08.328Z",
    "updated": "2022-12-20 13:01:08.328Z",
    "name": "services",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1dkuhyn6",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "she7s1nf",
        "name": "status",
        "type": "bool",
        "required": true,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0955as026hcvk6f");

  return dao.deleteCollection(collection);
})
