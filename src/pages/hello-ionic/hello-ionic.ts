import { Component ,ViewChild} from '@angular/core';
import {  Platform, NavParams ,NavController,MenuController,Nav} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { ItemDetailsPage } from '../item-details/item-details';
import {AddPostPage} from '../add-post/add-post'
@Component({
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
    @ViewChild(Nav) nav: Nav;
  posts : any;
  constructor(private http:Http ) {
    this.ShowAll();
  }
 addPost (){
       this.nav.push(AddPostPage   , {ListPage : this});
 }

  public ShowAll = () => {  
    console.log("salam");
    this.showAllPosts().subscribe(data =>{
      this.posts = data;
      console.log(data)
    },err =>{
      console.log("err")
    })
    // var url = 'http://192.168.10.87:8070/showAllPost';
    //       var response = this.http.get(url);
    //       // response = JSON.parse(response.toString())
    //       console.log("response : ",response);
  }

  showAllPosts() {
          var url = 'http://localhost:8070/showAllPost';
          var response = this.http.post(url,"").map(res =>  res.json());
          console.log("response : ",response);
          
          return response;
      }
  }
