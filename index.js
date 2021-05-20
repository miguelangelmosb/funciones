const Fprogramming = 
{   
    FirstClassFunction: () =>
    {
        return `Hello world in functional programming!!`
    },

    PureFunction: (n1, n2) => 
    {
        return `Pure function: \nThe sum of ${n1} + ${n2} is = ${n1 + n2}` 
    },

    RecursiveFunction: (m) =>
    {
        if (m > 2500) return 
	    console.log(m)
	    return recursiveFunction (m + 500)
    },

    AnonymousFunction: () =>
    {
        const filter = names.filter(name => name.length > 5);
        return filter;
    },

    AnonymousFunctionT: (limite) =>
    {
        let flag = true;
        let resultado = '';

        while (flag)
          {
            if(limite && limite > 0 && limite <= 10)
              {
                for(i = 1; i <= limite; i++)
                  {
                    resultado += `Tabla del ${i}\n`
                    for(e = 1; e <= 10; e++)
                      {
                       resultado += `${i} * ${e} = ${i * e}\n`;
                      }
                    
                   }
                return resultado;            
              }   
             else
               {
                flag = false;
                console.log('Numero no es valido');
               }
           }
    },
    
    HigherOrderFunction: (limite, anonymousFunctionT) =>
    {
        return anonymousFunctionT(limite);
    }
}



let firstClassFunction = Fprogramming.FirstClassFunction;
console.log(firstClassFunction());

let pureFunction = Fprogramming.PureFunction;
console.log(pureFunction(2,4));

let recursiveFunction = Fprogramming.RecursiveFunction;
console.log(recursiveFunction(0)) 

const names = ['Miguel','Alejandra','Maria','Angel','Andres', 'Alex', 'Sofia'];

let anonymousFunction = Fprogramming.AnonymousFunction;
console.log(anonymousFunction(names));

let limite = 2;
let anonymousFunctionT = Fprogramming.AnonymousFunctionT;
console.log(anonymousFunctionT(limite));

let higherOrderFunction = Fprogramming.HigherOrderFunction;
console.log(higherOrderFunction(limite, anonymousFunctionT));