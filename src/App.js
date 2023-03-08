import './App.css';
import React from 'react';
import axios from 'axios';

export class Header extends React.Component {
    countProducts() {
      const contexto = this.context;
      let products = JSON.parse(localStorage.getItem('products'));
      return products.length;
    }
    render() {
        return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="/">Mi Tiendita</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link" href="/acercaDe1">Acerca de</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Comprar</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">Todos los Productos</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#!">Articulos Populares</a></li>
                                <li><a className="dropdown-item" href="#!">Lo Mas Nuevo</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Carrito
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{this.countProducts()}</span>
                        </button>
                    </form>
                </div>
            </div>
            </nav>
            <hr></hr>
        </>
        );
    }
}

class Card extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cart : [],
      };
      const CardContext = React.createContext(this.state.cart);
    }
    

    addCart() {
        let products = JSON.parse(localStorage.getItem('products'));
        if (products === null) {
            products = [];
        }
        products.push(this.props.datos);
        this.setState({
          cart: products
        });
        localStorage.setItem('products', JSON.stringify(products));
    }
    
    render() {
      const stars = [];
      for(let i = 0; i < this.props.datos.numberStarts; i++) {
          stars.push(<div className="bi-star-fill"/>);
      }
      const stilo1 = { 
          top: 0.5 + 'rem',
          right: 0.5 + 'rem'
      }
      const esDescuento = this.props.datos.isDescuento;
      return (
      <div className="col mb-5">
          <div className="card h-100">
              {
                  esDescuento &&
                  <div className="badge bg-dark text-white position-absolute" style={stilo1}>Descuento</div>
              }
              <img className="card-img-top" src={this.props.datos.urlPhoto} alt="..."/>
              <div className="card-body p-4">
                  <div className="text-center">                            
                      <h5 className="fw-bolder">{this.props.datos.nombre}</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                          {
                              stars.map((e) => {
                                  return e;
                              })                  
                          }                        
                      </div>
                      { esDescuento && <>
                      <span className="text-muted text-decoration-line-through"> L{this.props.datos.precio}</span>
                      <span> L{this.props.datos.precioDescuento}</span>
                      </>}
                      { !esDescuento && <>
                      <span> L{this.props.datos.precio}</span>
                      </>}
                  </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={this.addCart.bind(this)} href="#">Agregar al Carrito</button></div>
              </div>
          </div>
      </div>
      );
    }
}
class Banner extends React.Component {
  render() {
    return (
    <>
      <header className="bg-dark py-5" >
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <img src=".imagenes/tienda.jpg" alt="Mi Tiendita" width="344" height="146" className='fotoSize'/>
                <h1 className="display-4 fw-bolder">Comprar con Estilo</h1>
                <p className="lead fw-normal text-white-50 mb-0">En el MEJOR lugar Online</p>
            </div>
        </div>
    </header>
    <hr/>
    </>
    )
  }
}

class Productsarea extends React.Component {
    render() {
        return (
        <>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    this.props.datos.map((Element) => {
                        return <Card datos={Element} />
                    })
                }
                </div>
            </div>
    
    </>
    );
  }
}

// Nombre para ilustrar que no importa el nombre
export class Patito extends React.Component {
    constructor(props) {
        super(props);
        this.state = { datos: []}
    }
    // como que didMount solo sirve en el componente padre. 
    async componentDidMount() {
       const response = await axios.get('https://young-brushlands-90462.herokuapp.com/products');
       this.setState({ 
            datos: response.data
        });
    }
    render() {
        return (
            <>   
                <Banner/>
                <Productsarea datos={this.state.datos}/>  
            </>
        );
    }
}