
function addItem() {
	if (!document.getElementById('toDoItem').value) {
		alert('Please put in a to do item.');
	} else {
		itemsAdded();
	}
}

function itemsAdded(){	
	var input = document.getElementById('toDoItem');
	var listValue = input.value;
	var listArray = listValue.split(",");
	var unorderedList = document.createElement("ul");
	displayDiv = document.getElementById('list');

for (var i =0; i < listArray.length; i++) {
 	var listItem = document.createElement('li');
 	var att = document.createAttribute('class');
 	var mOver = document.createAttribute('onmouseover');
 	var mOff = document.createAttribute('onmouseout');
 	att.value = "active";
 	mOver.value = "mouseOverItem(this)";
 	mOff.value = "mouseOffItem(this)";
	listItem.innerText = listArray[i];
	listItem.setAttributeNode(att);
	listItem.setAttributeNode(mOver);
	listItem.setAttributeNode(mOff);
	listItem.addEventListener("click", function(event) {
		console.log(event);
		crossOffItem(event.target);
	});
	unorderedList.appendChild(listItem);
}
	
	displayDiv.appendChild(unorderedList);
	input.value = "";
}

function crossOffItem(element){
	console.log(element);
	var classArray = element.className.split(' ');
	var index;
	for (var i = 0; i < classArray.length; i++) {
		if (classArray[i] === 'done') {
			index = i;
			break;
		}
	}
	if (index) {
		classArray.splice(index, 1);
	}	else {
		classArray.push('done');
	}
	element.className = classArray.join(' ');
}
function mouseOverItem(x){
	x.style.fontSize = "xx-large";
}
function mouseOffItem(x){
	x.style.fontSize = "x-large";
}

function removeDoneItems(){
	var itemDone = document.getElementsByClassName("done");
	while(itemDone[0]){
		itemDone[0].parentNode.removeChild(itemDone[0]);
	}
}