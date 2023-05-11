angular.module('app', []).controller('MyCtrl', function($scope) {
  $scope.data = {
    selectedOption: null,

    selectInputs : [
      {id: '1', name: 'Select'},
      {id: '2', name: 'Select'},
      {id: '3', name: 'Select'},
      {id: '4', name: 'Select'},
      {id: '5', name: 'Select'},
      {id: '6', name: 'Select'},
      {id: '7', name: 'Select'},
      {id: '8', name: 'Select'},
      {id: '9', name: 'Select'},
      {id: '10', name: 'Select'},
    ],

    options: [
      {id: '1', name: 'Option A'},
      {id: '2', name: 'Option B'},
      {id: '3', name: 'Option C'},
      {id: '4', name: 'Option D'},
      {id: '5', name: 'Option E'},
      {id: '6', name: 'Option F'},
      {id: '7', name: 'Option G'},
      {id: '8', name: 'Option H'},
      {id: '9', name: 'Option I'},
      {id: '10', name: 'Option J'},
    ]
  };

  $scope.getAvailableOptions = function(current) {
    return this.data.options.filter(
      (option) => option.id === current ||
      !this.data.selectInputs.some(input => input.selectedOption === option.id));
  };
});
