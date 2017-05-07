import { EventEmitter } from 'events';
import dispatcher from './../dispatcher.js';
import * as images from './../images.js';

class CardStore extends EventEmitter {
  constructor(){
    super();
    this.cards = [
      {
        id: 1,
        title:"React Front Ends",
        thumbnail: images.thumbnails[0],
        fullImage: images.fullimages[0],
        description: ["The website you are visiting now was built with React.",
                      "Webpack and Node were used as the build tools.",
                      "The artwork is a combination of d3 animated SVG, static custom SVG, and prerendered binary images."],
        url: [{label: "Link to a demo site", url: "https://theguildlearning.github.io"},
              {label: "GitHub repository for portfolio website", url: "https://github.com/ScopatGames/scopatgames.github.io"}]
      }, {
        id: 7,
        title:"React Redux Apps",
        thumbnail: images.thumbnails[6],
        fullImage: images.fullimages[6],
        description: ["Survey app using React components and Redux state store.", "Single page app with no routing. The state is updated using Immutable.js Map() and List() data structures.", "Character designed with CSS gradients."],
        url: [{label: "Use the App", url: "https://scopatgames.github.io/ernesto-the-survey-app"},
              {label: "GitHub repository", url: "https://github.com/ScopatGames/ernesto-the-survey-app"}
            ]
      }, {
        id: 3,
        title:"Angular Apps",
        thumbnail: images.thumbnails[2],
        fullImage: images.fullimages[2],
        description: ["This app crunches data on test scores and returns the average, max, and min values.  The inputs provide validation messages and CSS highlight for failing grades.", "The app was built with Angular.  Gulp was used as a build tool.  The app was tested with karma and mocha."],
        url: [{label: "Use the App", url: "https://scopatgames.github.io/test-score-stats"},
              {label: "GitHub repository", url: "https://github.com/ScopatGames/test-score-stats"}]
      }, {
        id: 2,
        title:"Video Games",
        thumbnail: images.thumbnails[1],
        fullImage: images.fullimages[1],
        description: ["Shoji Splice is a top-down perspective 2.5D action-adventure game.", "The game was built in Unity3D, with all of the asset animation, UI, and game mechanics scripting done in C#.", "All the art assets were created in a combination of Blender and Photoshop.  The characters are sprite sheets created from animated 3D models.  The environments are mostly 3D assets."],
        url: [{label: "Twitter page", url: "https://twitter.com/scopatgames"},
              {label: "YouTube demo", url: "https://www.youtube.com/watch?v=0XG38fKGI5Q"},
              {label: "GitHub script repository", url: "https://github.com/ScopatGames/ShojiSplice"},
              {label: "Dropbox playable demo download", url: "https://www.dropbox.com/sh/qgytv4yf54lxznl/AADSwlQ6G27WAFZI8IFiVLDja?dl=0"}
            ]
      },{
        id: 4,
        title:"Shaders",
        thumbnail: images.thumbnails[3],
        fullImage: images.fullimages[3],
        description: ["Spectrum is a prototype for a mobile game using custom Cg shaders.",
                      "The focus was using gradient and fresnel shaders, along with terrain generated at run-time.",
                      "The gameplay offers different mechanics (physics) for zero-gravity space flight, atmospheric flight, and terrestrial navigation of the player."],
        url: [{label: "Spectrum scripts GitHub page", url: "https://github.com/ScopatGames/Spectrum"},
              {label: "Custom Cg shaders GitHub page", url: "https://github.com/ScopatGames/Cg-Shaders"}]
      }, {
        id: 5,
        title:"3D Graphics",
        thumbnail: images.thumbnails[4],
        fullImage: images.fullimages[4],
        description: ["Title: Nessie Prefers No Fishing", "Blender Guru winning competition entry.",
                      "Image made in Blender3D."],
        url: [{label: "Blender Guru 1st Place Winner.", url: "http://www.blenderguru.com/competitions/new-competition-really-happened-2/"}]
      }, {
        id: 6,
        title:"Photo-Video",
        thumbnail: images.thumbnails[5],
        fullImage: images.fullimages[5],
        description: ["I have a solid understanding of the technical details related to photo and video composition, lighting, story, and general aesthetic.",
                      "These are screen captures from my personal and paid video projects."],
        url: [{label: "Vimeo page", url: "https://vimeo.com/user4548608"}]
      }
    ];
    this.activeCard = {
      title: "",
      fullImage: null,
      description: [],
      url: [],
      currentClassName: "active-card-hidden"
    };
  }
  getAllCards(){
    return this.cards;
  }

  getActiveCard(){
    return this.activeCard;
  }

  setActiveCard(data) {
    this.activeCard = data;
    this.emit("change");
  }

  handleActions(action){
    switch(action.type){
      case "SET_ACTIVE_CARD":{
        this.setActiveCard(action.data);
      }
    }
  }
}

const cardStore = new CardStore;
dispatcher.register(cardStore.handleActions.bind(cardStore));

export default cardStore;
