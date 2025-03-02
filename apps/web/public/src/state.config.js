stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function stateConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/servers');
  $stateProvider
      .state({
        name: 'servers',
        url: '/servers',
        component: 'serversList',
      })
      .state({
        name: 'servers.view',
        url: '/view/:id',
        component: 'serversView',
      })
      .state({
        name: 'servers.edit',
        url: '/edit/:id',
        component: 'serversEdit',
      })
      .state({
        name: 'servers.create',
        url: '/create',
        component: 'serversEdit',
      })
      .state({
        name: 'servers.monitor',
        url: '/monitor',
        component: 'tasksMonitor',  
      })
      .state({
        name: 'journals',
        url: '/journals',
        component: 'journalsMain',
      })
      .state({
        name: 'charts',
        url: '/charts',
        component: 'chartsMain',
      })
      .state({
        name: 'groups',
        url: '/groups',
        component: 'groupsList',
      })
      .state({
        name: 'groups.create',
        url: '/create',
        component: 'groupsEdit',
      });
}
