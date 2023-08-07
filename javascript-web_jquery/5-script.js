<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>
<body>
  <div id="add_item">Click me to add an item to the list</div>
  <ul class="my_list">
    <!-- Initial list items -->
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>

  <script>
    $(document).ready(function() {
      $('#add_item').click(function() {
        const newItem = '<li>Item</li>';
        $('.my_list').append(newItem); // Add the new <li> element to the list
      });
    });
  </script>
</body>
</html>
