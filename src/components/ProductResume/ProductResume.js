import React, {Component} from 'react';

function Plan(props) {
  let planInfo = null;
  if (props.plan !== undefined) {
    planInfo = (
      <div>
        <span className="info">{props.plan.name}</span>
        <span className="price">{props.plan.price} /mes</span>
      </div>
    );
  } else {
    planInfo = (
      <div>
        <span className="info">Tu plan actual</span>
      </div>
    );
  }

  return planInfo;
}

class ProductResume extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {
          this.props.cart == null ? (
              "Empty cart..."
            ) : (
              <div className="product-resume">
                <h4>Resumen de compra</h4>
                <div className="text-center">
                {this.props.cart.device.name==null ? (
                  <img
                    src={this.props.cart.plan.imgURL}
                    className="Foto" alt={this.props.cart.plan.name}
                  />
                  ):(
                    <img
                    src={this.props.cart.device.imgURL}
                    className="Foto" alt={this.props.cart.device.name}
                  />
                  )
                }
                  
                </div>
                <div>
                  <div>
                  {this.props.cart.device.name==null ? (
                    ''
                    ):(
                    <div>
                      <span className="title">Equipo</span>
                      <span className="info">{this.props.cart.device.name}</span>
                      <span className="price">{this.props.cart.device.price}</span>
                    </div>
                    )
                  }
                    {this.props.cart.plan.name==null || this.props.prepago ? (
                      '' ):(
                      <div>
                        <span className="title">Plan</span>
                        <Plan {...this.props.cart}/>
                      </div>
                      )
                    }

                    
                    {this.props.cart.plan.onetimecharge ? (
                      <div>
                      <span className="title">Cargo adicional</span> 
                      <span className="price">{this.props.cart.plan.onetimecharge}</span>
                      <small>A pagar por única vez en la primer factura</small>
                      </div>
                    ) : '' } 
                    {this.props.cart.addon ? (
                    <div><span className="title">Add-on</span>
                    <span className="info">{this.props.cart.addon.name}</span>
                    <span className="price">{this.props.cart.addon.price}</span></div>
                    ) : ''
                  }
                  </div>
                </div>
              </div>
            )
        }
      </div>
    );
  }
}
export default ProductResume;
