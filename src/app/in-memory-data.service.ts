import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 1, name: 'Mortgages' },
      { id: 2, name: 'Current Accounts' },
      { id: 3, name: 'Loans' }
    ];

    const githubrepos = [
      { id: 1, name: 'vue', description: 'A progressive, incrementally-adoptable JavaScript framework for building UI on the web.', avatarUrl: 'https://avatars1.githubusercontent.com/u/6128107?v=4', isVisible:true }
    ];


    return {products,githubrepos };
  }
}