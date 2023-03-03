import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiURL = environment.API_URL
  showLoader = false
  constructor(private httpClient: HttpClient) {}

  postQuery(query: any): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/Search?query=${query}`, query)
  }

  //   getData(): Observable<any> {
  //     return this.httpClient.get(`${this.apiURL}/users?userType=USER`)
  //   }
}
