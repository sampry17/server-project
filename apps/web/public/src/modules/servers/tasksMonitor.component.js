import template from './tasksMonitor.template';

const tasksMonitor = {
  template: template(),
  controller: [
    'Task',
    function(Task) {
      this.$onInit = function() {
        this.selectedDate = new Date();  
        this.chartParams = {}; 

        this.loadTasks = function(date) {
          const formattedDate = date.toISOString().split('T')[0];
          console.log('Запрос даты:', formattedDate);
        
          Task.monitor({ date: formattedDate }).$promise
            .then((tasks) => {
              console.log('Полученные задачи:', tasks);
              this.updateChart(tasks);
            })
            .catch((error) => {
              console.error('Ошибка при загрузке данных:', error);
            });
        };
        
        this.updateChart = function(tasks) {
          const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
          const datasets = [];

          tasks.forEach((serverData, index) => {
            datasets.push({
              label: `Сервер ${serverData.name}`,
              data: serverData.tasksPerHour,
              backgroundColor: `hsl(${index * 40}, 70%, 50%)`,
            });
          });

          this.chartParams = {
            type: 'bar',
            data: {
              labels: labels,
              datasets: datasets,
            },
            options: {
              responsive: true,
              scales: {
                x: { 
                  stacked: true, 
                  beginAtZero: true 
                },
                y: { 
                  stacked: true, 
                  min: 0,
                  title: {
                    display: true,
                    text: 'Количество выполненных заданий'
                  }
                },
              },
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: `Количество заданий по серверам на ${this.selectedDate.toDateString()}`
                }
              }
            },
          };
        };

        this.loadTasks(this.selectedDate);
      };
    },
  ],
};

export { tasksMonitor };
