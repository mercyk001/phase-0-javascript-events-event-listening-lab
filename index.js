function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert () {
        alert('I was clickwd!');
    }
    input.addEventListener('click', clickAlert);
}
