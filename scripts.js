/*var person = {
    name: 'Piotr',
    age: 25,
    country: 'Poland'
};
person.height = 175;
for (var attrName in person) {

    console.log(attrName);
    console.log(person[attrName]);

}
*/

function drawTree (value) {
	for (var i = 1; i <= value; i++) {
		var star = ''
		for (var j = i; j < value; j++) {
			star+= ' ';
		}
		for (var k = 1 ; k <= (i*2)-1; k++) {
			star+= '*'
		}
		console.log(star);
	}
}

var lol = parseFloat(prompt('podaj liczbe'));
xd = drawTree(lol)
