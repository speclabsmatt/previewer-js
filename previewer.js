function preview(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      input.nextElementSibling.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
}

$(".preview--input").change(function() {
  preview(this);
});
