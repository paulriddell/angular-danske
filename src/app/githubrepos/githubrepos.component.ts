import { Component, OnInit } from '@angular/core';
import { GitHubRepo } from '../githubrepo';  //Import our class
import { GitHubRepoService } from '../githubrepo.service';  //Import our service

@Component({
  selector: 'app-githubrepos',
  templateUrl: './githubrepos.component.html',
  styleUrls: ['./githubrepos.component.css']
})

export class GitHubReposComponent implements OnInit {

  //Array of githubrepot objects
  githubrepos: GitHubRepo[];
 
  constructor(private githubrepoService: GitHubRepoService) { }

  ngOnInit() {
    this.getGitHubRepos();
  }

  getGitHubRepos(): void {
    this.githubrepoService.getGitHubRepos()
      .subscribe(githubrepos => this.githubrepos = githubrepos);
  }

  save(gitHubRepo: GitHubRepo): void {
    this.githubrepoService.updateGitHubRepo(gitHubRepo)
      .subscribe();
  }

}
