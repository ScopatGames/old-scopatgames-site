import tn01 from './../images/react-website-thumbnail.jpg';
import fi01 from './../images/react-website-fullimage.jpg';
import tn02 from './../images/ShojiSplice-thumbnail.jpg';
import fi02 from './../images/ShojiSplice-full.jpg';
import tn03 from './../images/angular-app-thumbnail.jpg';
import fi03 from './../images/angular-app-fullimage.jpg';
import tn04 from './../images/spectrum-thumbnail.jpg';
import fi04 from './../images/spectrum-fullimage.jpg';
import tn05 from './../images/Nessie-thumbnail.jpg';
import fi05 from './../images/Nessie-fullimage.jpg';
import tn06 from './../images/video-thumb.jpg';
import fi06 from './../images/video-full.jpg';
import tn07 from './../images/survey-app-thumbnail.jpg';
import fi07 from './../images/survey-app-fullimage.jpg';

export let thumbnails = [tn01, tn02, tn03, tn04, tn05, tn06, tn07];
export let fullimages = [fi01, fi02, fi03, fi04, fi05, fi06, fi07];
export function preload(){
  thumbnails.forEach(function(img){
    let image = new Image();
    image.src = img;
  });
  fullimages.forEach(function(img){
    let image = new Image();
    image.src = img;
  });
}
