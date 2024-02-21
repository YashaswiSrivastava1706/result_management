import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})



export class StudentComponent implements OnInit{

  constructor(private service:ApiserviceService,private router:ActivatedRoute) { }

  
searchForm = new FormGroup({
  'rollnumber':new FormControl('',Validators.required),
  'name':new FormControl('',Validators.required)
});

  readData:any;
  errormsg:any;
  successmsg:any;
  getparamid:any;

  get isFormValid() {
    return this.searchForm.valid && this.searchForm.value.rollnumber && this.searchForm.value.name;
  }

  ngOnInit(): void{
    console.log(this.router.snapshot.paramMap. get('id'),'getid HERE');
    this.getparamid =this.router.snapshot.paramMap.get('id');

    // Subscribe to form value changes and update isFormValid accordingly
    // this.searchForm.valueChanges.subscribe(() => {
    //   this.isFormValid = this.searchForm.valid;

    }

    userUpdate()
    {
      console.log(this.searchForm.value,'value hai form');

      if(this.searchForm.valid){
       console.log('value hai ');
         

      }else{
        this.errormsg='All feild is required';
      }
    }
  




}
