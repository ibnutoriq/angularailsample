AngulaRailSample.factory('testFactory', function(){
	return {
		sayHello: function(text){
			return "Factory says \"Hello " + text + "\"";
		},
		sayGoodbye: function(text){
			return "Factory says \"Goodbye " + text + "\"";
		}  
	}               
});

AngulaRailSample.service('testService', function(){
	this.sayHello = function(text){
		return "Service says \"Hello " + text + "\"";
	};        
	this.sayGoodbye = function(text){
		return "Service says \"Goodbye " + text + "\"";
	};   
});

AngulaRailSample
  .controller('HelloController', ['$scope','testService', 'testFactory',
  	function ($scope, testService, testFactory) {
    	$scope.fromService = testService.sayHello("World");
			$scope.fromFactory = testFactory.sayHello("World");
   	}
  ]);

AngulaRailSample
  .controller('GoodbyeController', ['$scope','testService', 'testFactory',
  	function ($scope, testService, testFactory) {
    	$scope.fromService = testService.sayGoodbye("World");
			$scope.fromFactory = testFactory.sayGoodbye("World");
   	}
  ]);

// function HelloCtrl($scope, testService, testFactory)
// {
// 	$scope.fromService = testService.sayHello("World");
// 	$scope.fromFactory = testFactory.sayHello("World");
// }

// function GoodbyeCtrl($scope, testService, testFactory)
// {
// 	$scope.fromService = testService.sayGoodbye("World");
// 	$scope.fromFactory = testFactory.sayGoodbye("World");
// }
