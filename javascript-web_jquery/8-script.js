<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>
<body>
  <ul id="list_movies">Movie titles will appear here</ul>

  <script>
    $(document).ready(function() {
      $.get('https://swapi-api.hbtn.io/api/films/?format=json', function(data) {
        const movies = data.results;

        // Loop through each movie and add its title to the list
        $.each(movies, function(index, movie) {
          $('#list_movies').append('<li>' + movie.title + '</li>');
        });
      });
    });
  </script>
</body>
</html>
