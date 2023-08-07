<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>
<body>
  <div id="hello">Translation of "hello" will appear here</div>

  <script>
    $(document).ready(function() {
      $.get('https://stefanbohacek.com/hellosalut/?lang=fr', function(data) {
        $('#hello').text(data.hello); // Update the text of the <div> with the translated "hello"
      });
    });
  </script>
</body>
</html>
