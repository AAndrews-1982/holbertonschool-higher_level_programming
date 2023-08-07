<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <style>
    .red {
      color: red;
    }
    .green {
      color: green;
    }
  </style>
</head>
<body>
  <div id="toggle_header">Click me to toggle the header color</div>
  <header class="red">
    Header content here
  </header>

  <script>
    $(document).ready(function() {
      $('#toggle_header').click(function() {
        $('header').toggleClass('red green'); // Toggle between the classes "red" and "green"
      });
    });
  </script>
</body>
</html>
