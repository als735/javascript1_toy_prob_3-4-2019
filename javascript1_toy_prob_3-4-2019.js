const table = {
    "color" : "brown",
    "height" : "2 feet",
    "strength" : "excellent"
}; 


const abby = { 
    height: ‘5.2’,
    weight: ‘140’,
    eyeColor: ‘brown’,
    age: ‘26’, 
    birthday: ‘1/06/1993’,
    email:’malsr.abby@gmail.com’,
    isFemale: ‘true’,
    isMale: false, 
    livesInUSA: true, 
    address: {
          street: ‘822 S Aspen Way’, 
          city: ‘Provo’
          state: ‘UT’,
          zipcode: ‘84604’
      }
    } 
    
const myFavoriteFoods = ['Italian', 'Mexican', 'American']; 

const myFamilyMembers: [
    {
        name: 'Pam',
        age: '65', 
        relationship: 'Mom'
    }
    {
        name: 'Ron',
        age: '68', 
        relationship: 'Dad'
    }
]; 

const myFunc = function() {
    const differenceInAge = abby.age - myFamilyMembers[0].age;
    return differenceInAge
}; 