let trainer = {
    name: 'Nithin',
    tech1() {
        console.log("AIML JavaFS Trainer");
        return 100;
    },
    tech2() {
        console.log('Trainer Name = ', this.name);
        return 'python';
    }
};

function my_function(param) {
    trainer['name'] = 'Nithin Belamkar';
    trainer['tech2']();
    trainer[param] = 'Mysuru';
    console.log(`Location = ${trainer.location}`);
}

my_function('location');

// trainer = trainer2;

console.log(trainer);