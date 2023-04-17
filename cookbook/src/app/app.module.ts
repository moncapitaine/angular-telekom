import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MichaelComponent } from './components/michael/michael.component'
import { PersonComponent } from './components/person/person.component'
import { DeleteButtonComponent } from './components/delete-button/delete-button.component'

@NgModule({
  declarations: [
    AppComponent,
    MichaelComponent,
    PersonComponent,
    DeleteButtonComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
