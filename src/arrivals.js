export class Arrivals {
  
  configureRouter(config, router) {
    this.router = router;
    
    config.map([
      {
        name: 'arrival',
        route: ['', 'arrival'],
        href: '#/arrivals/arrival',
        moduleId:  PLATFORM.moduleName('arrival'),
        nav: true,
        title: 'Arrival'
      },
      {
        name: 'products',
        route: 'products/:index?',
        href: `#/arrivals/products`,
        moduleId:  PLATFORM.moduleName('products'),
        nav: true,
        title: 'Products',
        activationStrategy: 'replace'
      }
    ]);
  }
}