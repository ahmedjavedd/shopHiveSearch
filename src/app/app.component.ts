import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'searchShopHive'

  products: any[] = []

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.http.get()
  }
}
