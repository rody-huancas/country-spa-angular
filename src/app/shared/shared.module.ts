import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [HomePageComponent, AboutPageComponent, SidebarComponent, ContactPageComponent, SearchBoxComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomePageComponent, AboutPageComponent, ContactPageComponent, SidebarComponent, SearchBoxComponent],
})
export class SharedModule {}
