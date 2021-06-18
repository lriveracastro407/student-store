import "./welcome.css"

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="content">
        <div className="intro">
          <h1>Welcome!</h1>
          <h1>Find Your Merch!</h1>
          <p>
            We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout
            whenever you're ready.
          </p>
        </div>

        <div className="media">
          <img src={"https://www.pngjoy.com/pngm/134/2709854_grocery-cart-shopping-cart-icon-transparent-transparent-png.png"} alt="shopping cart" />
        </div>
      </div>
    </div>
  )
}