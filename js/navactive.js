$.home = function() {
  $("#header").load(function() {
    $(this).contents().find(".home").addClass("active");
  });
}

$.about = function() {
  $("#header").load(function() {
    $(this).contents().find(".about").addClass("active");
  });
}

$.categories = function() {
  $("#header").load(function() {
    $(this).contents().find(".categories").addClass("active");
  });
}

$.tags = function() {
  $("#header").load(function() {
    $(this).contents().find(".tags").addClass("active");
  });
}

$.archives = function() {
  $("#header").load(function() {
    $(this).contents().find(".archives").addClass("active");
  });
}