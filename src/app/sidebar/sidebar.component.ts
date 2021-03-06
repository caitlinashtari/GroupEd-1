import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '.././user.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  @Input() currentUser;
  @Input() classes;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    console.log(this.classes)
  }
}
