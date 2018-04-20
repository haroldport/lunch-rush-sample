const functions = require('firebase-functions');

exports.uppercaseRestaurantName =
    functions.database.ref('/restaurants/{pushId}').onWrite(event => {
        const addedRestaurant = event.data.val();
        const changedRestaurant = addedPurchases.name.toUpperCase();
        return event.data.ref.parent.set(changedRestaurant);
    });