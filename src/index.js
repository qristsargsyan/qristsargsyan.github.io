 import { change } from "./script.js"

 change.addEventListener('click', changeImage);

 function changeImage() {
     let url1 = 'https://polcode.com/wp-content/uploads/2017/01/polcodefinal-1-1.png';
     let url2 = 'https://miro.medium.com/max/3798/1*eOE7VhXBlqdIJ9weEdHbQQ.jpeg';

     if (change.getAttribute('src') == url1) {

         change.setAttribute('src', url2);

     } else {
         change.setAttribute('src', url1);
     }
 }