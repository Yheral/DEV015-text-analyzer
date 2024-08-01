const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    //NOTA DE ERROR: Aquí pusiste solo text por eso cuando ponias en el text input te retorno el texto, te falto el lenght
    return wordCount;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    //analyzer.getCharacterCount(text): esta función debe retornar el recuento de caracteres que se encuentran en el parámetro text de tipo string.
    const CharacterCount = text.length;
    return CharacterCount;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //text.replace(...): Es como usar una goma de borrar en el texto. 
    ///\s+/g: Le dice a la goma que borre todos los espacios y saltos de línea.
    //'': Esto significa que lo que borraremos será reemplazado por nada (es decir, se eliminará).
    const CharacterCountExcludingSpaces = text.replace(/\s+|[^a-zA-Z0-9]/g, '').length; //NOTA DE ERROR EN EL TEST: antes contaba la puntuación \s+|[^a-zA-Z0-9]/g, ''
    return CharacterCountExcludingSpaces;
  },
  getAverageWordLength: (text) => {  
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro text de tipo string.
    //RECORDANDO FORMULA DE PROMEDIO: Suma de valores/Numero de valores
    //Suma de la cantidad de caracteres/Numero de palabras   
    // Eliminamos caracteres no alfanuméricos (excepto espacios) para contar la longitud total de caracteres
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount=words.length;
    
    const CharacterCountExcludingSpaces = words.reduce((sum, word) => sum + word.length, 0);
    let AverageWordLength; 
    if (wordCount > 0) {
      AverageWordLength = CharacterCountExcludingSpaces / wordCount;
    } else {
      AverageWordLength = 0;
    }
    return parseFloat(AverageWordLength.toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const NumberList= text.match(/\b\d+(\.\d+)?\b/g); //NOTA DESCUBRIMIENTO: Con el + cuenta numeros y no digitos. (/\b\d+(\.\d+)?\b/g) Busca números enteros y decimales
    // Si NumberList es null, entonces no hay números en el texto
    const NumberCount = NumberList ? NumberList.length : 0;
    return NumberCount;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    //1. let = esto puede cambiar, y hacemos un "caja de datos" que sería number sum
    //2. preguntamos si hay número en esa lista, es si entonces empezamos a sumar...aquí aparece la MAQUINA for para repetir la tarea de que cuando entre un número
  //usamos parsefloat..permite convertirlos los valores en números hasta los decimales
    const NumberList = text.match(/\b\d+(\.\d+)?\b/g);
    let NumberSum = 0;
    if (NumberList) {
      for (let i = 0; i < NumberList.length; i++) {
        NumberSum += parseFloat(NumberList[i]);
      }
    }    
    return NumberSum;
  },
};

export default analyzer;
