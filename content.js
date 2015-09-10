var elements = document.getElementsByTagName('*');

// Create the XHR object to do GET to /data resource  
var xhr = new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/gpennington/NoOneOfNote/master/names.json",true);


// register the event handler
xhr.addEventListener('load',function(){
  if (xhr.status == 200) {
        var namesArray = JSON.parse(xhr.responseText).names;
        //console.log(JSON.parse(xhr.responseText));    
        console.log(namesArray);
        replaceText(namesArray);
  }
  else{
        console.log("Error: " + xhr.status);
        console.log(xhr.response); 
  }
},false) 

// perform the work
xhr.send();

//console.log("Sent");


//Searches the DOM for names and replaces them
function replaceText(arr){

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                console.log(text);
                var index = arr.indexOf(text);
                if ( index > 0 ){

                    var replacedText = text.replace(arr[index], 'No One of Note');

                    if (replacedText !== text) {
                        element.replaceChild(document.createTextNode(replacedText), node);
                    }
                }
                
            }
        }
    }

}




