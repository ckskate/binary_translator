walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	// I stole this from a chain of others who stole this!
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/A/g, "01000001");
	v = v.replace(/B/g, "01000010");
	v = v.replace(/C/g, "01000011");
	v = v.replace(/D/g, "01000100");
	v = v.replace(/E/g, "01000101");
	v = v.replace(/F/g, "01000110");
	v = v.replace(/G/g, "01000111");
	v = v.replace(/H/g, "01001000");
	v = v.replace(/I/g, "01001001");
	v = v.replace(/J/g, "01001010");
	v = v.replace(/K/g, "01001011");
	v = v.replace(/L/g, "01001100");
	v = v.replace(/M/g, "01001101");
	v = v.replace(/N/g, "01001110");
	v = v.replace(/O/g, "01001111");
	v = v.replace(/P/g, "01010000");
	v = v.replace(/Q/g, "01010001");
	v = v.replace(/R/g, "01010010");
	v = v.replace(/S/g, "01010011");
	v = v.replace(/T/g, "01010100");
	v = v.replace(/U/g, "01010101");
	v = v.replace(/V/g, "01010110");
	v = v.replace(/W/g, "01010111");
	v = v.replace(/X/g, "01011000");
	v = v.replace(/Y/g, "01011001");
	v = v.replace(/Z/g, "01011010");
	v = v.replace(/a/g, "01100001");
	v = v.replace(/b/g, "01100010");
	v = v.replace(/c/g, "01100011");
	v = v.replace(/d/g, "01100100");
	v = v.replace(/e/g, "01100101");
	v = v.replace(/f/g, "01100110");
	v = v.replace(/g/g, "01100111");
	v = v.replace(/h/g, "01101000");
	v = v.replace(/i/g, "01101001");
	v = v.replace(/j/g, "01101010");
	v = v.replace(/k/g, "01101011");
	v = v.replace(/l/g, "01101100");
	v = v.replace(/m/g, "01101101");
	v = v.replace(/n/g, "01101110");
	v = v.replace(/o/g, "01101111");
	v = v.replace(/p/g, "01110000");
	v = v.replace(/q/g, "01110001");
	v = v.replace(/r/g, "01110010");
	v = v.replace(/s/g, "01110011");
	v = v.replace(/t/g, "01110100");
	v = v.replace(/u/g, "01110101");
	v = v.replace(/v/g, "01110110");
	v = v.replace(/w/g, "01110111");
	v = v.replace(/x/g, "01111000");
	v = v.replace(/y/g, "01111001");
	v = v.replace(/z/g, "01111010");
	
	textNode.nodeValue = v;
}