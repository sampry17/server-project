const Task = [
  '$resource',
  function($resource) {
    return $resource('/tasks/:id', { id: '@_id' }, {
      addRandom: {
        url: '/tasks/add-random',
        method: 'get',
        isArray: false,
      },
      monitor: {
        url: '/tasks/monitor',
        method: 'get',
        isArray: true,
        params: { date: '@date' }
      }
    });
  },
];

export { Task };

