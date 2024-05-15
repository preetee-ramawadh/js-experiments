"use strict";

function printContact(contact){
    console.log(contact.name);
    console.log(contact.address);
    console.log(contact.city);
    console.log(contact.state);
    console.log(contact.zip);
}

let my_contact = {
    name: "Preetee Ram Awadh",
    address: "Shreeji splendor",
    city: "Thane",
    state: "Maharashtra",
    zip: "400607"
}

printContact(my_contact);
