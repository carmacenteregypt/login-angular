import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit  {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm){
    console.log(f)
  }
}
