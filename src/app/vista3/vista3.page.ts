import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-vista3',
  templateUrl: './vista3.page.html',
  styleUrls: ['./vista3.page.scss'],
})
export class Vista3Page implements OnInit {

  constructor(public userServiceService: UserServiceService) { }

  // @Input('texto') seex:string;
  users: any[] = [];

  ngOnInit() {this.userServiceService.getRangos()
    .subscribe(
      (data) => { // Success
        // this.users = data['results'];
        console.log(data);
      },
      (error) =>{
        console.error(error);
      }
    )

    this.userServiceService.getEdades()
    .subscribe(
      (data) => { // Success
        // this.users = data['results'];
        console.log(data);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  

}
