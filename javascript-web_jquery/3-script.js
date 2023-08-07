<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>
<body>
  <div id="red_header">Click me to change the header color</div>
  <header>
    Header content here
  </header>

  <script>
    $(document).ready(function() {
      $('#red_header').click(function() {
        $('header').addClass('red'); // Add the class "red" to the <header> element
      });
    });
  </script>
</body>
</html>
