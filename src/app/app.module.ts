import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/testgetjson/testgetjson';

// import {Ng2PaginationModule} from 'ng2-pagination';

// import { DataService } from '../pages/test-english/data.service';
import { TestenglIonicPage } from '../pages/test-english/test-english';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    TestenglIonicPage,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
    // Ng2PaginationModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    TestenglIonicPage,
    HomePage
  ],
  providers: [
    // DataService
  ]
})
export class AppModule {}
