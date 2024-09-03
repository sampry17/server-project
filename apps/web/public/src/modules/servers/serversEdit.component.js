import template from './serversEdit.template';

const serversEdit = {
  template: template(),
  controller: [
    'Server',
    'Group',
    '$stateParams',
    '$state',
    'NotificationService',
    function(Server, Group, $stateParams, $state, NotificationService) {
      if ($stateParams.id) {
        this.server = Server.get({ id: $stateParams.id });
      } else {
        this.server = new Server();
      }

      Group.query().$promise.then(groups => {
        this.groups = groups;
        console.log('Groups loaded:', this.groups);
      }).catch(error => {
        console.error('Error loading groups:', error);
      });

      this.save = function() {
        this.server.$save(function() {
          NotificationService.showSuccess('Сервер сохранен');
          $state.go('servers', {}, { reload: true });
        });
      };
    }
  ]
};

export { serversEdit };
