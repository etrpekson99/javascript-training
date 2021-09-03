const express = require('express');
const mongodb = require('mongodb');
const { MongoClient } = require("mongodb");

const router = express.Router();

const uri =
  "mongodb+srv://elijah:password@share-my-place-cluster.p8d8b.mongodb.net/locations?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const locationStorage = {
    locations: [],
};

// only incoming post requests to add-location will make it here
router.post('/add-location', (req, res, next) => {
    // we can also add validation here

    client.connect(function(err, client) {
        const db = client.db('locations');

        // Insert a single document
        db.collection('user-locations').insertOne(
            {
                address: req.body.address,
                coords: { lat: req.body.lat, lng: req.body.lng }
            },
            function(err, r) {
                // if (err) {}
                console.log(r);
                res.json({ message: 'Stored location!', locationId: r.insertedId });
            }
        );
    });
});

router.get('/location/:locationId', (req, res, next) => {
    const locationId = req.params.locationId;

    client.connect(function(err, client) {
        const db = client.db('locations');
    
        // Insert a single document
        db.collection('user-locations').findOne(
          {
            _id: new mongodb.ObjectId(locationId) // ObjectId is a mongodb-specific data type
          },
          function(err, doc) {
            // if (err) {}
            if (!doc) {
              return res.status(404).json({ message: 'Not found!' });
            }

            res.json({
                address: doc.address,
                coordinates: doc.coords,
            });
          }
        );
    });
});

module.exports = router;