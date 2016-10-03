$(document).ready(function() {

    var mammal = ["aardvark", "elephant", "dog", "lion", "fox", "hare", "armadillo", "baboon", "camel", "beaver", "bear", "whale", "tiger", "ferret", "rhinoceros", "bobcat", "cat", "dolphin", "caribou", "cheetah", "chimpanzee", "chipmunk", "leopard", "wombat", "rabbit", "cougar", "coyote", "dingo", "kangaroo", "seal", "elk", "moose", "fox", "anteater", "panda", "otter", "giraffe", "tamarin", "groundhog", "porpoise", "hedgehog", "hippopotamus", "horse", "monkey", "impala", "jackrabbit", "jaguar", "orca", "kinkajou", "koala", "llama", "lynx", "manatee", "meerkat", "goat", "gorilla", "lemur", "rat", "opossum", "orangutan", "bat", "platypus", "porcupine", "raccoon", "sheep", "skunk", "sloth", "hyena", "squirrel", "tasmanian devil", "gazelle", "wallaby", "walrus", "buffalo", "deer", "wolf", "wolverine", "zebra", "bushbaby"];

    var reptile = ["alligator", "crocodile", "caiman", "lizard", "gecko", "chameleon", "iguana", "bearded dragon", "viper", "snake", "python", "rattlesnake", "cobra", "anaconda", "tortoise", "turtle"];

    var bird = ["chicken", "duck", "ostrich", "goose", "swan", "turkey", "partridge", "quail", "pheasant", "penguin", "cardinal", "eagle", "stork", "heron", "pelican", "blue-footed booby", "vulture", "osprey", "hawk", "buzzard"];


    // create animal constructor

    (function() {

        Animal.prototype = {

            // add to HTML
            buildZoo: function() {



            },


            // calculate age from DOB

            calcAge: function() {
                var currentDate = new Date();
                this.info.dob = new Date(this.info.dob);
                var age = Math.floor(((currentDate.getTime() - this.info.dob.getTime()) / 3.154e+10)) + " years";
                this.info.age = this.info.age + age;

                // try/catch for age

                try {
                    if (this.info.age === "" || isNaN(this.info.age)) throw "Age ain't nothin' but a number.";
                } catch (err) {
                    this.info.age = err;
                }
            },

            // determine class

            findClass: function() {

                if ($.inArray(this.info.species, mammal) !== -1) {
                    this.info.class = "mammal";
                } else if ($.inArray(this.info.species, reptile) !== -1) {
                    this.info.class = "reptile";
                } else if ($.inArray(this.info.species, bird) !== -1) {
                    this.info.class = "bird";
                } else {
                    console.log("This animal is not welcome in our zoo.");
                }

                // try/catch for class type

                try {
                    if (this.info.class === "") throw "Animal class not found";
                } catch (err) {
                    this.info.class = err;
                }

            },

            // determine birth or lay eggs

            delivery: function() {
                if (this.info.class === "mammal") {
                    this.info.deliveryType = this.info.deliveryType + "gives birth";
                } else if (this.info.class === "bird" || this.info.class === "reptile") {
                    this.info.deliveryType = this.info.deliveryType + "lays eggs";
                }

                // try/catch for delivery type

                try {
                    if (this.info.deliveryType === "") throw "Maybe " + this.info.name + " doesn't want babies!";
                } catch (err) {
                    this.info.deliveryType = err;
                }
            },

            // initiate animal creation

            init: function() {
                this.calcAge();
                this.findClass();
                this.delivery();
            }
        };


        function Animal(species, name, dob) {

            // this.regions = {
            //
            //
            // };

            // basic animal info setup
            this.info = {
                species: species,
                class: "",
                name: name,
                dob: dob,
                age: "",
                deliveryType: "",
                specialAbilities: ""
            };

            // chicken functions & abilities

            this.chicken = function(eggs) {
                if (this.info.species === "chicken") {
                    this.info.specialAbilities = this.info.specialAbilities + "producing valuable food";
                    $("#animal-container").prepend("<img alt='chicken' id='chicken' class='animal' src='styles/chicken.png'/>");
                    this.eggsProduced = function(eggs) {
                        this.info.diary = this.info.name + " produced " + eggs + " eggs today!";
                    };
                    this.eggsProduced(eggs);
                }
            };

            // chameleon functions & abilities

            this.chameleon = function(milesPerHour, hours) {
                if (this.info.species === "chameleon") {
                    this.info.specialAbilities = this.info.specialAbilities + "slithering";
                    $("#animal-container").prepend("<img alt='chameleon' id='chameleon' class='animal' src='styles/chameleon.png'/>");
                    this.travelDistance = function(milesPerHour, hours) {
                        var distance = milesPerHour * hours;
                        this.info.diary = this.info.name + " travelled " + distance + " miles today!";
                    };
                    this.travelDistance(milesPerHour, hours);
                }
            };

            // bushbaby functions & abilities

            this.bushbaby = function(timesEyesRolled) {
                if (this.info.species === "bushbaby") {
                    this.info.specialAbilities = this.info.specialAbilities + "staring";
                    $("#animal-container").prepend("<img alt='bushbaby' id='bushbaby' class='animal' src='styles/bushbaby.png'/>");
                    this.eyesRolled = function(timesEyesRolled) {
                        this.info.diary = this.info.name + " rolled her eyes " + timesEyesRolled + " times today!";
                    };
                    this.eyesRolled(timesEyesRolled);
                }
            };

            // sloth functions & abilities

            this.sloth = function(limbsClimbed) {
                if (this.info.species === "sloth") {
                    this.info.specialAbilities = this.info.specialAbilities + "hanging";
                    $("#animal-container").prepend("<img alt='sloth' id='sloth' class='animal' src='styles/sloth.png'/>");
                    this.limbsClimbed = function(limbsClimbed) {
                        this.info.diary = this.info.name + " climbed " + limbsClimbed + " limbs today!";

                    };
                    this.limbsClimbed(limbsClimbed);
                }
            };

            // modify toString

            Animal.prototype.toString = function animalToString() {
                var ret = this.info.name + " is a " + this.info.species + " & is good at " + this.info.specialAbilities;
                return ret;

            };

            // try/catch for Special Abilities

            try {
                if (this.info.specialAbilities === "") throw this.info.name + " doesn't have any special abilities :(";
            } catch (err) {
                this.info.specialAbilities = err;
            }

        }

        // create two species minimum

        var margot = new Animal("sloth", "margot", "1987-11-12");
        margot.info.toes = 3;
        margot.info.temperament = "phlegmatic";
        margot.init();
        margot.sloth(5);
        margot.toString();
        console.log(margot.toString());
        console.log(margot);

        var endive = new Animal("chicken", "endive", "2010-02-15");
        endive.info.breed = "andalusian";
        endive.info.spots = true;
        endive.init();
        endive.chicken(4);
        endive.toString();
        console.log(endive.toString());
        console.log(endive);

        var miso = new Animal("bushbaby", "miso", "1995-03-14");
        miso.info.temperament = "choleric";
        miso.init();
        miso.bushbaby(6);
        miso.toString();
        console.log(miso.toString());
        console.log(miso);

        var liz = new Animal("chameleon", "liz", "2005-11-24");
liz.info.temperament = "phlegmatic";
liz.init();
liz.chameleon(5, 4);
liz.toString();
console.log(liz.toString());
console.log(liz);

        // error catching example

        var frank = new Animal("chupacabra", "frank");
        frank.init();
        console.log(frank);


    })();
});
