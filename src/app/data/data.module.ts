import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataSourceBase } from './data-source.service';
import { RemoteDataSourceService } from './remote-data-source.service';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: DataSourceBase, useClass: RemoteDataSourceService}
  ]
})
export class DataModule { }
