import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TweetService } from '../services/tweet.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  username: string;
  composeForm: FormGroup;
  @ViewChild('fform', {static: false}) composeFormDirective;

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

  constructor(private cb: FormBuilder,
    private tweetService: TweetService,
    public dialogRef: MatDialogRef<ComposeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.username = this.data;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.composeForm = this.cb.group({
      topic: ['', [Validators.required, Validators.maxLength(25)]],
      comment: ['', [Validators.required, Validators.maxLength(500)]]
    });

    this.composeForm.valueChanges
      .subscribe((data) => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    if (!this.composeForm) { return; }

    const form = this.composeForm;
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
    let values = this.composeForm.value;
    this.tweetService.pushTweet(this.username, values.topic, values.comment);
    this.dialogRef.close();
  }

}
