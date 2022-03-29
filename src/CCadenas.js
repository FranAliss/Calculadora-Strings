function contarDigitos(cadena,pos)
{
    let digitos = 0;
    let posicion = pos; 
    while(parseInt(cadena.charAt(posicion)) < 1000)
    {
        digitos = digitos + 1;
        posicion ++;
    }
    return digitos;
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
    return string1;
}


function sumarCadena(cadena)
{
    let suma = 0;
    let num = "";
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
                    suma = suma + parseInt(juntarDigitos(cadena,i,contarDigitos(cadena, i)));
                    i = i + contarDigitos(cadena, i);
                }
                else
                {
                    suma = suma + parseInt(cadena.charAt(i));
                }                                               
            }     
        }
    }
    return suma;
}


export default sumarCadena;