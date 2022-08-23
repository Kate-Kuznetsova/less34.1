const playList = [

    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },

    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },

    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },

    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },

    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },

    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },

    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },

    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }

];

let div = document.createElement('div')
let ul = document.createElement('ul')

document.body.append(div)
div.append(ul)

showPlayList()

function showPlayList() {
    for (let i = 0; i < playList.length; i++) {
        let li = document.createElement('li');
        li.append(`${playList[i].author} - ${playList[i].song}`);
        ul.append(li);
    }
}


