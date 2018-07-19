import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GitHubRepo } from './githubrepo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Jsonp } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class GitHubRepoService {

  private reposUrl = 'api/githubrepos';  // URL to web api
  private gitHubReposUrl = 'https://api.github.com/search/repositories?sort=stars&q=javascript&per_page=10&page=1';

  constructor(private http: HttpClient) { }


  getReposFromGitHub() {

    var HttpClient = function () {
      this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
          if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
            aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
      }
    }
    //Parse json into array of objects

    var client = new HttpClient();
    client.get(this.gitHubReposUrl, function (response) {

      var obj = JSON.parse(response);
      console.log(obj);
      console.log(obj.items[0].owner.avatar_url);

      obj.items[0].owner.avatar_url

      return obj;
      // do something with response
    });

    return null;
  }

  /** GET repos from the server */
  getGitHubRepos(): Observable<GitHubRepo[]> {
    //Todo: logic here to get repot from github and parse into array of 
    // githubrepo objects

    // 
    var gitHubJson = this.getReposFromGitHub();


    return this.http.get<GitHubRepo[]>(this.reposUrl)
      .pipe(
        tap(githubrepo => this.log(`fetched repos`)),
        catchError(this.handleError('getGitHubRepos', []))
      );
  }

  /** PUT: update the githubrepo on the server */
  updateGitHubRepo(githubrepo: GitHubRepo): Observable<any> {
    return this.http.put(this.reposUrl, githubrepo, httpOptions).pipe(
      tap(_ => this.log(`updated githubrepo id=${githubrepo.id}`)),
      catchError(this.handleError<any>('updateGitHubRepo'))
    );
  }


  // Log GitHubRepoService message */
  private log(message: string) {
    console.log('GitHubRepoService: ' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
