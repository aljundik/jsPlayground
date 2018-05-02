const sum = require('./sum');

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  return display;
}

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallBack = jest.fn();

describe('testing mock functions', () => {
  it('should return the amount of calls', () => {
    forEach([1, 2, 3], mockCallBack);

    expect(mockCallBack.mock.calls.length).toBe(3);

  });

  it('should return the exact value of calls', () => {
    forEach([1, 2], mockCallBack);

    expect(mockCallBack.mock.calls[0][0]).toBe(1);
    expect(mockCallBack.mock.calls[1][0]).toBe(2);
    expect(mockCallBack.mock.instances.length).toBe(5);
    

  });
})

describe('test timeing', () => {
  it('should return wanted time', () => {
    expect(displayTimeLeft(65)).toBe('1:05');
    expect(displayTimeLeft(90)).toBe('1:30');
    expect(displayTimeLeft(120)).toBe('2:00');
    expect(displayTimeLeft(125)).toBe('2:05');
  });
});



test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});


test('value of isAuth to be false', () => {
  const isAuth = false;

  expect(isAuth).toBeFalsy();
});


test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);         //  This won't work because of rounding error
  //expect(value).toEqual(0.3);         //  This won't work because of rounding error

  expect(value).toBeCloseTo(0.3); // This works.
});


test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList[4]).toBe('beer');
});


function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});


describe('Scope', () => {
  var ACTUAL;
  beforeEach(function(){
    ACTUAL = null;
  })


  it('a funciton to has access to its own local scope variable', () => {
   var fn = function (){
     var name = 'inner';
     ACTUAL = name;
   };

   fn();
   expect(ACTUAL === 'inner').toBeTruthy();
  });


  it('Inputs to a function are treated as local scope vars', () => {
    var fn = function (name){
      ACTUAL = name;
    };
 
    fn('inner');
    expect(ACTUAL === 'inner').toBeTruthy();
   });


   it('Blocks scope can be created with let', () => {
    var fn = function (name){
     var where = 'outer';
     {
       let where = 'inner';
     }

     ACTUAL = where;
    };
 
    fn();
    expect(ACTUAL === 'outer').toBeTruthy();
   });


   it('function has access to the vars defined in the scope the function was called from', () => {

   
    var fn = function (name){
     var where = 'outer';
     {
       let where = 'inner';
     }

     ACTUAL = where;
    };
 
    fn();
    expect(ACTUAL === 'outer').toBeTruthy();
   });
});