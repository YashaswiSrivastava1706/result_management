import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    constructor(private service:ApiserviceService,private router:ActivatedRoute) { }

    errormsg:any;
    successmsg:any;
    getparamid:any;

    ngOnInit(): void{
      console.log(this.router.snapshot.paramMap. get('id'),'getid NWEEEE');
      this.getparamid =this.router.snapshot.paramMap.get('id');
      if(this.getparamid)
      {
        this.service.getSingleData(this.getparamid).subscribe((res)=>{
          console.log(res,'res==>');
          this.userForm.patchValue({
            rollnumber:res.data[0].rollnumber,
            name:res.data[0].name,
            email:res.data[0].email,
            score:res.data[0].score
     });
   });
      }
      
    }

    userForm = new FormGroup({
      'rollnumber':new FormControl('',Validators.required),
      'name':new FormControl('',Validators.required),
      'email': new FormControl('',Validators.required),
      'score':new FormControl('',Validators.required)
    });


    //create new user
    userSubmit()
    {
      if(this.userForm.valid)
      {

        console.log(this.userForm.value);
        this.service.createData(this.userForm.value).subscribe((res)=>{
          console.log(res,'res==>');
          this.userForm.reset();
          this.successmsg=res.message;
        });
      }
      else{
        this.errormsg='All Feild is required !!';
      }
    }

    //update user

    userUpdate()
    {
      console.log(this.userForm.value,'updatedform');

      if(this.userForm.valid){
        this.service.updateData(this.userForm.value,this.getparamid).subscribe((res)=>{
          console.log(res,'resupdated');
          this.successmsg=res.message;
        });

      }else{
        this.errormsg='All feild is required';
      }
    }

}
