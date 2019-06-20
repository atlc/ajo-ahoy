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

    v = v.replace(/cloves garlic/gi, 'bulbs of garlic');
	v = v.replace(/cloves of garlic/gi, 'bulbs of garlic');
    v = v.replace(/clove of garlic/gi, 'bulb of garlic');
	v = v.replace(/garlic clove/gi, 'garlic bulb');

	childTextNode.nodeValue = v;
}

window.onload = walkThroughDOM();