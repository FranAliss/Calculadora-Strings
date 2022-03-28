
function sumarCadena(cadena)
{
    let suma = 0;
    if(cadena === "")
    {
        suma = 0;
    }
    else
    {
        for(let i=0;i<cadena.length;i++)
        {
            if(parseInt(cadena.charAt(i)) < 1000)
            {
                suma = suma + parseInt(cadena.charAt(i));
            }
        }
    }
    return suma;
}
export default sumarCadena;