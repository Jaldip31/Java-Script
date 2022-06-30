var playSong = new Audio("songs/Bolo Zuba Kesari - Vimal Elaichi ! Ad.mp3")
let mainPlay = document.getElementById("mainPlay")
let myRange = document.getElementById("myRange")
let song = Array.from(document.getElementsByClassName("song"))
let songPlayIcon = Array.from(document.getElementsByClassName("songPlayIcon"))
let songInfo = document.getElementById("songInfo")
let backward = document.getElementById("backward")
let forward = document.getElementById("forward")

let songArr = [
    {s_name:"Bolo Zuba Kesari - Vimal Elaichi ! Ad"},
    {s_name:"Kgf Malik ! KGF ! KGF BGM ! KGF Instrumental"},
    {s_name:"Mahi Menu Chadyo Na - Kesari Movie"},
    {s_name:"Singham Ringtone"},
    {s_name:"Ve Mahi Kesari Movie Song"},
    {s_name:"Srivalli - Sid Sriram ! Kannada Song"},
    {s_name:"Srivalli Ringtone"},
    {s_name:"Udd Ja Kaale Kanwan - Sunny Deol"},
    {s_name:"Vitthal Tidi - Mahadev(aditya gadhvi)"},
    {s_name:"Vimal Elaichi - Ajay Devgn ! Shahrukh Khan ! Hindi 60 secs"}
]

// set song name in HTML
song.forEach((ele,ind)=>{
    ele.getElementsByClassName("songName")[0].innerText = songArr[ind].s_name
    ele.getElementsByClassName("songPlayIcon")[0].id = songArr[ind].s_name
})

// play song
mainPlay.addEventListener("click",()=>{
    if(mainPlay.className == "fas fa-2x fa-solid fa-play"){
        mainPlay.className="fas fa-2x fa-solid fa-pause"
        playSong.play()
   
    }
    else{
        mainPlay.className="fas fa-2x fa-solid fa-play"
        playSong.pause()
    }
})

// auto update range
playSong.addEventListener('timeupdate', ()=>{ 
    myRangeValue = parseInt((playSong.currentTime/playSong.duration)* 100); 
    myRange.value = myRangeValue;
    let currentSong = songInfo.textContent

    if(playSong.currentTime==playSong.duration){
        songArr.filter((ele,ind)=>{
            if(ele.s_name == currentSong){
                playSong.src = `songs/${songArr[ind+1].s_name}.mp3`
                playSong.play()
                songInfo.innerText = songArr[ind+1].s_name
            }
        })
    }
})

//change range
myRange.addEventListener('change', ()=>{
    playSong.currentTime = myRange.value * playSong.duration/100;
})

//change songs
songPlayIcon.forEach((ele,ind)=>{
    let currentSongIndex = 0
    ele.addEventListener("click",(x)=>{
        if(currentSongIndex == ind){
            if(x.target.className == "songPlayIcon fa-solid fa-pause"){
                mainPlay.className="fas fa-2x fa-solid fa-play"
                x.target.className = "songPlayIcon fa-solid fa-play"
                playSong.pause()
                console.log("iff");
            }
            else {
                mainPlay.className = "fas fa-2x fa-solid fa-pause"
                x.target.className = "songPlayIcon fa-solid fa-pause"
                playSong.play()
                console.log("else");
            }
        }
        else{
            currentSongIndex = ind
            songPlayIcon.forEach(e=>{
                e.className = "songPlayIcon fa-solid fa-play"
            })
            x.target.className = "songPlayIcon fa-solid fa-pause"
            playSong.src = `songs/${x.target.id}.mp3`
            playSong.play()
            playSong.currentTime = 0;
            // myRange.value = "0"
            mainPlay.className = "fas fa-2x fa-solid fa-pause"
            songInfo.innerText = x.target.id

        }
    })
})


// next song
forward.addEventListener("click",()=>{
    let currentSong = songInfo.textContent
    songArr.filter((ele,ind)=>{
        if(ele.s_name == currentSong){
            playSong.src = `songs/${songArr[ind+1].s_name}.mp3`
            playSong.play()
            songInfo.innerText = songArr[ind+1].s_name
        }
    })
})


//previous song
backward.addEventListener("click",()=>{
    let currentSong = songInfo.textContent
    songArr.filter((ele,ind)=>{
        if(ele.s_name == currentSong){
            playSong.src = `songs/${songArr[ind-1].s_name}.mp3`
            playSong.play()
            songInfo.innerText = songArr[ind-1].s_name
        }
    })
})

