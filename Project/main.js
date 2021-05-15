
const img = document.getElementById('firstImage');
const colors = document.getElementsByClassName('skateColor');

for (let i=0; i< colors.length; i++){
        let color= colors[i];

        color.addEventListener('click',function(){
            img.setAttribute('src','images/'+ this.id +'.png')
        })
 }
const tot= document.getElementById('total');
document.getElementsById("danceChoice").addEventListener('click',function(){
    tot.value += 120;
    });

function showDance() {
    document.getElementById('danceDetails').style.display = "block";
    document.getElementById('skateDetails').style.display = "none";
  }

function showSkate() {
    document.getElementById('skateDetails').style.display = "block";
    document.getElementById('danceDetails').style.display = "none"
}



