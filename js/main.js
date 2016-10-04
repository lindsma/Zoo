$(document).ready(function() {

    var mammal = ["aardvark", "elephant", "dog", "lion", "fox", "hare", "armadillo", "baboon", "camel", "beaver", "bear", "whale", "tiger", "ferret", "rhinoceros", "bobcat", "cat", "dolphin", "caribou", "cheetah", "chimpanzee", "chipmunk", "leopard", "wombat", "rabbit", "cougar", "coyote", "dingo", "kangaroo", "seal", "elk", "moose", "fox", "anteater", "panda", "otter", "giraffe", "tamarin", "groundhog", "porpoise", "hedgehog", "hippopotamus", "horse", "monkey", "impala", "jackrabbit", "jaguar", "orca", "kinkajou", "koala", "llama", "lynx", "manatee", "meerkat", "goat", "gorilla", "lemur", "rat", "opossum", "orangutan", "bat", "platypus", "porcupine", "raccoon", "sheep", "skunk", "sloth", "hyena", "squirrel", "tasmanian devil", "gazelle", "wallaby", "walrus", "buffalo", "deer", "wolf", "wolverine", "zebra", "bushbaby"];

    var reptile = ["alligator", "crocodile", "caiman", "lizard", "gecko", "chameleon", "iguana", "bearded dragon", "viper", "snake", "python", "rattlesnake", "cobra", "anaconda", "tortoise", "turtle"];

    var bird = ["chicken", "duck", "ostrich", "goose", "swan", "turkey", "partridge", "quail", "pheasant", "penguin", "cardinal", "eagle", "stork", "heron", "pelican", "blue-footed booby", "vulture", "osprey", "hawk", "buzzard"];


    // create animal constructor

    (function() {

        Animal.prototype = {
            buildMe: function() {
                // add animal div
                $("#animal-container").append("<div class='animal " + this.info.name + "'>" + "</div>");
                // add animal image and horizontal rule
                $("." + this.info.name).append("<img alt=" + this.info.species + " id=" + this.info.species + " class='animal'" + " src='styles/my-icons-collection/png/" + this.info.species + ".png'/><hr>");
                // add animal name
                $("." + this.info.name).append("<h3 class='name'>" + this.info.name + "</h3>");
                // add ul for animal bio
                $("." + this.info.name).append("<ul class = " + this.info.name + " ></ul>");
                // add animal species
                $("ul." + this.info.name).append("<li class='species'>" + "species: " + this.info.species + "</li>");
                // add animal class
                $("ul." + this.info.name).append("<li class='class'>" + "class: " + this.info.class + "</li>");
                // add animal age
                $("ul." + this.info.name).append("<li class='age'>" + "age: " + this.info.age + "</li>");
                // add delivery type
                $("ul." + this.info.name).append("<li class='delivery-type'>" + "delivery: " + this.info.deliveryType + "</li>");

            },

            // calculate age from DOB

            calcAge: function() {
                var currentDate = new Date();
                this.info.dob = new Date(this.info.dob);
                var age = Math.floor(((currentDate.getTime() - this.info.dob.getTime()) / 3.154e+10)) + " years";
                this.info.age = this.info.age + age;

                // try/catch for age

                try {
                    if (this.info.age === "" || this.info.age === "NaN years") throw "Age ain't nothin' but a number.";
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
                this.buildMe();
            }
        };


        function Animal(species, name, dob) {

            $('form').submit(function(event) {
                event.preventDefault();
            });

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
                    $("#chicken").click(function() {
                        var src = $(this).attr("src");
                        var newsrc = 'styles/chicken2.png';
                        $(this).attr("src", newsrc);
                    });

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
                    $("#sloth").click(function() {
                        var src = $(this).attr("src");
                        var newsrc = 'styles/slothfall.png';
                        $(this).attr("src", newsrc);
                    });

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

        }

        // create two species minimum


        var promise = $.get('data/animals.json');

        promise.then(function(sloth) {
            var margot = new Animal(sloth.animals[0].species, sloth.animals[0].name, sloth.animals[0].dob);
            margot.init();
            margot.info.toes = 3;
            margot.info.temperament = "phlegmatic";
            margot.sloth(5);
            margot.toString();
            return promise;
        }).then(function(chicken) {
            console.log(chicken);
            var endive = new Animal(chicken.animals[1].species, chicken.animals[1].name, chicken.animals[1].dob);
            endive.info.breed = "andalusian";
            endive.info.spots = true;
            endive.init();
            endive.chicken(4);
            endive.toString();
            return promise;
        }).then(function(chameleon) {
            var liz = new Animal(chameleon.animals[2].species, chameleon.animals[2].name, chameleon.animals[2].dob);
            liz.info.temperament = "phlegmatic";
            liz.init();
            liz.chameleon(5, 4);
            liz.toString();
            return promise;
        }).then(function(bushbaby) {
            var miso = new Animal(bushbaby.animals[3].species, bushbaby.animals[3].name, bushbaby.animals[3].dob);
            miso.info.temperament = "choleric";
            miso.init();
            miso.bushbaby(6);
            miso.toString();
            return promise;
        }).then(function(panda) {
            var hector = new Animal(panda.animals[4].species, panda.animals[4].name, panda.animals[4].dob);
            hector.init();
            hector.toString();
            return promise;
        }).then(function(otter) {
            var otis = new Animal(otter.animals[5].species, otter.animals[5].name, otter.animals[5].dob);
            otis.init();
            otis.toString();
            return promise;
        }).catch(function(error) {
            console.log("error");
        });


    })();
});
