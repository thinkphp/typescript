class Calculator {

      add(x: number,y: number):number {

          if(isNaN(x) || isNaN(y)) return 0;

          return x + y;         
      }

      substract(x: number, y: number):number {

           if(isNaN(x) || isNaN(y)) return 0;

            return x - y;   
      }

      euclid(x: number, y: number):number {

             return y ? this.euclid(y, x % y) : x;

      }
}

window.onload = function() {

       let $ = function(id){return document.getElementById(id);}

       let calc = new Calculator();

       let num1 = <HTMLInputElement>$("num1");  

       let num2 = <HTMLInputElement>$("num2");

       let output = <HTMLDivElement>$("result");

       $("add").addEventListener("click",()=>add(parseInt(num1.value),parseInt(num2.value))
       );

       $("substract").addEventListener("click",()=>sub(parseInt(num1.value),parseInt(num2.value))
       );

       $("gcd").addEventListener("click",()=>euclid(parseInt(num1.value),parseInt(num2.value))
       );

       function add(x: number, y: number) {

                output.innerHTML = calc.add(x, y).toString();
       }

       function sub(x: number, y: number) {

                output.innerHTML = calc.substract(x, y).toString();
       }        

       function euclid(x: number, y: number) {

                output.innerHTML = calc.euclid(x, y).toString();
       }

}
