import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http,URLSearchParams} from '@angular/http'
/*
  Generated class for the AddPost page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html'
})
export class AddPostPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , private http : Http) {
    console.log("AddPost");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPostPage');
  }
  addPost(title,content){
    this.sendRequest(title,content).subscribe(data =>{
      console.log(data)
    },err =>{
      console.log(err)
    })
  }
  sendRequest (title,content){
    let body = new URLSearchParams();
    body.set('title', title);
    body.set('content' , content);
    // var body ={body : {'title' : title,'content' : content }}
    var url = 'http://localhost:8070/addpost';
        var response = this.http.post(url,body).map(res =>  res.json());
        console.log("response : ",response);
        return response;
  }
}
