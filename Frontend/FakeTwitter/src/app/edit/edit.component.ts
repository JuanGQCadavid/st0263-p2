import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TweetService } from '../services/tweet.service';
import { Tweet } from '../shared/tweet';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  tweet: Tweet;
  editForm: FormGroup;
  @ViewChild('fform', {static: false}) editFormDirective;

  formErrors = {
    'topic': '',
    'comment': ''
  }

  validationMessages = {
    'topic': {
      'required': 'A topic is required',
      'maxlength': 'The topic cannot be more than 25 characters long'
    },
    'comment': {
      'required': 'A comment is required',
      'maxlength': 'The comment cannot be more than 500 characters long'
    }
  }

  constructor(private eb: FormBuilder,
    private tweetService: TweetService,
    public dialogRef: MatDialogRef<EditComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) {
       this.tweet = this.data;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.editForm = this.eb.group({
      topic: [this.tweet.topic, [Validators.required, Validators.maxLength(25)]],
      comment: [this.tweet.content, [Validators.required, Validators.maxLength(500)]]
    });

    this.editForm.valueChanges
      .subscribe((data) => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    if (!this.editForm) { return; }

    const form = this.editForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        //clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    let values = this.editForm.value;
    this.tweet.topic = values.topic;
    this.tweet.content = values.comment;
    this.tweetService.updateTweet(this.tweet);
    this.dialogRef.close()
  }

}
