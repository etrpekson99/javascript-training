const express = require('express');

const router = express.Router();

const locationStorage = {
    locations: [],
};

// only incoming post requests to add-location will make it here
router.post('/add-location', (req, res, next) => {
    const id = Math.random();
    // we can also add validation here

    locationStorage.locations.push({
        id,
        address: req.body.address,
        coordinates: {
            lat: req.body.lat,
            lng: req.body.lng
        }
    });

    // send a json response
    res.json({
        message: 'Stored location',
        locationId: id,
    });
});

router.get('/location/:locationId', (req, res, next) => {
    const locationId = +req.params.locationId;
    const location = locationStorage.locations.find(loc => {
        return loc.id === locationId;
    });

    if (!location) {
        res.status(404).json({ // return an error response to the FE
            message: 'not found',
        });
    }

    res.json({
        address: location.address,
        coordinates: location.coordinates,
    });
});

module.exports = router;