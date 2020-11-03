'use strict'

// This is a single-line comment.

/* Here's a 
multi-line
comment. */

//console.log('Here\'s a hidden message');

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;