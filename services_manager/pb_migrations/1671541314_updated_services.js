migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0955as026hcvk6f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gytawt4t",
    "name": "assigned_to",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0955as026hcvk6f")

  // remove
  collection.schema.removeField("gytawt4t")

  return dao.saveCollection(collection)
})
