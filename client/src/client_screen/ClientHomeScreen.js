import React from 'react'
import NavigationBar from '../common_components/NavigationBar'
import FooterBar from '../common_components/FooterBar'

function ClientHomeScreen() {
  return (
    <div>
        <header>
            <NavigationBar/>
        </header>
        <main>
            <div className="image-box">
                <div className="image-box-items"><img src="web_side_image/man.jpg" className="image-items" alt="men"/></div>
                <div className="image-box-items"><img src="web_side_image/couple.jpg" className="image-items" alt=""/></div>
                <div className="image-box-items"><img src="web_side_image/woman.jpg" className="image-items" alt=""/></div>
            </div>
            <div className="fist-home-text-box">
                <h3>If you have it, you can make anything look good.</h3>
                <div className="home-text-box">
                    <p className="home-text-box-tex">
                        We completely believe that fashion and lifestyle are essential part of existence. Fashion makes our life colorful. 
                        A far broader definition of fashion encompasses accessories, shoes, hairstyles, and many more items in addition to clothing and makeup. 
                        It's a way of thinking, and we make sure your life is full of experiments and style. 
                        When going out we want you all to put your best personality forward with the help of our fashion tips. 
                        For example, nice dining at a restaurant necessitates a formal appearance, but eating on the street allows for any casual attire.
                    </p>
                    <img src="web_side_image/showroom.jpg" alt="" className="home-text-box-image"/>
                </div>
            </div>
            <div>
                <h2>New Fashion</h2>
                <div className="home-new-fashion-card-box">
                    <div className="fashion-card-box">
                        <div className="product-card">
                            <div className="product-card-image-box">
                                <img src="/" alt=""/>
                            </div>
                            <div className="product-card-description-box">
                                <h3>Jordan Essentials</h3>
                                <p style={{color: 'gray'}}>Men's Washed Chicago Pants</p>
                                <p style={{fontWeight: "bold"}}>$ 100</p>
                                <input type="number" name="quantity" placeholder="21" className="product-card-quantity"/>
                                <button  className="product-card-btn">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <FooterBar/>
        </footer>
    </div>
  )
}

export default ClientHomeScreen