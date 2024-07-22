import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FileManagerComponent} from "./file-manager/file-manager.component";

const routes: Routes = [
  {
    path: "file-manager",
    component: FileManagerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
