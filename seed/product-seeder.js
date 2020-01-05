var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping',{ useNewUrlParser: true, useUnifiedTopology: true });

var products = [
    new Product({
        imagePath: 'http://www.newgamesbox.net/wp-content/uploads/2016/10/Gothic-1-PC-Game-Free-Download.jpg',
        title: 'Gothic Video Game',
        description: 'Specially designed easy combat system. Clear main goals -- story driven yet dictated by player\'s choice.Advanced human behaviour AI for hundreds of individual characters with full audio dialogues ',
        price: 10
    }),
    new Product({
        imagePath: 'https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft.jpg',
        title: 'World of Warcraft',
        description: 'Celebrate your part in the online community that changed the course of gaming history. This limited-edition collector’s set contains a trove of collectible items to commemorate World of Warcraft’s 15th Anniversary.',
        price: 12
    }),
    new Product({
        imagePath: 'https://assets1.ignimgs.com/2016/05/02/call-of-duty-infinite-warfare-button-00jpg-652c71.jpg',
        title: 'Call of Duty Game',
        description: 'This edition includes a themed in-game emblem, calling card, and weapon charm. Code Included in box. This is one of the most awesome games that you might have played. Played by most of the gamers!',
        price: 24
    }), new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Assassin%27s_Creed_Rogue.jpg',
        title: 'Assassins Creed Rouge',
        description: 'Witness Shay \'s transformation from an adventurous assassin to a grim and committed Templar willing to hunt down his former brothers.This is the most awesome game in the world!',
        price: 18
    }), new Product({
        imagePath: 'https://giantbomb1.cbsistatic.com/uploads/scale_small/8/82063/2843337-acbro.jpg',
        title: 'Assassins Creed Brotherhood',
        description: 'Return Bout: Become Ezio the master assassin once again, with a new 15 hour single player epic that lets you take the fight to the heart of the Templar organisation.',
        price: 20
    }),new Product({
        imagePath: 'https://i.pinimg.com/736x/3c/92/12/3c9212b8fe9afefd16601c177f04a6cf.jpg',
        title: 'Pubg',
        description: 'PLAYERUNKNOWN \'S BATTLEGROUNDS is a last-one-standing shooter being developed with community feedback. This is one of the most awesome games that you might have played.! ',
        price: 30
    })
    
];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done == products.length)
            exit();
    });
}
function exit() {
    mongoose.disconnect();
}
