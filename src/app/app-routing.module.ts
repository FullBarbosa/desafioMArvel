import { CatalogComponent } from './pages/catalog/catalog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComicsComponent } from './pages/comics/comics.component';


const routes: Routes = [
  {
  path:"",
  component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
    },
  {
    path:"catalog",
    component:CatalogComponent
  },
  {
    path:"catalog/:id",
      component:ComicsComponent
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
