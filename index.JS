
// const headingTextChange = documnet.getElementById('headingText');
const bodyChange = document.querySelector('body');
const toggleSwitch = document.getElementById('toggleSwitch');
toggleSwitch.onclick = function(){
    toggleSwitch.classList.toggle('active');
    bodyChange.classList.toggle('active');
    // headingTextChange.classList.toggle('active');
}