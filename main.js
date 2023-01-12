// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById("my_audio").play();
// });

var  bgp = chrome.extension.getBackgroundPage()
var arr = []; // the array

document.addEventListener('DOMContentLoaded', function () {
  
  var tbinput = document.getElementById("tbinput");
  var btadd = document.getElementById("btadd");


  //listen for setup mode, send POS on true, health on false
  btsetup.addEventListener('click', () => {
    // let val = document.getElementById("setupinput").value
    const urlToSend = { setup : true }
    chrome.runtime.sendMessage(urlToSend, function(response) {
        console.log("newURL send!")
    });
  })

  //listen for POS mode, send POS on true, health on false
  btpos.addEventListener('click', () => {
    let val = document.getElementById("posinput").value
    const urlToSend = { pos : val }
    chrome.runtime.sendMessage(urlToSend, function(response) {
        console.log("newURL send!")
    });
  })

  btint.addEventListener('click', () => {
    let val = document.getElementById("intinput").value
    const urlToSend = { int : val }
    chrome.runtime.sendMessage(urlToSend, function(response) {
        console.log("newURL send!")
    });
  })


//   document.getElementById("searchTxt").value
  btadd.addEventListener('click', () => {
    let val = document.getElementById("tbinput").value
    const urlToSend = { newURL : val, funWork : "work"}
    chrome.runtime.sendMessage(urlToSend, function(response) {
        console.log("newURL send!")
    });
  }) 

  btfun.addEventListener('click', () => {
    let val = document.getElementById("funinput").value
    const urlToSend = { newURL : val, funWork : "fun" }
    chrome.runtime.sendMessage(urlToSend, function(response) {
        console.log("newURL send!")
    });
  })
//   (input) => addItems(input));
//   btadd.addEventListener('click', (tbinput) => addItems(tbinput));
});

function addItems(event){
        console.log(event)
    //   arr.push(input.value); // add textbox value to array
    //   input.value = ''; // clear textbox value
      console.log(arr)
};

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log("message send!")
// });