const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    //NOTA DE ERROR: Aquí pusiste solo text por eso cuando ponias en el text input te retorno el texto, te falto el lenght
    console.log(wordCount)
    return wordCount;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    //analyzer.getCharacterCount(text): esta función debe retornar el recuento de caracteres que se encuentran en el parámetro text de tipo string.
    const CharacterCount = text.length;
    console.log(CharacterCount)
    return CharacterCount;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //text.replace(...): Es como usar una goma de borrar en el texto. 
    ///\s+/g: Le dice a la goma que borre todos los espacios y saltos de línea.
    //'': Esto significa que lo que borraremos será reemplazado por nada (es decir, se eliminará).
    const CharacterCountExcludingSpaces = text.replace(/\s+|[^a-zA-Z0-9]/g, '').length; //NOTA DE ERROR EN EL TEST: antes contaba la puntuación \s+|[^a-zA-Z0-9]/g, ''
    console.log(CharacterCountExcludingSpaces)
    return CharacterCountExcludingSpaces;
  },

  getAverageWordLength: (text) => {  
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro text de tipo string.
    //RECORDANDO FORMULA DE PROMEDIO: Suma de valores/Numero de valores
    //Suma de la cantidad de caracteres/Numero de palabras   
    // Eliminamos caracteres no alfanuméricos (excepto espacios) para contar la longitud total de caracteres
    const CharacterCountExcludingSpaces = text.replace(/\s+|[^a-zA-Z0-9]/g, '').length;
    const wordCount = text.trim().split(/\s+|[^a-zA-Z0-9]/g).filter(word => word.length > 0).length;
    // Calcula la longitud media de las palabras
    //number*
    const AverageWordLength = wordCount > 0 ? (CharacterCountExcludingSpaces / wordCount): 0;   
    console.log(AverageWordLength);
    return AverageWordLength.toFixed(2);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const NumberList= text.match(/\b\d+(\.\d+)?\b/g); //NOTA DESCUBRIMIENTO: Con el + cuenta numeros y no digitos. (/\b\d+(\.\d+)?\b/g) Busca números enteros y decimales
    // Si NumberList es null, entonces no hay números en el texto
    const NumberCount = NumberList ? NumberList.length : 0;
    console.log(NumberCount)
    return NumberCount;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const NumberList = text.match(/\b\d+(\.\d+)?\b/g);
    //si number list.lenght es mayor a cero, for has la suma y si no hay número retorna cero. 
    const NumberSum = NumberList ? NumberList.map(Number).reduce((sum, num) => sum + num, 0)//NOTA DE ERRROR: No corria porque dentro usaste ; cuando debio ser ,
    : 0;
    return NumberSum;
  },
};

export default analyzer;
