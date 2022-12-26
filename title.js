var i=0;
setInterval(function(){
    var titles=[
"uzi Around 👿",
"uzi Since 🤑",
"uzi.2019. 😇"
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 250);
