/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const coffeeCup = {

    color : "orange",
    name: "Cofee Cup",
    handle:1,
    design: "blue dots",
    content: "coffee" 
};

const phone ={
    name: "myPhone",
    shape: "oblong",
    color: "blue",
    purpose: {
        call: false,
        videochat:false
    },
    volume: 10,
    screenOn: false, 
    turnOn: function (screenStatus){
        this.screenOn = screenStatus;
    },
    newPurpose: function (makeCall,chatVideo){
        this.purpose.call = makeCall;
        this.purpose.videochat = chatVideo;
    }
};


const box ={
    name:"clothesBox",
    color: "blue",
    design: "flowers",
    sides :5,
    boxContent: true,

}
console.log ("This is a ", coffeeCup.name);
console.log ("This is a ", phone.name);
console.log("This is a ", box.name); 

console.log ("are we calling?", phone.purpose.call);
console.log("are we chatting?", phone.purpose.videochat);
phone.newPurpose (true, true)
console.log ("are we calling now?", phone.purpose.call);
console.log("are we chatting now?", phone.purpose.videochat);