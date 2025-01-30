document.addEventListener("DOMContentLoaded", function() {
    const text = "Lab on map(), filter(), reduce(), forEach() for js";
    let i = 0;
    const speed = 100; // typing speed in milliseconds
    const h1 = document.getElementById("typing-text");

    function typeWriter() {
        if (i < text.length) {
            h1.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            h1.classList.add("typing");
        }
    }

    typeWriter();
});


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
let union = [...arr1, ...arr2.filter(item => !arr1.includes(item))];
union.sort((a, b) => a - b);


function isPrime(num){
    for (let i = 2; i<=Math.sqrt(num);i++){
      if (num%i===0){
        return false
      }
    }
    return true
  }
  
  function checkPrimes(numbers){
    return numbers.map(num => isPrime(num)? "Prime":"Not Prime")

  }
arrp = [1, 2, 3, 4, 5];
console.log(checkPrimes(arrp)); //
