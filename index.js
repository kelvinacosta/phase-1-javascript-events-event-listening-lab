function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function(){
        alert('I was clicked')
    });
}
//Calling the function to get the alert 
addingEventListener()