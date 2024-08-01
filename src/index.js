import analyzer from "./analyzer.js";

document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementsByName("user-input")[0];
  //Introduce las constantes para cada item de métricas que necesitas
  //const items = document.querySelector("container ul li");
  //Primero contador de palabras
  const wordCountElement = document.querySelector(".WordCount");
  //Segundo contador de caracteres
  const CharacterCountElement= document.querySelector(".CharacterCount");
  //Tercero caracteres sin espacios
  const CharacterCountExcludingSpacesElement=document.querySelector(".CharacterCountExcludingSpaces");
  //Cuarto longitud media de caracteres
  const AverageWordLengthElement=document.querySelector(".AverageWordLength");
  //Quinto contar los numeros
  const NumberCountElement=document.querySelector(".NumberCount");
  //Sexto suma números
  const NumberSumElement=document.querySelector(".NumberSum");


  userInput.addEventListener("input",()=>{
    //Contador de palabras: CHECK
    const wordCount = analyzer.getWordCount(userInput.value);
    wordCountElement.textContent = `Palabras: ${wordCount}`;
    //Contador de caracteres: CHECK
    const CharacterCount = analyzer.getCharacterCount(userInput.value);
    CharacterCountElement.textContent = `Caracteres: ${CharacterCount}`;
    //Contador de caracteres sin espacios: CHECK
    const CharacterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(userInput.value);
    CharacterCountExcludingSpacesElement.textContent = `Caracteres sin espacios: ${CharacterCountExcludingSpaces}`;
    //Contador de longitud media de palabras: CHECK pero veamos como ponerle dos decimales
    const AverageWordLength = analyzer.getAverageWordLength(userInput.value);
    AverageWordLengthElement.textContent = `Promedio de longitud: ${AverageWordLength}`;
    //Contador de numeros
    const NumberCount = analyzer.getNumberCount(userInput.value);
    NumberCountElement.textContent = `Conteo de números:${NumberCount}`;
    //Suma de números
    const NumberSum = analyzer.getNumberSum(userInput.value);
    NumberSumElement.textContent = `Suma de números:${NumberSum}`;
  });

  const resetbutton = document.getElementById("reset-button");
  resetbutton.addEventListener("click",() => {
    userInput.value = "";
    wordCountElement.textContent = `Palabras: 0`;
    CharacterCountElement.textContent = `Caracteres: 0`;
    CharacterCountExcludingSpacesElement.textContent = "Caracteres sin espacios: 0";
    AverageWordLengthElement.textContent = `Promedio de longitud: 0`;
    NumberCountElement.textContent = `Conteo de numeros: 0`;
    NumberSumElement.textContent= `Suma de números: 0`;
  });
});