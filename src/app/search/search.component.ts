import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { ApiService } from '../Connectivity/services'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup
  searchText: string
  products: any[] = []
  shopHiveData: any[] = []
  constructor(public http: HttpClient, public service: ApiService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchQuery: new FormControl(''),
    })

    this.searchText = ''
    this.getProducts()
  }

  getProducts() {}

  onSearch() {
    this.searchText = this.searchForm.controls['searchQuery'].value
    this.service.postQuery(this.searchText).subscribe((res) => {
      this.products = Object.values(res)
      this.products.forEach((pro) => {
        this.shopHiveData = pro[0].data
        //     })
      })
    })
  }
}
