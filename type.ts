let nombre:string;
let numero:number;
let booleano:boolean;

interface Humano{
    nombre:string;
    edad:number;
    sexo:string;
}

function saludar(name:string):string
{
    return "Hola"
}


class persona implements Humano{
    nombre:string;
    edad:number;
    sexo:string;
    constructor(name:string,edad:number,sexo:string){
        nombre=name,
        edad=edad,
        sexo=sexo;
    }

}

let humano1:Humano={
    nombre:"tiziano",
    edad:19,
    sexo:"Hombre"
}


