let allElements = [...document.body.getElementsByTagName('*')];

function walkThroughDOM() {
    allElements.forEach(element => {
        element.childNodes.forEach(child => {
            if (child.nodeType === 3) garlicTime(child); 
        });
    });
}

function garlicTime(childTextNode) {
	let v = childTextNode.nodeValue;

	v = v.replace(/bulbs of garlic/gi, 'dozen heads of garlic');
	v = v.replace(/bulb of garlic/gi, 'dozen heads of garlic');
	v = v.replace(/garlic clove/gi, 'garlic bulb');
      	v = v.replace(/cloves garlic/gi, 'bulbs of garlic');
	v = v.replace(/cloves of garlic/gi, 'bulbs of garlic');
    	v = v.replace(/clove of garlic/gi, 'bulb of garlic');

	childTextNode.nodeValue = v;
}

window.onload = walkThroughDOM();
