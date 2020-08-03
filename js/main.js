$(document).ready(function() {
    $('#jokeBtn').click(function(e) {
        e.preventDefault();
        $.get('http://api.icndb.com/jokes/random', function(data){
            console.log(data.value.joke);
            $('#jokeText').html(data.value.joke);
        })
    })
});