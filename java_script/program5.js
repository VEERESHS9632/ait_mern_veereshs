const trainer = {
	name : 'Nithin',
	tech1() { 
 		console.log("AIML JavaFS Trainer")
        return 100
	},
	tech2() { 
		console.log("C++ MERN Trainer")
        return 'python'
	}
}

function func(param) {
	trainer.tech1(); 
	trainer['name'] = 'Nithin Belamkar' 
	num = trainer[param](); 
}
func('tech1');