import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { ContentComponent } from './content/content.component';
import { PlayerComponent } from './player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './pipes/safe.pipe';


@NgModule({
  declarations: [
    MainComponent,
     HeaderComponent,
      FooterComponent,
       LeftsidebarComponent,
        RightsidebarComponent,
         ContentComponent,
          PlayerComponent,
          SafePipe
        ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ]
})
export class UserModule { }
