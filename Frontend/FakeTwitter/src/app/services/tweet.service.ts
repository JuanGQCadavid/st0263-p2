import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tweet } from '../shared/tweet';
import { Filter } from '../shared/filter';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private tweets: Tweet[];

  constructor(private http: HttpClient) { }

  getTweets(filter?: Filter) : Observable<Tweet[]> {
    if (filter) {
      if (filter.author && filter.author.length > 0) {
        return this.http.get<Tweet[]>(baseURL + 'tweets?author=' + filter.author)
      }
      if (filter.topic && filter.topic.length > 0) {
        return this.http.get<Tweet[]>(baseURL + 'tweets?topic=' + filter.topic)
      }
    }
    return this.http.get<Tweet[]>(baseURL + 'tweets');
  }

  getTweet(id: string) : Observable<Tweet> {
    return this.http.get<Tweet>(baseURL + 'tweets/' + id);
  }

  updateTweet(tweet: Tweet) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.put<Tweet>(baseURL + 'tweets/' + tweet._id, tweet, httpOptions)
      .subscribe(response => {});
    // Subscribe to observables to activate them
  }

  pushTweet(author: string, topic: string, content: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post<Tweet>(baseURL + 'tweets/',
      { author: author, topic: topic, content: content }, httpOptions)
      .subscribe(response => {});
  }

  deleteTweet(tweet: Tweet) {
    this.http.delete(baseURL + 'tweets/' + tweet._id)
      .subscribe(response => {});
  }

}
