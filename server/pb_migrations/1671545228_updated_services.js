migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0955as026hcvk6f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xwf619vb",
    "name": "created_by",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "qcbkb3kgdadfp9m",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0955as026hcvk6f")

  // remove
  collection.schema.removeField("xwf619vb")

  return dao.saveCollection(collection)
})
