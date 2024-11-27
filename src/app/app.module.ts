import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { FormsModule } from "@angular/forms";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    // declarations: [AppComponent, HeaderComponent, UserComponent, TasksComponent], // This tells Angular about the components that are part of this module only for non standalone components
    declarations: [
        AppComponent, 
        HeaderComponent, 
        UserComponent
    ],
    bootstrap: [AppComponent], // This tells Angular to start with the AppComponent could be multiple components 
    imports: [BrowserModule, FormsModule, TasksModule] // This tells Angular about the components that are part of this module and can be standalone components
    // DatePipe is already included in the BrowserModule
})

export class AppModule {
  // ...
  // imports: [HeaderComponent, UserComponent, TasksComponent, NgIf, NgFor],
  // ...
}