const sounds = [
    {
        name: 'tada',
        emoji: "🥇"
    },
     {
        name: 'twinkle',
        emoji: "✨"
    },
    {
        name: 'daaamn',
        emoji: "😮"
    },
    {
        name: 'booo',
        emoji: "👻"
    },
    {
        name: 'clap',
        emoji: "👏"
    },
    {
        name: 'witch',
        emoji: "🧙‍♀️"
    },
    {
        name: 'train',
        emoji: "🚂"
    },
    {
        name: '90sParty',
        emoji: "☢️"
    },
    {
        name: 'growing',
        emoji: "🌪"
    },
    {
        name: 'elephant',
        emoji: "🐘"
    },{
        name: 'heaven',
        emoji: "😇"
    },
    {
        name: 'timeUP',
        emoji: "🛑"
    }
]

const container = document.getElementById("container")

function render() {
   for (let i=0; i < sounds.length; i++) {
       const newBtn = document.createElement("button")
       newBtn.textContent = `${sounds[i].emoji}`
       newBtn.classList.add('sound')
       newBtn.addEventListener("click", ()=> {
           new Audio(`sounds/${sounds[i].name}.mp3`).play();
       })
       container.append(newBtn)
       
       
   }
}

render()

// function play(){
//     new Audio("sounds/tada.mp3").play();
// }

