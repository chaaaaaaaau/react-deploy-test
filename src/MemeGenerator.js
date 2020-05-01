import React from "react";

import thomas1 from "./images/th11.png";
import thomas2 from "./images/th10.png";
import thomas3 from "./images/th7.png";
import thomas4 from "./images/th6.png";
import thomas5 from "./images/th5.png";
import thomas6 from "./images/th4.png";
import thomas7 from "./images/th3.png";
import thomas8 from "./images/th2.png";
import thomas9 from "./images/th1.png";

import henry1 from "./images/hc.png";
import henry2 from "./images/hc2.png";
import henry3 from "./images/hc3.png";
import henry4 from "./images/hc4.png";
import henry5 from "./images/he.png";

import edgar1 from "./images/ed2.png";
import edgar2 from "./images/ed3.png";
import edgar3 from "./images/ed5.png";
import edgar4 from "./images/edth.png";

class MemeGenerator extends React.Component {
  //Initialization Constructor

  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      /*
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
      */
      randomImg: thomas1,
      allMemeImgs: [
        thomas1,
        thomas2,
        thomas3,
        thomas4,
        thomas5,
        thomas6,
        thomas7,
        thomas8,
        thomas9,
        henry1,
        henry2,
        henry3,
        henry4,
        henry5,
        edgar1,
        edgar2,
        edgar3,
        edgar4,
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Life-cycle Method
  /*
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        //Actual Response Useful for programming
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes});
      });
  }*/

  //Event Handler
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state.randomImg);
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    //const randMemeImg = this.state.allMemeImgs[randNum].url;
    // console.log(this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum];
    // console.log(randMemeImg);
    this.setState({
      randomImg: randMemeImg,
    });
  }

  //Display
  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
