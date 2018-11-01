export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  configureRouter(config, router) {
    this.router = router;
    
    config.map([
      {
        name: 'home',
        route: ['', 'home'],
        moduleId:  PLATFORM.moduleName('home'),
        nav: true,
        title: 'Home'
      },
      {
        name: 'arrivals',
        route: 'arrivals',
        href: '#/arrivals',
        moduleId:  PLATFORM.moduleName('arrivals'),
        nav: true,
        title: 'Arrivals'
      },
      {
        name: 'products',
        route: 'products',
        href: '#/products',
        redirect: 'arrivals/products',
        nav: true,
        title: 'Products'
      }
    ]);
  }
}
