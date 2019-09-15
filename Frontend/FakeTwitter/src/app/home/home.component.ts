import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';

import { TweetService } from '../services/tweet.service';
import { AuthService } from '../services/auth.service';

import { Filter } from '../shared/filter';
import { Tweet } from '../shared/tweet';

import { ComposeComponent } from '../compose/compose.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subscription: Subscription;
  tweetSubscription: Subscription;
  username: string = undefined;
  tweets: Tweet[];
  filterForm: FormGroup;
  filter: Filter = null;
  @ViewChild('fform', {static: false}) filterFormDirective;


  constructor(private tweetService: TweetService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    public dialog: MatDialog) {
      this.createForm();
    }

  ngOnInit() {
    this.tweetSubscription = this.tweetService.getTweets(this.filter)
      .subscribe((tweets) => this.tweets = tweets);
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
      .subscribe(name => { console.log('home: ' + name); this.username = name; });
  }

  createForm() {
    this.filterForm = this.fb.group({
      author: ['', []],
      topic: ['', []],
    });
  }

  onSubmit() {
    // Filter
    this.filter = this.filterForm.value;
    this.ngOnInit();
  }

  deleteTweet(tweet: Tweet) {
    this.tweetService.deleteTweet(tweet);
    this.ngOnInit();
  }

  openComposeForm() {
    this.dialog.open(ComposeComponent, {
      data: this.username
    });
  }

  openEditForm(tweet: Tweet) {
    this.dialog.open(EditComponent, {
      data: tweet
    });
  }

}
