import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase.js";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      likes: 0,
      dislikes: 0,
      thread: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    // const { locale } = this.props.location.state.area;
    let messagesRef = firebase.database().ref("comments");
    messagesRef.on("child_added", snapshot => {
      let comment = { text: snapshot.val(), id: snapshot.key };
      this.setState({
        thread: [...this.state.thread, comment]
      });
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const itemsRef = firebase.database().ref("comments");
    const item = {
      comment: this.state.comment,
      likes: this.state.likes,
      dislikes: this.state.dislikes
    };
    itemsRef.push(item);
    this.setState({
      comment: "",
      likes: 0,
      dislikes: 0
    });
  }

  render() {
    return (
      <div className="home">
        <header className="Landing-header">
          <h1>Spotted</h1>
        </header>
        <h5> Current Threads in {this.props.location.state.area}</h5>
        <div className="openThreads">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="comment"
              onChange={this.handleChange}
              value={this.state.comment}
            />
            <button type="submit" className="tCreate">
              {"Add Comment"}
            </button>
            <ul>
              {/* Render the list of messages */
              this.state.thread.map(message => (
                <li class="comment" key={message.id}>
                  {message.text.comment}
                </li>
              ))}
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
