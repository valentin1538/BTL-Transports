
const mission_1 = document.getElementById("mission1");
const mission_2 = document.getElementById("mission2");
const mission_3 = document.getElementById("mission3");
const mission_4 = document.getElementById("mission4");
const mission_5 = document.getElementById("mission5");
const mission_6 = document.getElementById("mission6");
const mission_7 = document.getElementById("mission7");
const mission_8 = document.getElementById("mission8");
const mission_9 = document.getElementById("mission9");
const mission_10 = document.getElementById("mission10");
const btnMission = document.getElementById("btn_mission");

if (btnMission) {

    btnMission.addEventListener('click', ()=>{
        const nb = document.getElementById("nombreMission").value;
        console.log(nb);
        if (nb == 10) {
            mission_1.style.display = 'block';
            
            mission_2.style.display = 'block';
            mission_3.style.display = 'block';
            mission_4.style.display = 'block';
            mission_5.style.display = 'block';
            mission_6.style.display = 'block';
            mission_7.style.display = 'block';
            mission_8.style.display = 'block';
            mission_9.style.display = 'block';
            mission_10.style.display = 'block';
        } else if (nb == 9) {
            mission_1.style.display = 'block';
            mission_2.style.display = 'block';
            mission_3.style.display = 'block';
            mission_4.style.display = 'block';
            mission_5.style.display = 'block';
            mission_6.style.display = 'block';
            mission_7.style.display = 'block';
            mission_8.style.display = 'block';
            mission_9.style.display = 'block';
            mission_10.style.display = 'none';
        } else if (nb == 8) {
            mission_1.style.display = 'block';
            mission_2.style.display = 'block';
            mission_3.style.display = 'block';
            mission_4.style.display = 'block';
            mission_5.style.display = 'block';
            mission_6.style.display = 'block';
            mission_7.style.display = 'block';
            mission_8.style.display = 'block';
            mission_9.style.display = 'none';
            mission_10.style.display = 'none';
        } else if (nb == 7) {
            mission_1.style.display = 'block';
            mission_2.style.display = 'block';
            mission_3.style.display = 'block';
            mission_4.style.display = 'block';
            mission_5.style.display = 'block';
            mission_6.style.display = 'block';
            mission_7.style.display = 'block';
            mission_8.style.display = 'none';
            mission_9.style.display = 'none';
            mission_10.style.display = 'none';
        } else if (nb == 6) {
            mission_1.style.display = 'block';
            mission_2.style.display = 'block';
            mission_3.style.display = 'block';
            mission_4.style.display = 'block';
            mission_5.style.display = 'block';
            mission_6.style.display = 'block';
            mission_7.style.display = 'none';
            mission_8.style.display = 'none';
            mission_9.style.display = 'none';
            mission_10.style.display = 'none';
        } else if (nb == 5) {
            mission_1.style.display = 'block';
            mission_2.style.display = 'block';
            mission_3.style.display = 'block';
            mission_4.style.display = 'block';
            mission_5.style.display = 'block';
            mission_6.style.display = 'none';
            mission_7.style.display = 'none';
            mission_8.style.display = 'none';
            mission_9.style.display = 'none';
            mission_10.style.display = 'none';
        } else if (nb == 4) {
            mission_1.style.display = 'block';
            mission_2.style.display = 'block';
            mission_3.style.display = 'block';
            mission_4.style.display = 'block';
            mission_5.style.display = 'none';
            mission_6.style.display = 'none';
            mission_7.style.display = 'none';
            mission_8.style.display = 'none';
            mission_9.style.display = 'none';
            mission_10.style.display = 'none';
        } else if (nb == 3) {
            mission_1.style.display = 'block';
            mission_2.style.display = 'block';
            mission_3.style.display = 'block';
            mission_4.style.display = 'none';
            mission_5.style.display = 'none';
            mission_6.style.display = 'none';
            mission_7.style.display = 'none';
            mission_8.style.display = 'none';
            mission_9.style.display = 'none';
            mission_10.style.display = 'none';
        } else if (nb == 2) {
            mission_1.style.display = 'block';
            mission_2.style.display = 'block';
            mission_3.style.display = 'none';
            mission_4.style.display = 'none';
            mission_5.style.display = 'none';
            mission_6.style.display = 'none';
            mission_7.style.display = 'none';
            mission_8.style.display = 'none';
            mission_9.style.display = 'none';
            mission_10.style.display = 'none';
        } else if (nb == 1) {
            mission_1.style.display = 'block';
            mission_2.style.display = 'none';
            mission_3.style.display = 'none';
            mission_4.style.display = 'none';
            mission_5.style.display = 'none';
            mission_6.style.display = 'none';
            mission_7.style.display = 'none';
            mission_8.style.display = 'none';
            mission_9.style.display = 'none';
            mission_10.style.display = 'none';
        } else if (nb == 0) {
            mission_1.style.display = 'none';
            mission_2.style.display = 'none';
            mission_3.style.display = 'none';
            mission_4.style.display = 'none';
            mission_5.style.display = 'none';
            mission_6.style.display = 'none';
            mission_7.style.display = 'none';
            mission_8.style.display = 'none';
            mission_9.style.display = 'none';
            mission_10.style.display = 'none';
        } else {
            console.log("Out of range.")
        }
    })
}

