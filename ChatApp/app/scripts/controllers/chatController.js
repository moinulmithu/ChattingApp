app.controller('chatController', ['$scope', function ($scope) {

    $scope.messages = [];
    var chat = $.connection.chatHub;

    chat.client.broadcastMessage = function (name, message) {
        $scope.messages.push({ UserName: name, Message: message });
        $scope.$apply();
    };
    $.connection.hub.start().done(function() {
        
    });

    //angular
    $scope.send = function() {
        chat.server.send($scope.username, $scope.message);
    };
}]);