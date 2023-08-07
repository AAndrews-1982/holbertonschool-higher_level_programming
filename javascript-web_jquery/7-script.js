<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>
<body>
  <div id="character">Character Name will appear here</div>

  <script>
    $(document).ready(function() {
      $.get('https://swapi-api.hbtn.io/api/people/5/?format=json', function(data) {
        $('#character').text(data.name); // Update the text of the <div> with the character name
      });
    });
  </script>
</body>
</html>
