import React from "react";


//import './App.css';


export default class Widget3 extends React.Component {
  state = {
    loading: true,
    info: null
  };

  async componentDidMount() {
  //  apiPosts
  //  .fetchPosts()
  //  .then(res =>{
  //    const data = res.data;
  //    this.setState({info: data,loading: false})
  //  })
    const url = 'http://localhost:3001/index';
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const data = await response.json();
    this.setState({ info: data, loading: false });
    
  }

 
  affichagedonnee() {
    var temp="";
    console.log(this.state.info[0].title);
    for (let i = 0; i < this.state.info.length; i++) {
      temp+=`<li>`
      temp += ` ${this.state.info[i]._id}</li><li>`;
      temp += ` ${this.state.info[i].title}</li><li>`;
      temp += ` ${this.state.info[i].datedupost}</li><li>`;
      temp += ` ${this.state.info[i].type}</li><li>`;
      temp += ` ${this.state.info[i].description}</li><hr>`;

    }
    return temp;
  }



  render() {

    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.info) {
      return <div>error</div>;
    }

    var str = this.affichagedonnee();
    var nb = this.state.info.length;

    return (
      <div className="card" >
        <div className="card-body">
          <h5>Souvenirs &#129504;</h5>
          <p>Nombre de souvenirs: <span>{nb}</span></p>
          <ul style={{overflow:"scroll",height:'200px'}}  dangerouslySetInnerHTML={{__html: str}}></ul>
        </div>
      </div>


    );
  }
}