AngulaRailSample
  .factory('testFactory', function(){
  	return {
  		sayHello: function(text){
  			return "Factory says \"Hello " + text + "\"";
  		},
  		sayGoodbye: function(text){
  			return "Factory says \"Goodbye " + text + "\"";
  		}  
  	}               
  })
  .service('testService', function(){
  	this.sayHello = function(text){
  		return "Service says \"Hello " + text + "\"";
  	};        
  	this.sayGoodbye = function(text){
  		return "Service says \"Goodbye " + text + "\"";
  	};   
  })
  .controller('HelloController', ['$scope','testService', 'testFactory',
  	function ($scope, testService, testFactory) {
    	$scope.fromService = testService.sayHello("World");
  		$scope.fromFactory = testFactory.sayHello("World");
   	}
  ])
  .controller('GoodbyeController', ['$scope','testService', 'testFactory',
  	function ($scope, testService, testFactory) {
    	$scope.fromService = testService.sayGoodbye("World");
  		$scope.fromFactory = testFactory.sayGoodbye("World");
   	}
  ]);
