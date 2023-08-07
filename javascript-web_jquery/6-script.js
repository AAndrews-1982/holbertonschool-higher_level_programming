<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>
<body>
  <div id="update_header">Click me to update the header text</div>
  <header>
    Header content here
  </header>

  <script>
    $(document).ready(function() {
      $('#update_header').click(function() {
        $('header').text('New Header!!!'); // Update the text of the <header> element
      });
    });
  </script>
</body>
</html>
