const msg = document.querySelector('.mg')
const guess = document.querySelector ('input');
const btn = document.querySelector('.btn') 
let play = false

let newWords = "";
let   randWords = "";
let sWords = ['Python', 'JavaScript', 'C++', 'Php', 'Java', 'C#', 'ReactJs', 'Swift', 'Android', 'Angular', 'Sql', 'Html', 'Css','Ruby','Perl']


const createNewWords  = ()=>{
      let ranNum = Math.floor(Math.random() * sWords.length)
      let newTempSwords = sWords[ranNum]
      return newTempSwords

}

const scrambleWords = (arr)=>{
  for(let i = arr.length -1; i>0;i--){
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i+1));
    arr[i] = arr[j];
    arr[j] = temp;
}
    return arr;

}
btn.addEventListener('click',function(){
    if(!play){
    play = true
    btn.innerHTML = "Guess"
    guess.classList.toggle('hidden');
    newWords = createNewWords(); 
     randWords =  scrambleWords(newWords.split("")).join("");
     msg.innerHTML =`Guess This Word: ${randWords}`;
  }else{
    let tempWord = guess.value;

    if(tempWord === newWords){
        play = false;

        msg.innerHTML = `Awesome It's Correct. It is ${newWords}`;
        btn.innerHTML = "Start Again";
        guess.classList.toggle('hidden');
        guess.value = "";

    }else{
        msg.innerHTML = `Sorry It is Not Correct. Please Try Again ${randWords}`;


    }
  }
})
   