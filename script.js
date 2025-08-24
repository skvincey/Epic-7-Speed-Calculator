setInterval(fetchHeroData, 2000); // Refresh the information input every 2 seconds

// PURPOSE: Take the information the player has input and calculate the speed of each hero
async function fetchHeroData(){
    await fetch("List of Heroes.txt")
        .then(response => response.text())
        .then(text => {
            heroNames = text.toLowerCase().split("\r\n"); // Hero Names Array

            // Cycles each hero by number
            for(let i = 1; i <= 6; i++){
                let heroNum = "hero" + i;
                let hero = document.getElementById(heroNum + "name").value; // Takes the hero's name by user input

                // Makes sure that the hero name is valid and on the list of heroes before displaying icon
                // If not on the list, keeps default Keaton icon/assigns default Keaton icon
                if(2 < hero.length && heroNames.includes(hero.toLowerCase())){
                    let heroPortrait = "https://epic7db.com/images/heroes/" + hero + ".webp"; // Gets hero portait
                    document.getElementById(heroNum + "icon").src = heroPortrait.replace(/\s/g, "-").toLowerCase(); // Displays hero portait to user
                }else{
                    document.getElementById(heroNum + "icon").src = "default_icon.webp";
                }

                // Calculate hero's speed using CR & top speed
                // CR% * top Speed
                let actualCR = parseInt(document.getElementById(heroNum + "cr").value) * parseInt(document.getElementById("topSpeed").value) / 100;
                let rangeTop = actualCR * 1.05;
                let rangeBot = actualCR * 0.95;
                document.getElementById("actualCR" + i).textContent = actualCR;
                document.getElementById("calcCR" + i).textContent = rangeBot.toFixed(2) + " - " + rangeTop.toFixed(2);
            }
        });
} // End async function fetchHeroData()
