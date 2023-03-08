import React from 'react';

export default class DetailPage extends React.Component {
  componentDidMount() {
    this.setState({ 
        datos: {
          sku: 'RPB-001',
          nombre: 'Crocs Negros',
          precio: 800,
          precioDescuento: 0,
          isDescuento: false,
          numberStarts: 5,
          urlPhoto: './imagenes/artipro/propo.jpg',
          productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?',
        }
      });
  }

  render() {
    const stilo1 = { 'max-width': 3 + 'rem' }
    return (
      <>
      <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="./imagenes/artipro/propo.jpg" alt="..." /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">SKU: RPB-001</div>
                        <h1 className="display-5 fw-bolder">Crocs Negros</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">$800</span>
                            <span>$700.00</span>
                        </div>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                        <div className="d-flex">
                            <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={stilo1} />
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
  }
}