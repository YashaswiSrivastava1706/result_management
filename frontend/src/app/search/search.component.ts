import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  constructor(private service:ApiserviceService,private router:ActivatedRoute) { }

  readData:any;
  rollnumber:any;
  errormsg:any;
  name:any;


  ngOnInit(): void{
    console.log(this.router.snapshot.paramMap. get('name'),'getid SEARCHHHHHHHHHHHH');
    console.log(this.router.snapshot.paramMap. get('rollnumber'),'getid SEARCHHHHHHHHHHHH EkORRRRRRRRRRRRRR');
    
      this.rollnumber =this.router.snapshot.paramMap.get('rollnumber');
      this.name =this.router.snapshot.paramMap.get('name');
      
      if(this.rollnumber)
      {
        if(this.service.searchData(this.rollnumber,this.rollnumber,this.name).subscribe((res)=>{
          console.log('res naya naya ==>3333333333333');
          if(res.data[0].id==0){
            this.errormsg='Sorry Invalid Credentials !!';
          }else{
          this.resultForm.patchValue({
            rollnumber:res.data[0].rollnumber,
            name:res.data[0].name,
            email:res.data[0].email,
            score:res.data[0].score,
            id:res.data[0].id
      });
    }
    })
        )
        {
          console.log("naya if chl gya");
        }
        else{
          console.log("naya if chla ni hi gya");
        }
      }
      else{
        this.errormsg='All Feild is required !!';
      }
    
    }
    resultForm = new FormGroup({
      'rollnumber':new FormControl('',Validators.required),
      'name':new FormControl('',Validators.required),
      'email': new FormControl('',Validators.required),
      'score':new FormControl('',Validators.required),
      'id':new FormControl('',Validators.required),

    });


    // userSearch()
    // {
    //   if(this.resultForm.valid)
    //   {
  
    //     console.log("value in SEARCH",this.resultForm.value);
    //     console.log("value in ID",this.fullname);
    //     this.service.searchData(this.resultForm.value,this.fullname).subscribe((res)=>{
    //       console.log(res,'res search==>');
    //       console.log(res.data,'res search DATA==>');
    //       this.readData=res.data;
    //       console.log(this.readData,'res ReadDATA==>');
    //       this.resultForm.reset();
    //     });
    //   }
    //   else{
    //     this.errormsg='All Feild is required !!';
    //   }
    // }

  }



