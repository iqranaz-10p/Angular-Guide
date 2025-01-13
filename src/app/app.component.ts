import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log('click button:', this.clickCount());
    });
  }

  ngOnInit(): void {
    // const subscription = interval(1000).pipe(
    //   map((val) => val * 2) //operators are key rx features that allow us to manipulate the data emitted by observables
    // ).subscribe({ //interval is an observable that emits a number every second/ or given time
    //   next: (val) => console.log(val), //next is a callback function that will be called when the observable emits a value
    //   error: (err) => console.log(err), //error is a callback function that will be called when the observable emits an error
    // });
    
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });
  }
}
  
  // In the above code, we are using the  interval  function from  rxjs  to create an observable that emits a number every second. We are subscribing to this observable and passing an object with  next  and  error  functions. The  next  function will be called every time the observable emits a value, and the  error  function will be called if the observable emits an error. 
  // Now, if you run the application, you will see the numbers being printed to the console every second. 
  // Conclusion 

