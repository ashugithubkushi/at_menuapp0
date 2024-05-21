import React, { useState } from "react";
import "./menu.css";
// import { Link } from "react-router-dom";
// import Layout from "../components/Layouts/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

const Menu = () => {
  const navigate = useNavigate();

  // const [numberOfElders, setNumberOfElders] = useState();
  // const [snacksElder, setSnacksElder] = useState("");
  // const [drinksElder, setDrinksElder] = useState("");
  // const [totalItemElder, setTotalItemElder] = useState();

  // const [numberOfChild, setNumberOfChild] = useState();
  // const [snacksChildren, setSnacksChildren] = useState("");
  // const [drinksChildren, setDrinksChildren] = useState("");
  // const [totalItemChildren, setTotalItemChildren] = useState();

  const [visible, setVisible] = useState(false);

  // console.log("snacksElder", snacksElder);
  // console.log("drinksElder", drinksElder);
  // console.log("totalItemElder", totalItemElder);
  // console.log("numberOfChild", numberOfChild);
  // console.log("snacksChildren", snacksChildren);
  // console.log("drinksChildren", drinksChildren);
  // console.log("totalItemChildren", totalItemChildren);

  // const Submit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3000/createOrder", {
  //       numberOfElders,
  //       snacksElder,
  //       drinksElder,
  //       totalItemElder,
  //       numberOfChild,
  //       snacksChildren,
  //       drinksChildren,
  //       totalItemChildren,
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       navigate("/menu");
  //     })
  //     .catch((err) => console.log(err));
  // };

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/createOrder", {
        numberOfElders,
        pizzaCount,
        burgerCount,
        chatCount,
        coffeCount,
        teaCount,
        coolDrinkCount,
        numberOfChild,
        pizzaCount1,
        burgerCount1,
        chatCount1,
        coffeCount1,
        teaCount1,
        coolDrinkCount1,
      })
      .then((result) => {
        console.log(result);
        // navigate("/");
        setVisible(true);
        // alert("Order Success");
      })
      .catch((err) => console.log(err));
  };

  // update of snacks count
  const [numberOfElders, setNumberOfElders] = useState();
  const [pizzaCount, setPizzaCount] = useState(0);
  const [burgerCount, setBurgerCount] = useState(0);
  const [chatCount, setChatCount] = useState(0);
  const [coffeCount, setCoffeCount] = useState(0);
  const [teaCount, setTeaCount] = useState(0);
  const [coolDrinkCount, setCoolDrinkCount] = useState(0);

  console.log("pizzaCount", pizzaCount);
  console.log("burgerCount", burgerCount);
  console.log("chatCount", chatCount);
  console.log("coffeCount", coffeCount);
  console.log("teaCount", teaCount);
  console.log("coolDrinkCount", coolDrinkCount);

  const PizzaCountIncre = () => {
    setPizzaCount(pizzaCount + 1);
  };
  const BurgerCountIncre = () => {
    setBurgerCount(burgerCount + 1);
  };
  const ChatCountIncre = () => {
    setChatCount(chatCount + 1);
  };
  const CoffeCountIncre = () => {
    setCoffeCount(coffeCount + 1);
  };
  const TeaCountIncre = () => {
    setTeaCount(teaCount + 1);
  };
  const CoolDrinkCountIncre = () => {
    setCoolDrinkCount(coolDrinkCount + 1);
  };

  const PizzaCountDecre = () => {
    setPizzaCount(pizzaCount - 1);
  };
  const BurgerCountDecre = () => {
    setBurgerCount(burgerCount - 1);
  };
  const ChatCountDecre = () => {
    setChatCount(chatCount - 1);
  };
  const CoffeCountDecre = () => {
    setCoffeCount(coffeCount - 1);
  };
  const TeaCountDecre = () => {
    setTeaCount(teaCount - 1);
  };
  const CoolDrinkCountDecre = () => {
    setCoolDrinkCount(coolDrinkCount - 1);
  };

  //children
  const [numberOfChild, setNumberOfChild] = useState();
  const [pizzaCount1, setPizzaCount1] = useState(0);
  const [burgerCount1, setBurgerCount1] = useState(0);
  const [chatCount1, setChatCount1] = useState(0);
  const [coffeCount1, setCoffeCount1] = useState(0);
  const [teaCount1, setTeaCount1] = useState(0);
  const [coolDrinkCount1, setCoolDrinkCount1] = useState(0);

  console.log("pizzaCount1", pizzaCount1);
  console.log("burgerCount1", burgerCount1);
  console.log("chatCount1", chatCount1);
  console.log("coffeCount1", coffeCount1);
  console.log("teaCount1", teaCount1);
  console.log("coolDrinkCount1", coolDrinkCount1);

  const PizzaCountIncre1 = () => {
    setPizzaCount1(pizzaCount1 + 1);
  };
  const BurgerCountIncre1 = () => {
    setBurgerCount1(burgerCount1 + 1);
  };
  const ChatCountIncre1 = () => {
    setChatCount1(chatCount1 + 1);
  };
  const CoffeCountIncre1 = () => {
    setCoffeCount1(coffeCount1 + 1);
  };
  const TeaCountIncre1 = () => {
    setTeaCount1(teaCount1 + 1);
  };
  const CoolDrinkCountIncre1 = () => {
    setCoolDrinkCount1(coolDrinkCount1 + 1);
  };

  const PizzaCountDecre1 = () => {
    setPizzaCount1(pizzaCount1 - 1);
  };
  const BurgerCountDecre1 = () => {
    setBurgerCount1(burgerCount1 - 1);
  };
  const ChatCountDecre1 = () => {
    setChatCount1(chatCount1 - 1);
  };
  const CoffeCountDecre1 = () => {
    setCoffeCount1(coffeCount1 - 1);
  };
  const TeaCountDecre1 = () => {
    setTeaCount1(teaCount1 - 1);
  };
  const CoolDrinkCountDecre1 = () => {
    setCoolDrinkCount1(coolDrinkCount1 - 1);
  };



  // dropdown
  // const   [selected, setSelected] = useState();
  // const [isActive, setIsActive] = useState(false);
  // const options =["React" , "Vue", "Angular"]

  return (
    <div>
      {/* ...  */}
      <header className="header">Healthy Snacks
      {/* <header className="header fixed-top header-shrink">Healthy Snack */}
        {/* <h1>
          <b>Healthy Snack</b>
        </h1> */}
        <nav>
          {/* <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul> */}
        </nav>
      {/* </header> */}
      
      </header>
      
<body>
  

      <div className="background">

        {/* <h5>Hello</h5> */}
        {/* <img
          src="C:\Users\KITS\at_menuapp\customer_app\src\assets\images\12-124086_817988-title-food-burger-french-fries-wallpaper-burger.jpg"
          alt=""
        /> */}
        <div>
          {/* <div className="scrolling"> */}
          {/* <div className="healthy-snack">Healthy Snack</div> <br /> <br /> */}
          {/* <div className="select-your-delicious">
          //     Select your delicious snack here
          //   </div> */}
          <marquee direction="right" className="select-your-delicious">
           <i>Select your delicious snack here</i>  
          </marquee>
        </div>

        {/* updated */}


        <section className="home" id="home"> 
      <div className="home-text2">
      <section class="features d-flex">
            {/* <form className="formdata"> */}
            

            {/* added elders and childerns in one row */}
            <label className="childrens-form">
              {/* <h2 className="color">Elders</h2> */}
              <h1 className="color"> Elders </h1>

              {/* <div className=" m-3 p-4"><h2>Snacks</h2></div> */}
              <select
                style={{ margin:0, width: 200, height: 40 , backgroundColor: 'rgba(255, 255, 255, 0.9)', color: 'rgba(0, 0, 0, 0.5)' , fontSize:"20px"  }}
                className="form-control"
                type="dropdown"
                name="elders"
                onChange={(e) => setNumberOfElders(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </label>

{/* snacks  */}
<div className="items">
                <div className="body-box">
                  <th  className="body">
                    <div className="name"><h3 className="Burger">Burger</h3></div>
                  <div className="wrapper"> 
                  <span className="" name="" onClick={BurgerCountDecre}>
                    -
                  </span>
                  <span
                    value="Burger"
                    onChange={(e) => burgerCount(e.target.value)}
                  >{`${burgerCount}`}</span>
                  <span className="" onClick={BurgerCountIncre}>
                    +
                  </span>
                  {/* <p> = {coffeCount}</p> */}
                </div>
                </th>
                {/* </div> */}

                
                <th  className="body"><h3 className="pizza">Pizza</h3> 
                  <div className="wrapper">
                  <span className="" name="" onClick={PizzaCountDecre}>
                    -
                  </span>
                  <span
                    value="Pizza"
                    onChange={(e) => pizzaCount(e.target.value)}
                  >{`${pizzaCount}`}</span>
                  <span className="" onClick={PizzaCountIncre}>
                    +
                  </span>
                  {/* <p> = {teaCount}</p> */}
                </div>
                </th>
               

                <div className="body-box">
                <th  className="body"><h3 className="chat">Chat</h3> 
                  <div className="wrapper"> 
                  <span className="" name="" onClick={ChatCountDecre}>
                    -
                  </span>
                  <span
                    value="Chat"
                    onChange={(e) => chatCount(e.target.value)}
                  >{`${chatCount}`}</span>
                  <span className="" onClick={ChatCountIncre}>
                    +
                  </span>
                  {/* <p> = {teaCount}</p> */}
                </div>
                </th>
                </div>

              </div>
            </div>


            {/* <div className="p-5"> */}
              {/* <h2 className="color">Beverages</h2> */}
              <div className="items">
                <div className="body-box">
                  <th  className="body">
                    <div className="name"><h3 className="coffe">Coffe</h3></div>
                  <div className="wrapper"> 
                  <span className="" name="" onClick={CoffeCountDecre}>
                    -
                  </span>
                  <span
                    value="Coffe"
                    onChange={(e) => coffeCount(e.target.value)}
                  >{`${coffeCount}`}</span>
                  <span className="" onClick={CoffeCountIncre}>
                    +
                  </span>
                  {/* <p> = {coffeCount}</p> */}
                </div>
                </th>
                {/* </div> */}

                <div className="body-box">
                <th  className="body"><h3 className="tea">Tea</h3> 
                  <div className="wrapper"> 
                  <span className="" name="" onClick={TeaCountDecre}>
                    -
                  </span>
                  <span
                    value="Tea"
                    onChange={(e) => teaCount(e.target.value)}
                  >{`${teaCount}`}</span>
                  <span className="" onClick={TeaCountIncre}>
                    +
                  </span>
                  {/* <p> = {teaCount}</p> */}
                </div>
                </th>
                </div>

                <div className="body-box">
                <th  className="body"><h3 className="cooldrink">Cooldrink</h3> 
                  <div className="wrapper"> 
                  <span className="" name="" onClick={CoolDrinkCountDecre}>
                    -
                  </span>
                  <span
                    value="Cooldrink"
                    onChange={(e) => coolDrinkCount(e.target.value)}
                  >{`${coolDrinkCount}`}</span>
                  <span className="" onClick={CoolDrinkCountIncre}>
                    +
                  </span>
                  {/* <p> = {teaCount}</p> */}
                </div>
                </th>
                </div>

              </div>
            </div>

            {/* <div className="selected-formdata"> */}
         <div class="data">
         {/* <h2>Selected data</h2> */}
  <form className="result-form">
  <div className="data1">
    <p >Elders: {numberOfElders}</p> 
    </div>
  <div className="data2">
  <p>Burger: {burgerCount}</p>
  <p>Pizza: {pizzaCount}</p>
  <p>Chats: {chatCount}</p>
  </div>
  <div className="data2">
  <p>Coffe: {coffeCount}</p>
  <p className="teacount-1">Tea: {teaCount}</p>
  <p className="cooldrink-1">Cooldrink: {coolDrinkCount}</p>
  </div>
  </form>
</div>

            {/* <div /> */}
        </section>
      </div>
    </section>


     {/* childrens  */}
     <section className="home" id="home"> 
      <div className="home-text2">
      <section class="features d-flex">
            {/* <form className="formdata"> */}
            

            {/* added elders and childerns in one row */}
            <label className="childrens-form">
              {/* <h2 className="color">Elders</h2> */}
              <h1 className="color"> Childrens </h1>

              {/* <div className=" m-3 p-4"><h2>Snacks</h2></div> */}
              <select
                style={{ margin:0, width: 200, height: 40 , backgroundColor: 'rgba(255, 255, 255, 0.9)', color: 'rgba(0, 0, 0, 0.5)' , fontSize:"20px"  }}
                className="form-control"
                type="dropdown"
                name="children"
                onChange={(e) => setNumberOfChild(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </label>

{/* snacks  */}
<div className="items">
                <div className="body-box">
                  <th  className="body">
                    <div className="name"><h3 className="Burger">Burger</h3></div>
                  <div className="wrapper"> 
                  <span className="" name="" onClick={BurgerCountDecre1}>
                    -
                  </span>
                  <span
                    value="Burger"
                    onChange={(e) => burgerCount1(e.target.value)}
                  >{`${burgerCount1}`}</span>
                  <span className="" onClick={BurgerCountIncre1}>
                    +
                  </span>
                  {/* <p> = {coffeCount}</p> */}
                </div>
                </th>
                {/* </div> */}

                
                <th  className="body"><h3 className="pizza">Pizza</h3> 
                  <div className="wrapper"> 
                  <span className="" name="" onClick={PizzaCountDecre1}>
                    -
                  </span>
                  <span
                    value="Pizza"
                    onChange={(e) => pizzaCount1(e.target.value)}
                  >{`${pizzaCount1}`}</span>
                  <span className="" onClick={PizzaCountIncre1}>
                    +
                  </span>
                  {/* <p> = {teaCount}</p> */}
                </div>
                </th>
               

                <div className="body-box">
                <th  className="body"><h3 className="chat">Chat</h3> 
                  <div className="wrapper"> 
                  <span className="" name="" onClick={ChatCountDecre1}>
                    -
                  </span>
                  <span
                    value="Chat"
                    onChange={(e) => chatCount1(e.target.value)}
                  >{`${chatCount1}`}</span>
                  <span className="" onClick={ChatCountIncre1}>
                    +
                  </span>
                  {/* <p> = {teaCount}</p> */}
                </div>
                </th>
                </div>

              </div>
            </div>


            {/* <div className="p-5"> */}
              {/* <h2 className="color">Beverages</h2> */}
              <div className="items">
                <div className="body-box">
                  <th  className="body">
                    <div className="name"><h3 className="coffe">Coffe</h3></div>
                  <div className="wrapper"> 
                  <span className="" name="" onClick={CoffeCountDecre1}>
                    -
                  </span>
                  <span
                    value="Coffe"
                    onChange={(e) => coffeCount1(e.target.value)}
                  >{`${coffeCount1}`}</span>
                  <span className="" onClick={CoffeCountIncre1}>
                    +
                  </span>
                  {/* <p> = {coffeCount}</p> */}
                </div>
                </th>
                {/* </div> */}

                <div className="body-box">
                <th  className="body"><h3 className="tea">Tea</h3> 
                  <div className="wrapper"> 
                  <span className="" name="" onClick={TeaCountDecre1}>
                    -
                  </span>
                  <span
                    value="Tea"
                    onChange={(e) => teaCount1(e.target.value)}
                  >{`${teaCount1}`}</span>
                  <span className="" onClick={TeaCountIncre1}>
                    +
                  </span>
                  {/* <p> = {teaCount}</p> */}
                </div>
                </th>
                </div>

                <div className="body-box">
                <th  className="body"><h3 className="cooldrink">Cooldrink</h3> 
                  <div className="wrapper"> 
                  <span className="" name="" onClick={CoolDrinkCountDecre1}>
                    -
                  </span>
                  <span
                    value="Cooldrink"
                    onChange={(e) => coolDrinkCount1(e.target.value)}
                  >{`${coolDrinkCount1}`}</span>
                  <span className="" onClick={CoolDrinkCountIncre1}>
                    +
                  </span>
                  {/* <p> = {teaCount}</p> */}
                </div>
                </th>
                </div>

              </div>
            </div>

            {/* <div className="selected-formdata"> */}
         <div class="data">
         {/* <h2>Selected data</h2> */}
  <form className="result-form">
  <div className="data1">
    <p >Childrens: {numberOfChild}</p> 
    </div>
  <div className="data2">
  <p>Burger: {burgerCount1}</p>
  <p>Pizza: {pizzaCount1}</p>
  <p>Chats: {chatCount1}</p>
  </div>
  <div className="data2">
  <p>Coffe: {coffeCount1}</p>
  <p className="teacount-1">Tea: {teaCount1}</p>
  <p className="cooldrink-1">Cooldrink: {coolDrinkCount1}</p>
  </div>
  </form>
</div>

            {/* <div /> */}
        </section>
      </div>
    </section>


    <section>
    <button onClick={Submit} type="button" className="btn btn-success">
              Submit
            </button>
    </section>

   
    

              <div className="container">
                {/* <div className="btn btn-success"> */}
              <div> 
                {/* <button onClick={Submit} type="button" 
              className="my-button">
              Submit
            </button> */}
            {/* <button
          type="submit"
          className="btn btn-success"
          // style={{ marginLeft: "10px" }}
          onClick={({}) => setVisible(true)}
        >
          Submit
        </button> */}
            </div>
            {/* </div> */}
            
              </div>

             

              
           
   
    




    {/* <section>
      <div className="row justify-content-md-center">
        Hello
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit voluptates quisquam libero, eos ratione 
          nobis nam similique explicabo non ullam culpa dolore magnam tempore ipsam modi porro officiis qui accusantium?</p>
      </div>
    </section> */}


    {/* <section className="section" >
      <div className="container">
        <h2>Snacks lists</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit voluptates quisquam libero, eos ratione 
          nobis nam similique explicabo non ullam culpa dolore magnam tempore ipsam modi porro officiis qui accusantium?
          
           <div class="cars-container 
          //  container
           ">
      <div class="box">
         <img src="customer_app\src\assets\images\kisspng-tata-tiago-tata-motors-car-tata-tigor-5b1eff9a8ff781.4756255515287581705897.jpg" alt="" class="src"></img>
            <h2>Burger snack</h2>
      </div>


<div className="image-grid">
  <div className="image-container"> 
      <img src="https://www.transparentpng.com/thumb/burger/hot-burger-king-hd-png-9dzyCE.png" alt="Image 1" />
     </div>
  <div className="image-container">
      <img src="https://www.transparentpng.com/thumb/pizza/yQEfc6-mixed-pizza-image-food-quick-order-hearty-in-presentation-tray.png" alt="Image 2" />
      </div>
    </div>
      </div>
          </p>
      </div>
    </section> */}

    {/* <section className="section" >
      <div className="container">
        Hello <hr />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit voluptates quisquam libero, eos ratione 
          nobis nam similique explicabo non ullam culpa dolore magnam tempore ipsam modi porro officiis qui accusantium?</p>
      <hr /> </div>
    </section> */}

    {/* <section className="section" >
      <div className="container">
        Contact info <hr />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit voluptates quisquam libero, eos ratione 
          nobis nam similique explicabo non ullam culpa dolore magnam tempore ipsam modi porro officiis qui accusantium?
          </p>
       <hr /></div>
      <footer className="footer">
      <div className="container">
    <p>copy rights</p>
          </div>
      </footer>
    </section>   */}

    



    

    {/* <div> <button onClick={Submit} type="button" className="btn btn-success float-end">
              Submit
            </button></div> */}
  


 

        
        



        

        {/* <button onClick={Submit} type="button" className="btn btn-success float-end">
              Submit
            </button> */}
        {/* <button to='/' type="button" className="btn btn-success">Submit</button> */}
  
  
        {/* <div className="home-text"> */}
        {/* <h1>We have evrything  <br />You <span>Need</span> </h1> */}
        {/* We have everything you need */}
        {/* <p>select your delicious snack here</p>  */}
        {/* <a href="#" class="btn">Click here..</a> */}
      {/* </div> */}
      </div>

      </body>

      

      <div>
        <Modal
          isOpen={visible}
          onRequestClose={() => setVisible(false)}
          style={{
            overlay: {
              position: "fixed",
              zIndex: 1020,
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(255, 255, 255, 0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            content: {
              background: "white",
              width: "45rem",
              maxWidth: "calc(100vw - 2rem)",
              maxHeight: "calc(100vh - 2rem)",
              overflowY: "auto",
              position: "relative",
              border: "1px solid #ccc",
              borderRadius: "1rem",
            },
          }}
        >
          <h1>Success...!</h1>
          <h5>
            Your Order has been submitted. <br /> <br />
            Thank you{" "}
          </h5> <br />
          <button
            type="button"
            className="btn btn-success"
            onClick={() => setVisible(false)}
          >
            OK
          </button>
        </Modal>
      </div>
    </div>
    
  );
};

export default Menu;