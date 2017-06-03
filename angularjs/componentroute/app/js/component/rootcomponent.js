app.component('rootComponent',{
  templateUrl: 'template/rootcomponent.html',
  $routeConfig: [
    {path: '/heroes/...', name: 'Heroes', component: 'heroes'},
  ]
});

app.component('heroes', {
    template: '<h2>Heroes</h2>',
  });