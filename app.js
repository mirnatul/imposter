const imposterBox = `box-${Math.floor(Math.random() * 9) + 1}`;

const points = document.getElementById('points');
let life = parseInt(points.innerText);

const result = document.getElementById('result');

const allBoxes = document.getElementsByClassName('box');


for (const allBox of allBoxes) {
    allBox.addEventListener('click', function() {
        if(this.classList.contains(imposterBox)) {
            console.log("success");
            this.style.backgroundImage = "url('yes.gif')";
            points.innerText = life+1;
            result.innerText = `Congo!! you succeed in ${life+1} try`
        }
        else {
            console.log("You failed");
            this.style.backgroundImage = "url('no.gif')";
            life++;
            points.innerText = life;
        }
    })
}