/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first

  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var first = function(arr, cb) {
    cb(arr[0]);
};

first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var last = function(arr, cb) {
    cb(arr[arr.length - 1]);
};

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


  //Code Here for multiply
var multiply = function(num1, num2,cb){
    cb(num1 * num2);
};

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


  //Code Here for contains
var contains = function(arr, name, cb){
    var isPresent = false;
    arr.forEach(function(input, i){
        if(input === name){
            isPresent = true;
        }
    });
    cb(isPresent);
};


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

    //Code Here for uniq
var uniq = function(arr, cb){
    for(var i = arr.length - 1; i>= 0; i--){
        for(var j = arr.length - 2; j >= 0; j--){
            if(arr[i] === arr[j]){
                arr.splice(j, 1);
                i--;
            }
        }
    }
    cb(arr);
};

for (var i = 0; i < 10; i++){
    debugger;
}


var uniq = function(arr, cb) {
    var newArr = [];
    arr.forEach(function(input, i) {
        if (newArr.length === 0) {
            newArr.push(input);
        } else {
            var inArray = false;
            newArr.forEach(function (input2, i) {
                if (input === input2) {
                    inArray = true;
                }
            });
            if (inArray === false) {
                newArr.push(input);
            }
        }
    });
    cb(newArr);
};



var uniq = function(arr, cb){
    for(var i = arr.length - 1; i>= 0; i--){
        for(var j = arr.length - 2; j >= 0; j--){
            if(arr[i] === arr[j]){
                arr.splice(j, 1);
                i--;
                j--;
            }
        }
    }
    cb(arr);
};
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
var contains = function(arr, name, cb){
    var isPresent = false;
    arr.forEach(function(input, i){
        if(input === name){
            isPresent = true;
        }
    });
    cb(isPresent);
};
var each;
each = function (arr, cb) {
    arr.forEach(function (input, i) {
       cb(arr[i], i)
    });
};
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});


Review

var doThreeThings = function(cb1, cb2, cb3){
    setTimeout(function(){
        var result1 = cb1;
        setTimeout(function(){
            var result2 = cb2(result1)
            setTimeout(function(){
                cb3(result3)
            }, 300)
        });
    }


doThreeThings(
    function() {
        return 10;
    },
    function(lastResult) {
        return lastResult + 10;
    },
    function(lastResult) {
        console.log(lastResult)
    }
)};
