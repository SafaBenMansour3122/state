import React from 'react';
import './App.css';
import img from './iphone6.jpg';
import img1 from './iphone7.jpg';
import img2 from './iphone8.jpg';

class App extends React.Component {
     state ={
       name :'Iphone 6',
       photo : img,
       intro : "L'iPhone 6 et l'iPhone 6 Plus sont les deux modèles de la 8e génération du smartphone de la société Apple. Leur présentation s'est faite le 9 septembre 2014, lors d'une keynote à Cupertino2. Il est disponible avec les capacités suivantes : 16 Go, 32 Go (depuis 2017), 64 Go et 128 Go en coloris gris sidéral, argent et or lors du lancement. De nouvelles versions de l'iPhone 6 sortent en septembre 2015"
     }
     change =() =>{
       this.setState({
         name : 'Iphone 7',
         photo : img1,
         intro : "L'iPhone 7 et l'iPhone 7 Plus sont les deux modèles de la 10e génération du smartphone de la société Apple. Ils ont été présentés au public le 7 septembre 2016, lors d'une keynote à San Francisco2.Les deux smartphones sont équipés d'un nouveau processeur Apple nommé « A10 Fusion », présenté par la marque comme 40 % plus performant que l'Apple A9 embarqué dans les iPhone 6s et 6s Plus et deux fois plus performant que la puce A8 qui équipait l'iPhone 6 par exemple."
       })
      }
       changedeux =() =>{
        this.setState({
          name : 'Iphone 8',
          photo : img2,
          intro : "L'iPhone 8 et l'iPhone 8 Plus sont les deux modèles de la 11e génération du smartphone de la société Apple. Ils sont présentés au public en compagnie de l'iPhone X le 12 septembre 2017, lors d'une keynote à Cupertino1, malgré la fuite d'informations la veille de l'évènement2. Ces modèles sont disponibles à la vente en France et en Belgique dès le 22 septembre 2017"
        })
     }
     change3 =() =>{
       this.setState({
        name :'Iphone 6',
       photo : img,
       intro : "L'iPhone 6 et l'iPhone 6 Plus sont les deux modèles de la 8e génération du smartphone de la société Apple. Leur présentation s'est faite le 9 septembre 2014, lors d'une keynote à Cupertino2. Il est disponible avec les capacités suivantes : 16 Go, 32 Go (depuis 2017), 64 Go et 128 Go en coloris gris sidéral, argent et or lors du lancement. De nouvelles versions de l'iPhone 6 sortent en septembre 2015"
       })
      }
  render() {
    return (
    
     <div className="App">
       <button onClick={this.change3}> Iphone 6 </button>
       <button onClick={this.change}> Iphone 7 </button>
       <button onClick={this.changedeux}> Iphone 8 </button>
            <h4>{this.state.name}</h4>
            <img src={this.state.photo}/>
            <p>{this.state.intro}</p>
     </div>
      
    ) 
  }
}

export default App;
