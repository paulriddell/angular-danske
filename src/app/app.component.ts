import { Component, OnInit } from '@angular/core';

import { MatTabsModule , MatIcon, MatToolbar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  logo = './assets/danske-bank-logo.svg';
  title = 'Danske Bank';
  navigation = [
    { link: 'dashboard', label: 'Dashboard' },
    { link: 'products', label: 'Products' },
    { link: 'githubrepos', label: 'GitHubRepos' },
    { link: 'about', label: 'About' }
  ];  
  toolbar = [
    { link: 'dashboard', label: 'Dashboard' },
    { link: 'products', label: 'Products' },
    { link: 'githubrepos', label: 'GitHubRepos' }

  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'Settings' }
  ];
}
