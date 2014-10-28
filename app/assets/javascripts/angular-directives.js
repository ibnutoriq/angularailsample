AngulaRailSample.directive("myFirstDirective", function() {
  return { template: "Web Development That Doesn’t Hurt" };
});

AngulaRailSample.directive("mySecondDirective", function() {
  return { templateUrl: "/partial_example" };
});

AngulaRailSample.directive("myThirdDirective", function() {
  return { templateUrl: function(elem, attr) {
    return "/partial_" + attr.type;
  }};
});