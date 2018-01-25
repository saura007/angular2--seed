import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HelloService {

  constructor(private http: HttpClient) { }
  abc() {
    return this.http.get('../assets/data.json');
  }
}
