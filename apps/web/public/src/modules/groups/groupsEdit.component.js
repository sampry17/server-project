import template from './groupsEdit.template';

const groupsEdit = {
  template: template(),
  controller: [
    'Group',
    '$state',
    'NotificationService',
    function(Group, $state, NotificationService) {
      this.group = new Group();
    
      this.save = function() {
        this.group.$save(function() {
          NotificationService.showSuccess('Группа сохранена');
          $state.go('groups', {}, { reload: true });
        });
      };
    }
  ]
};

export { groupsEdit };