// create animal constructor

(function() {
    Animal.prototype = {

        // calculate age from DOB

        calcAge: function() {
            var currentDate = new Date();
            this.info.dob = new Date(this.info.dob);
            var age = Math.floor(((currentDate.getTime() - this.info.dob.getTime()) / 3.154e+10)) + " years";
            this.info.age = this.info.age + age;
        },

        // determine birth or lay eggs

        delivery: function() {
            if (this.info.type === "mammal") {
                this.info.deliveryType = this.info.deliveryType + "gives birth";
            } else if (this.info.type === "bird" || this.info.type === "reptile") {
                this.info.deliveryType = this.info.deliveryType + "lays eggs";
            }
        },

        init: function() {
            this.calcAge();
            this.delivery();
        }
    };


    function Animal(species, type, name, dob) {
        // basic animal info setup
        this.info = {
            species: species,
            type: type,
            name: name,
            dob: dob,
            age: "",
            deliveryType: "",
            specialAbilities: ""
        };

        this.abilities = function() {

            if (this.info.species === "chicken") {
                this.info.specialAbilities = this.info.specialAbilities + "producing valuable food";
                eggsProduced = function(num) {
                    this.info.eggsProduced = this.info.name + " produced" + num + " eggs today!";
                };
            } else if (this.info.species === "sloth") {
                this.info.specialAbilities = this.info.specialAbilities + "hanging";
                limbsClimbed = function(num) {
                    this.info.limbsClimbed = this.info.name + " climbed" + num + " limbs today!";
                };
            } else if (this.info.species === "lizard") {
                this.info.specialAbilities = this.info.specialAbilities + "slithering";
                travelDistance = function(milesPerHour, hours) {
                    var distance = milesPerHour * hours;
                    this.info.distanceTravelled = this.info.name + " travelled" + distance + " miles today!";
                };
            } else if (this.info.species === "bushbaby") {
                this.info.specialAbilities = this.info.specialAbilities + "staring";
                eyesRolled = function(num) {
                    this.info.eyesRolled = this.info.name + " rolled her eyes " + num + " times today!";
                };
            }

        };

        Animal.prototype.toString = function animalToString() {
            var ret = this.info.name + " is a " + this.info.species + " & is good at " + this.info.specialAbilities;
            return ret;

        };

    }

    // create two species minimum

    var margot = new Animal("sloth", "mammal", "margot", "1987-11-12");
    margot.info.toes = 3;
    margot.info.temperament = "phlegmatic";
    margot.init();
    margot.abilities();
    margot.toString();
    console.log(margot.toString());

    var endive = new Animal("chicken", "bird", "endive", "2010-02-15");
    endive.info.breed = "andalusian";
    endive.info.spots = true;
    endive.init();
    endive.abilities();
    console.log(endive);

    var miso = new Animal("bushbaby", "mammal", "miso", "1995-03-14");
    miso.info.temperament = "choleric";
    miso.init();
    miso.abilities();
    console.log(miso);

    var liz = new Animal("chameleon", "reptile", "liz", "2005-11-24");
    liz.info.temperament = "phlegmatic";
    liz.init();
    liz.abilities();
    console.log(liz);

})();




// create one or more methods in each species
// ex. parrots can speak, lions can roar
// species-specific method should take at least one argument.
// ex. swim method could take the argument "duration", and return how far the animal swam in that time (speed * time)

// all species must re-implement the toString() method
// it may be good to run the default toString() method on one of your animals to see how it works

// write tests! using try/catch for each method (epic) or just a few
// make sure you can create each type of animal species
// make sure the animals you create have the correct data on them
// epic - don't allow the creation of an Animal directly, we must have a species
