import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubReposComponent } from './githubrepos.component';

describe('GithubreposComponent', () => {
  let component: GitHubReposComponent;
  let fixture: ComponentFixture<GitHubReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
