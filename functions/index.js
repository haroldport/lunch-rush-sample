const functions = require('firebase-functions');

exports.uppercaseRestaurantName =
    functions.database.ref('/restaurants/{pushId}/name').onWrite((change, context) => {
        const name = change.after.val();
        console.log('Uppercasing', name);
        const uppercase = name.toUpperCase();
        return change.after.ref.parent.child('name').set(uppercase);
    });