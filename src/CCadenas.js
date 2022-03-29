function contarDigitos(cadena,pos)
{
    let digitos =0;
    while(parseInt(cadena.charAt(pos)) > 1000)
    {
        digitos = digitos + 1;
        pos ++;
    }
}

function juntarDigitos(cadena, pos, digitos)
{
    let string1 = "";
    for(let j=0;j<digitos;j++)
    {
        string1 = string1 + cadena.charAt(pos + j);
    }

    if(parseInt(string1) >= 1000)
    {
        string1 = "0";
    }

    return parseInt(string1);
}

function sumarCadena(cadena)
{
    let suma = 0;
    let num = 0;
    let aux = 0;
    if(cadena === ""){
        suma = 0;   
    }
    else
    {
        for(let i=0;i<cadena.length;i++)
        {
            if(parseInt(cadena.charAt(i)) < 1000)
            {             
                if(parseInt(cadena.charAt(i+1)) < 1000)
                {
                    aux = contarDigitos(cadena, i);
                    num = juntarDigitos(cadena,i,aux);
                    i = i + aux;
                } 
                suma = suma + parseInt(cadena.charAt(i)) + num;    
            }   
        }
    }
    return suma;
}


export default sumarCadena;