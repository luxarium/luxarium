import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  static get parameters() {
        return [[Http]];
    }
  
  constructor(private http:Http,private gallery : any) {

  }
  
  showAll(){
    console.log("salam");
    this.gallery.showAll()
    .subcribe()
  }

public setPerson = () => {  
   console.log("salam");
  var url = 'http://localhost:8070/showAllPost';
        var response = this.http.get(url);
        // response = JSON.parse(response.toString())
        console.log("response : ",response);
}
  searchMovies(movieName) {
    console.log("salam");
        var url = 'http://localhost:8070/showAllPost';
        var response = this.http.post(url,"");
        console.log("response : ",response);
        return response;
    }
}
