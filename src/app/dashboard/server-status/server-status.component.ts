import { Component, DestroyRef, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss'
})
export class ServerStatusComponent implements OnInit {

  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private destroyRef = inject(DestroyRef);
  // private interval?: ReturnType<typeof setInterval>;

  constructor() {}

  ngOnInit() {  //if any error it will not be triggered and tough to debug
    // this.interval = 
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000); 

    this.destroyRef.onDestroy(() => {
      clearInterval(interval); //will be called when component is about to be destroyed
    })
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}

