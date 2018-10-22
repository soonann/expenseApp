import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {
  private imgSrc;
  constructor(public navCtrl: NavController, private camera: Camera) {
  }
  
 

  getFromCamera() {

    // DATA_URL can be very memory intensive and cause app crashes or out of memory errors.

    // Thus scale the picture to 150x150

    let options = {
      quality: 50,
      targetWidth: 150,
      targetHeight: 150,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG

    }

 

    this.camera.getPicture(options).then((imageData) => {
      this.imgSrc = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {

      // Handle error

    });

  }

 

  getFromAlbum() {

    let options = {
      quality: 100,
      targetWidth: 150,
      targetHeight: 150,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG

    }

 

    this.camera.getPicture(options).then((imageData) => {

      this.imgSrc = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {

      // Handle error

    });

  }

 
}