const profil_1 = document.getElementById("profil1");
const profil_2 = document.getElementById("profil2");
const profil_3 = document.getElementById("profil3");
const profil_4 = document.getElementById("profil4");
const profil_5 = document.getElementById("profil5");
const profil_6 = document.getElementById("profil6");
const profil_7 = document.getElementById("profil7");
const profil_8 = document.getElementById("profil8");
const profil_9 = document.getElementById("profil9");
const profil_10 = document.getElementById("profil10");
const btnProfil = document.getElementById("btn_profil");

if (btnProfil) {

    btnProfil.addEventListener('click', ()=>{
        const nb = document.getElementById("nombreProfil").value;
        console.log(nb);
        if (nb == 10) {
            profil_1.style.display = 'block';
            profil_2.style.display = 'block';
            profil_3.style.display = 'block';
            profil_4.style.display = 'block';
            profil_5.style.display = 'block';
            profil_6.style.display = 'block';
            profil_7.style.display = 'block';
            profil_8.style.display = 'block';
            profil_9.style.display = 'block';
            profil_10.style.display = 'block';
        } else if (nb == 9) {
            profil_1.style.display = 'block';
            profil_2.style.display = 'block';
            profil_3.style.display = 'block';
            profil_4.style.display = 'block';
            profil_5.style.display = 'block';
            profil_6.style.display = 'block';
            profil_7.style.display = 'block';
            profil_8.style.display = 'block';
            mission_9.style.display = 'block';
            profil_10.style.display = 'none';
        } else if (nb == 8) {
            profil_1.style.display = 'block';
            profil_2.style.display = 'block';
            profil_3.style.display = 'block';
            profil_4.style.display = 'block';
            profil_5.style.display = 'block';
            profil_6.style.display = 'block';
            profil_7.style.display = 'block';
            profil_8.style.display = 'block';
            profil_9.style.display = 'none';
            profil_10.style.display = 'none';
        } else if (nb == 7) {
            profil_1.style.display = 'block';
            profil_2.style.display = 'block';
            profil_3.style.display = 'block';
            profil_4.style.display = 'block';
            profil_5.style.display = 'block';
            profil_6.style.display = 'block';
            profil_7.style.display = 'block';
            profil_8.style.display = 'none';
            profil_9.style.display = 'none';
            profil_10.style.display = 'none';
        } else if (nb == 6) {
            profil_1.style.display = 'block';
            profil_2.style.display = 'block';
            profil_3.style.display = 'block';
            profil_4.style.display = 'block';
            profil_5.style.display = 'block';
            profil_6.style.display = 'block';
            profil_7.style.display = 'none';
            profil_8.style.display = 'none';
            profil_9.style.display = 'none';
            profil_10.style.display = 'none';
        } else if (nb == 5) {
            profil_1.style.display = 'block';
            profil_2.style.display = 'block';
            profil_3.style.display = 'block';
            profil_4.style.display = 'block';
            profil_5.style.display = 'block';
            profil_6.style.display = 'none';
            profil_7.style.display = 'none';
            profil_8.style.display = 'none';
            profil_9.style.display = 'none';
            profil_10.style.display = 'none';
        } else if (nb == 4) {
            profil_1.style.display = 'block';
            profil_2.style.display = 'block';
            profil_3.style.display = 'block';
            profil_4.style.display = 'block';
            profil_5.style.display = 'none';
            profil_6.style.display = 'none';
            profil_7.style.display = 'none';
            profil_8.style.display = 'none';
            profil_9.style.display = 'none';
            profil_10.style.display = 'none';
        } else if (nb == 3) {
            profil_1.style.display = 'block';
            profil_2.style.display = 'block';
            profil_3.style.display = 'block';
            profil_4.style.display = 'none';
            profil_5.style.display = 'none';
            profil_6.style.display = 'none';
            profil_7.style.display = 'none';
            profil_8.style.display = 'none';
            profil_9.style.display = 'none';
            profil_10.style.display = 'none';
        } else if (nb == 2) {
            profil_1.style.display = 'block';
            profil_2.style.display = 'block';
            profil_3.style.display = 'none';
            profil_4.style.display = 'none';
            profil_5.style.display = 'none';
            profil_6.style.display = 'none';
            profil_7.style.display = 'none';
            profil_8.style.display = 'none';
            profil_9.style.display = 'none';
            profil_10.style.display = 'none';
        } else if (nb == 1) {
            profil_1.style.display = 'block';
            profil_2.style.display = 'none';
            profil_3.style.display = 'none';
            profil_4.style.display = 'none';
            profil_5.style.display = 'none';
            profil_6.style.display = 'none';
            profil_7.style.display = 'none';
            profil_8.style.display = 'none';
            profil_9.style.display = 'none';
            profil_10.style.display = 'none';
        } else if (nb == 0) {
            profil_1.style.display = 'none';
            profil_2.style.display = 'none';
            profil_3.style.display = 'none';
            profil_4.style.display = 'none';
            profil_5.style.display = 'none';
            profil_6.style.display = 'none';
            profil_7.style.display = 'none';
            profil_8.style.display = 'none';
            profil_9.style.display = 'none';
            profil_10.style.display = 'none';
        } else {
            console.log("Out of range.")
        }
    })
}
