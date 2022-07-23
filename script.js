function shuffle(array){
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[currentIndex],array[currentIndex],];
    
    }
    return array;

}
function spin(){
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";

    let Harshita = shuffle([1890, 2250, 2610]);
    let Himani = shuffle([1850, 2210, 2570]);
    let Himanshi = shuffle([1770, 2130, 2490]);
    let Ishita = shuffle([1810, 2170, 2530]);
    let Jahnvi = shuffle([1750, 2110, 2470]);
    let Jaishree = shuffle([1610, 1970, 2330]);
    let Jyoti = shuffle([1630, 1990, 2350]);
    let Kamya = shuffle([1570, 1930, 2290]);

    let results = shuffle([
        Harshita[0],
        Himani[0],
        Himanshi[0],
        Jaishree[0],
        Ishita[0],
        Jahnvi[0],
        Jyoti[0],
        Kamya[0]


    ]);

    if(Harshita.includes(results[0])) SelectedItem = "HARSHITA";
    if(Himani.includes(results[0])) SelectedItem = "HIMANI";
    if(Jaishree.includes(results[0])) SelectedItem = "JAISHREE";
    if(Himanshi.includes(results[0])) SelectedItem = "HIMANSHI";
    if(Ishita.includes(results[0])) SelectedItem = "ISHITA";
    if(Jahnvi.includes(results[0])) SelectedItem = "JAHNVI";
    if(Jyoti.includes(results[0])) SelectedItem = "JYOTI";
    if(Kamya.includes(results[0])) SelectedItem = "KAMYA";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");        
    }, 5000);

    setTimeout(function(){   
        applause.play();     
        Swal.fire({
            title: "CONGRATULATIONS!",
            html: 'THE NEW TEAM LEADER IS ' + SelectedItem,
            imageUrl:'hooray.png',
            imageWidth: 200,
            imageHeigth: 180,
            imageAlt: 'Custom image',
    
        })
    },5500)
    
    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";        
    }, 6000);
    
    
    
    
}