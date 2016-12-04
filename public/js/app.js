"use strict";

class App{
  constructor(){
  this.flowers = [


        {
            "image":"img/cover1.gif",
            "name":"Welcome to Flower App",
          },
            {
            "image":"img/cover2.jpg",
            "name":"View Flowers",
          },
            {
            "image":"img/cover3.jpg",
            "name":"Purchase Boquets",
          },
            {
            "image":"img/cover4.jpg",
            "name":"Special Holiday Flowers",
          }


    ];


    this.listofflowers = [
      {
        "id": 1,
        "boquet": "Antorium Bouquet",
        "value": "Php 599.00",
        "detail": " Send a sunny splash of color and brighten their day with this vibrant bouquet of Antorium Bouquet, mixed with 6 multi-colored roses. Symbolic of friendship and devotion, each stem of Antorium has multiple blooms and is sure to warm their heart.",
        "boqpic": "img/boquets.jpg",
      
      },
      {
        "id": 2,
        "boquet": "Symphony Bouquet",
         "value": "Php 388.00",
        "detail": "All the Symphony flowers is feminine and full of color. This sophisticated combination of multi-hued pink roses and pink or white alstroemeria are contrasted with green symphony. It's the perfect gift for someone who deserves all the frills.",
        "boqpic": "img/valentine.jpg",
       
      },
      {
        "id": 3,
        "boquet": "Daffodils Bouquet",
         "value": "Php 622.00",
        "detail": "A dizzying array of deep, robust color, the Daffodils bouquet contains one dozen tulips and one dozen iris, fresh from the fields. It's an always-impressive bouquet perfect for a dinner for two a special someone's birthday, or anytime you want to make someone's heart race. ",      
        "boqpic": "img/boquet1.jpg",
      },

       {
        "id": 4,
        "boquet": "Tarnation Bouquet",
         "value": "Php 650.00",
        "detail": "We've created this larger version of one of our most popular Tarnation bouquets for a bit of extra cheer this Christmas! Continue the tradition of family and friends with this seasonal favorite. To allow these beautiful flowers to last much longer, they are shipped fresh, budding, and ready to bloom.",
        "boqpic": "img/boquet2.jpg",
      },
       {
        "id": 5,
        "boquet": "Fluffery Bouquet",
         "value": "Php 290.00",
        "detail": "This Fluffery bouquet is sure to impress! It is crafted from our ever popular and it is a spectacular way to celebrate any occasion! A great new baby gift, perfect for housewarmings, and welcome home events. And you won't find this at your supermarket or in your florist's cooler.",
        "boqpic": "img/boquet3.jpg",
      },
      {
        "id": 6,
        "boquet": "Gee Doli Bouquet",
         "value": "Php 366.00",
        "detail": "A peppermint candy and the color pink make you think of? Christmas, of course! We’ve combined the best of Gee Doli bouquet, full of 9 red roses and 18 stems of assorted pink and bicolor carnations. To add a little jingle, there are 3 silver bell picks, too.",
        "boqpic": "img/boquet4.jpg",
      },
    
    
    ];
   this.buy = [
    {
        "flowerid": 1,
        "boquet1": "Gradient Tulips Bouquet",
        "value1": " Tulips mixed with colorful flowers inside. ",
         "detail1": "Sophistication, beauty and understated elegance; this exquisite bouquet really has it all. There is so much to savour, including the exotic beauty of Tulips, the delicate scent of freesias and the softest shades of Tulip, peach and cream.",
        "boqpic1": "img/boq1.jpeg",
      
      },
    {
        "flowerid": 2,
        "boquet1": "White Scarlet Bouquet",
        "value1": " The White scarlet has two colors mixed with red and white . ",
         "detail1": "The combination of pristine white flowers, expertly arranged with fresh white is hard to beat for pure, elegant simplicity. Stunning lilies and luxurious scarlet  make this bouquet look very special, and the tiny flowers add to the overall effect.",
        "boqpic1": "img/boq2.jpg",
      
      },
    {
        "flowerid": 3,
        "boquet1": "Mix Roses Bouquet",
        "value1": " Mixed Roses are everything that you want to see bouquet which is good in the eye ",
         "detail1": "With lilies and roses, lisianthus and carnations, this large mixed bouquet has plenty for them to enjoy. It’s a stylish design too that gives traditional winter white flowers an extra lift with tones of pale pink and warm copper.",
        "boqpic1": "img/boq3.jpg",
      
      },
    {
        "flowerid": 4,
        "boquet1": "Pink/Red Bouquet",
        "value1": " Mixed color pink and red bouquet which is wonderful to give especially for your love one",
         "detail1": "If pink is their favourite colour, then this pretty display of wonderfully feminine pink flowers is sure to be their favourite gift too. Carefully arranged in a petite wooden basket, they will discover spray carnations, lisianthus and chrysanthemums as well as delicately scented freesias and Eucalyptus Cinerea.",
        "boqpic1": "img/boq4.jpg",
      
      },
    {
        "flowerid": 5,
        "boquet1": "Antorium Bouquet",
        "value1": " Antorium is covered with pink roses with a purple ornament in the back ",
         "detail1": "Send a sunny splash of color and brighten their day with this vibrant bouquet of Antorium Bouquet, mixed with 6 multi-colored roses. Symbolic of friendship and devotion, each stem of Antorium has multiple blooms and is sure to warm their heart.",
        "boqpic1": "img/boq5.jpg",
      
      },
      {
        "flowerid": 6,
        "boquet1": "Booming Pink Bouquet",
        "value1": " The purple pink flower blooms from the day and night ",
         "detail1": "This delightful gift bag is simply overflowing with our most generous selection of fresh flowers. We’ve chosen exquisite shades of soft, marshmallow pink and added white chrysanthemums as contrast. When this pretty gift arrives, they are sure to be delighted. ",
        "boqpic1": "img/boquets.jpg",
      
      },
      {
        "flowerid": 7,
        "boquet1": "Symphony Bouquet",
        "value1": "Symphony flowers are Roses from the west in Palestine , Exported because of its wonderful blooming scarlet rose",
        "detail1": "All the Symphony flowers is feminine and full of color. This sophisticated combination of multi-hued pink roses and pink or white alstroemeria are contrasted with green symphony. It's the perfect gift for someone who deserves all the frills.",
        "boqpic1": "img/valentine.jpg",
       
      },
      {
        "flowerid": 8,
        "boquet1": "Daffodils Bouquet",
        "value1": "Red and Pink Daffodils are beautiful even in decaying time. It said that even though it is dying, it still shines the same.",   
        "detail1": "A dizzying array of deep, robust color, the Daffodils bouquet contains one dozen tulips and one dozen iris, fresh from the fields. It's an always-impressive bouquet perfect for a dinner for two a special someone's birthday, or anytime you want to make someone's heart race.",    
        "boqpic1": "img/boquet1.jpg",
      },

       {
        "flowerid": 9,
        "boquet1": "Tarnation Bouquet",
        "value1": " Colorful boquet made of different kinds of roses. Tarnation is one of the recent flower exported world wide",
        "detail1": "We've created this larger version of one of our most popular Tarnation bouquets for a bit of extra cheer this Christmas! Continue the tradition of family and friends with this seasonal favorite. To allow these beautiful flowers to last much longer, they are shipped fresh, budding, and ready to bloom.",
        "boqpic1": "img/boquet2.jpg",
      },
       {
        "flowerid": 10,
        "boquet1": "Fluffery Bouquet",
        "value1": "This flower is made from fluffery violet petals, combined with a magenta rose inside .",
        "detail1": "This Fluffery bouquet is sure to impress! It is crafted from our ever popular and it is a spectacular way to celebrate any occasion! A great new baby gift, perfect for housewarmings, and welcome home events. And you won't find this at your supermarket or in your florist's cooler.",
        "boqpic1": "img/boquet3.jpg",
      },
      {
        "flowerid": 11,
        "boquet1": "Gee Doli Bouquet",
        "value1": "Pink roses are desired to be given to someone you love especially in valentines ",
        "detail1": "A peppermint candy and the color pink make you think of? Christmas, of course! We’ve combined the best of Gee Doli bouquet, full of 9 red roses and 18 stems of assorted pink and bicolor carnations. To add a little jingle, there are 3 silver bell picks, too.",
        "boqpic1": "img/boquet4.jpg",
      },
      
    
    ];

    this.specials = [
{

    "flowername":"Valentine Chocolates",
    "flowerpic":"img/special1.jpg",
    "flowerlink":"http://www.proflowers.com/flowers-and-chocolate-flc",
    "flname":"Order Valentine Chocolates",

     
    

},
{

    "flowername":"Teddy Bears",
    "flowerpic":"img/special2.jpg",
    "flowerlink":"http://www.lazada.com.ph/buyincoins-80cm-giant-big-cute-plush-stuffed-teddy-bear-huge-soft100-cotton-toy-best-gift-2613296.html",
     "flname":"Order Teddy Bears",
     
    

},

{

    "flowername":"Birthday Cakes",
    "flowerpic":"img/special3.jpg",
    "flowerlink":"http://www.bakemeawish.com/birthday-cake-delivery.php",
     "flname":"Order Cakes Online",
     
    

},
{

    "flowername":"Wedding Cakes",
    "flowerpic":"img/special4.jpg",
    "flowerlink":"http://www.bridestory.com.ph/philippines/all-cities/wedding-cake?page=2",
     "flname":"Order Wedding Cakes Online",
     
    

},
{

    "flowername":"Wedding Souvenirs",
    "flowerpic":"img/special5.jpg",
    "flowerlink":"https://www.aliexpress.com/premium/wedding%25252dsouvenirs.html?ltype=wholesale&d=y&origin=n&isViewCP=y&SearchText=wedding-souvenirs&src=google&albch=search&acnt=479-062-3723&isdl=y&aff_short_key=UneMJZVf&albcp=266121556&albag=7593673036&slnk=&trgt=dsa-42862830006&plac=&crea=64152518716&netw=g&device=c&mtctp=b&memo1=1t2&gclid=CjwKEAiA94nCBRDxismumrL83icSJAAeeETQXLZEZMa2ABy2BrNFU4UwKNecAdhUULZxwAdHKsJIwhoCy93w_wcB&blanktest=0",
      "flname":"Order Souvenirs Online",
    

},
{

    "flowername":"Wedding Receptions",
    "flowerpic":"img/special6.jpg",
    "flowerlink":"http://www.lightinthebox.com/c/wedding-reception_4456",
      "flname":"Find Wedding Receptions Online",
    

},


    ];


    this.flowerhome = [
          {
 "home1":"col s12 m12",
    "home2":"img/welcome.jpg",
      "home3":"Visit Flowers",
        "home4":"component.flowerList()",
    
     
          },
            {
  "home1":"col s6 m6",
    "home2":"img/welcome1.jpg",
      "home3":"Visit Holiday Flowers",
        "home4":"component.flowerPage()",
  
     
          },
           {
  "home1":"col s6 m6",
    "home2":"img/welcome4.jpg",
      "home3":"Visit Shopping Cart",
        "home4":"component.buyFlowers()",
  
     
          },
            

        
    ];
  
  }



  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

  flowerApp(){
 
    let boquet = document.getElementById('flower_boquet');
    let boqpic = document.getElementById('flower_pic');
        let value = document.getElementById('flower_value');
            let detail = document.getElementById('flower_detail');
   
  

    let listofflowers = {      
      
      "boquet": boquet.value,
      "boqpic": boqpic.value,
      "value": value.value,
      "detail": detail.value,
   
     
    };


    this.listofflowers.push(listofflowers);

    
    detail.value = value.value = boquet.value = boqpic.value = ''; 
  } 

  


}

class Component extends App{
  constructor(){
    
    super();
  }

  flowerDesign(){
    let html = `
     
 <nav>
    <div class="nav-wrapper pink accent-4">
      <a href="#" ><i class="material-icons left">settings_input_svideo</i>Flower App</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
 
        <li><a href="#"onclick="component.lpage()"><i class="material-icons left">tab</i>Home</a></li>
        <li><a href="#"onclick="component.flowerList()"><i class="material-icons left">search</i>View Flowers</a></li>
         <li><a href="#"onclick="component.flowerPage()"><i class="material-icons left">shopping_basket</i>Special Holiday Flowers</a></li>
              <li><a href="#"onclick="component.buyFlowers()"><i class="material-icons left">shopping_cart</i>Shopping Cart</a></li>
              
      </ul>
    </div>
  </nav>

`;
 for(let i=0;i<this.flowers.length;i++){
  html+=`
  
  <div class="flowers w3-display-container w3-center">
    <img src="${this.flowers[i].image}" style="width:100%"></img>
    <div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
      <h3>${this.flowers[i].name}</h3>
    </div>
  </div>
`;
}



         html+=` 

         <div id="lpage"></div>
        <div id="recentFlowers"></div>
        <div id="viewFlowers"></div>
        <div id="viewInfo"></div>
         <div id="viewBoquet"></div>
        <div id="flowerList"></div>
        <div id="buyFlowers"></div>
        <div id="flowerPage "></div>
        

  
                </main>    <footer class="page-footer pink accent-4">

      <div class="container">

        <div class="row">

          <div class="col l4 s12">

            <h5 class="white-text">Shane Alanys Goloran Quisay </h5>
            <p class="grey-text text-lighten-4">The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers</p>
         

          </div>

          <div class="col l4 s12">
          <img src="img/pic1.jpg">
          </div>
            <h5 class="white-text">Quotes</h5>
            <p class="grey-text text-lighten-4"> You feel lost, disappointed, hesitant, or weak, return to yourself, to who you are, here and now and when you get there, you will discover yourself, like a lotus flower in full bloom, even in a muddy pond, beautiful and strong</p>
            <a class="btn waves-effect waves-light red lighten-3" target="_blank" href="https://www.facebook.com/shanealanys97">Message Shane</a>
          </div>

          <div class="col l4 s12" style="overflow: hidden;">

         
            
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        © shanealanys97-2016
 
        </div>
      </div>
    </footer>

    `;

    this.reRender(`
      ${html}

      `,document.getElementById("app"));
    this.recentFlowers();    
  }

  recentFlowers(){
    
    let html = `


             <div class="row">

    `;

for(let i=0;i<this.flowerhome.length;i++){
html+=`

   
          <div class="${this.flowerhome[i].home1}">
          <div class="card">
       
                <div class="card-image"><img src="${this.flowerhome[i].home2}">
              <div class="card-content">

            </div>      
           <div class="card-action">     
               <center><a href="#"onclick="${this.flowerhome[i].home4}"><i class="material-icons center">assignment</i> ${this.flowerhome[i].home3}</a></center>
               
            </div>
          </div>
        </div>
      </div>
        
 
      
         `;
}
    

    let r = this.buy;
    let count = 0;
    for(let i=(r.length-1);i>=0;i--){
      if(count++ === 3)break;
      html+= `
    <div class="col s12 m4">
          <div class="card large hoverable">
            <div class="card-image">
              <img src="${r[i].boqpic1}">
              <span class="card-title">${r[i].boquet1}</span>
            </div>
            <div class="card-content">
              <p>${r[i].value1}</p>
              
            </div>
            <div class="card-action">

              <a href="#" onclick="component.viewFlowers(${r[i].flowerid})"><i class="material-icons">assignment</i>More</a>

            </div>
          </div>
        </div>
      `;
    }



    html += `</div>`;

    this.render(`   
      ${html}
      `,document.getElementById("recentFlowers"));
  }

  viewFlowers(flowerid){
    let r = this.buyBoquet(flowerid);

    let html = `
      <h5 class="center-align">${r.boquet1}</h5>
      <div class="row">       
        <div class="col s12 m12">
          <div class="card horizontal">
            <div class="card-image">
              <img src="${r.boqpic1}">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>${r.detail1}</p>

              

                
              </div>
            <div class="card-action small">               
            
               <span onclick="component.flowerList()" class="new badge small" data-badge-caption="">Back to Flower List</span>
                   <span onclick="component.buyFlowers(${r.id})" class="new badge small red" data-badge-caption="">Back to Shopping Cart</span>
              </div>            
            </div>     
          </div>   
          
        </div>      
      </div>
    `;

    this.reRender(`   
      ${html}     
      `,document.getElementById("viewFlowers"));
    $('#viewFlowers').show();
    $('#recentFlowers').hide();
     $('#viewInfo').hide();
    $('#flowerList').hide();
    $('#buyFlowers').hide();
     $('#flowerPage').hide();
      $('#lpage').hide();
  }

   viewInfo(id){
    let r = this.boquetsId(id);

    let html = `
      <h5 class="center-align">${r.boquet}</h5>
      <div class="row">       
        <div class="col s12 m12">
          <div class="card horizontal">
            <div class="card-image">
              <img src="${r.boqpic}">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                   <h2>${r.value}</h2>
                <p>${r.detail}</p>

              

                
              </div>
            <div class="card-action small">     
              <span onclick="component.deleteFlowers(${r.id})" class="new badge small red" data-badge-caption="">Delete Bouquet</span>          
                   <span onclick="component.buyFlowers(${r.id})" class="new badge small light" data-badge-caption="">Back to Shopping Cart</span>

                        
              </div>            
            </div>     
          </div>   
          
        </div>      
      </div>
    `;

    this.reRender(`   
      ${html}     
      `,document.getElementById("viewInfo"));
     $('#viewInfo').show();
    $('#viewFlowers').hide();
    $('#recentFlowers').hide();
    $('#flowerList').hide();
    $('#buyFlowers').hide();
     $('#flowerPage').hide();
      $('#lpage').hide();
  }


viewBoquet(flowerid){
 let s = this.buyBoquet(flowerid);

    let html = `

   <div class="row">       
        <div class="col s12 m12">
       <div class="card horizontal">
            <div class="card-image">
              <img src="${s.boqpic1}">
               
                
            </div>


<div class="form-style-3">
<center><label for="flower_boquet"><span>
Bouquet<span class="required"></span></span>
<input type="email" id="flower_boquet" /></label></center>

<center><label for="flower_pic">
<span>Bouquet Image<span class="required"></span></span>
<input type="email"id="flower_pic"/></label></center>

<center><label for="value">
<span>Price<span class="required"></span></span>
<input type="email"id="flower_value"/></label></center>


<center><label for="flower_detail"><span>Description</span>
</span><textarea id="flower_detail" class="textarea-field ">
</textarea></label></center>
  
<div class="center-align">
    <button onclick="component.flowerList()" class="btn waves-effect waves-light">Back </button>  
         <button onclick="component.flowerApp()" class="btn waves-effect waves-light">Purchase Item</button>
                  <button onclick="component.buyFlowers()" class="btn waves-effect waves-light">Shopping Cart</button>
         </div>
</fieldset>

</div>
    

    `;
 this.reRender(`   
      ${html}     
      `,document.getElementById("viewBoquet"));
    $('#viewBoquet').show();
    $('#recentFlowers').hide();
    $('#flowerList').hide();
    $('#buyFlowers').hide();
     $('#flowerPage').hide();
      $('#lpage').hide();



}

  flowerList(){
    let html = `

 

      <br/>
        <nav>
          <div class="nav-wrapper purple lighten-1">
          <form>
            <div class="input-field">       
              <input onkeyup="component.flowerShop(this.value)" id="search" type="search" placeholder="Search" required>
              <label for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <br/>

    `;

    html += `
      <div class="row" id="flowerShop">
    `;
  
    let r = this.buy;
    for(let i=0;i<r.length;i++){

      
      html+= `
       
       <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].boqpic1}">
              <span class="card-title">${r[i].boquet1}</span>
            </div>
            <div class="card-content">
             <p>${r[i].value1}</p>
              
               
            </div>
            <div class="card-action">
             <a href="#" onclick="component.viewBoquet(${r[i].flowerid})"><i class="material-icons">library_add</i></label>Purchase</a>
                  <a href="#" onclick="component.viewFlowers(${r[i].flowerid})"><i class="material-icons">assignment</i></label>View Details</a>
                     
            </div>
          </div>
        </div>
      `;
    }



    

    html += `</div>`;

    this.reRender(`
      ${html}
      `,document.getElementById("flowerList"));
    $('#flowerList').show();
    $('#viewFlowers').hide();
        $('#viewBoquet').hide();
    $('#recentFlowers').hide();
    $('#buyFlowers').hide();    
        $('#flowerPage').hide();    
         $('#lpage').hide();
  }

  flowerShop(boquet){
    let html = ``;
    let r = this.searchBoquets(boquet);
    for(let i=0;i<r.length;i++){
      html+= `
        <div class="col s12 m4">
          <div class="card large hoverable">
            <div class="card-image">
              <img src="${r[i].boqpic}">
              <span class="card-title">${r[i].boquet}</span>
            </div>
            <div class="card-content">
                       <h2>${r[i].view1}</h2>
                <p>${r[i].detail}</p>
               
            </div>
            <div class="card-action">
              <a href="#" onclick="component.viewFlowers(${r[i].id})">More</a>
            </div>
          </div>
        </div>
      `;
    }   
    this.reRender(`
      ${html}
      `,document.getElementById("flowerShop"));
    $('#flowerList').show();
    $('#viewFlowers').hide();
       $('#viewBoquet').hide();
    $('#recentFlowers').hide();  
    $('#buyFlowers').hide();
        $('#flowerPage').hide();    
        $('#lpage').hide();    
  }

  buyFlowers(){
  
  

    let html = `




  

`;
  let  s = this.listofflowers;
  for(let index=0;index<s.length;index++){
  html+=`

    <div class="row">
      <div class="col s12 m4">
          <div class="card large hoverable">
            <div class="card-image">
            
              <img src="${this.listofflowers[index].boqpic}">
               <span class="card-title">${this.listofflowers[index].boquet}</span>
            </div>
            <div class="card-content">
             <span class="card-title">${this.listofflowers[index].value}</span>
                 <p>${this.listofflowers[index].detail}</p>
              
            </div>
            <div class="card-action">
             <a href="#" onclick="component.viewInfo(${s[index].id})"><i class="material-icons left">assignment</i>Info</a>
            </div>
          </div>
        </div>
    
    `;
}
   
html+=`


`;   

    this.reRender(`
      ${html}
      `,document.getElementById("buyFlowers"));
    $('#buyFlowers').show();
    $('#flowerList').hide();
    $('#viewFlowers').hide();
    $('#viewInfo').hide();
     $('#viewBoquet').hide();
    $('#recentFlowers').hide();  
    $('#flowerPage').hide(); 
    $('#lpage').hide();    
  }



deleteFlowers(key){
    let r = this.listofflowers;
    for(let i=0;i<r.length;i++){
      if(r[i].id == key){
        this.listofflowers.splice(i,1);
        break;
      }
    }   
    this.buyFlowers();
  }

  boquetsId(id){
    let r = this.listofflowers;
    for(let i=0;i<r.length;i++){
      if(id==r[i].id){
        return r[i];
      }
    }
  } 

  buyBoquet(flowerid){
    let s = this.buy;
    for(let index=0;index<s.length;index++){
      if(flowerid==s[index].flowerid){
        return s[index];
      }
    }

  } 

   searchBoquets(boquet){
    let objects = [];
    let r = this.listofflowers;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].boquet.toUpperCase().indexOf(boquet.toUpperCase()) > -1);
      if(expr){
        objects.push(r[i]);
      }
    }
    return objects;
  }


lpage(){
  let html=`


  `;
   this.reRender(`
      ${html}
      `,document.getElementById("buyFlowers"));
    $('#buyFlowers').hide();
    $('#flowerList').hide();
    $('#viewFlowers').hide();
     $('#viewInfo').hide();
     $('#viewBoquet').hide();
    $('#recentFlowers').show(); 
     $('#lpage').hide();  
    $('#flowerPage').hide();  
   

}
  
flowerPage(){

let html =`



`;

for(let index=0;index<this.specials.length;index++){
  html+=`

<div class="row">
     
       <div class="col s6 m6">
          <div class="card">
            <div class="card-image">
              <img src="${this.specials[index].flowerpic}">
              <span class="card-title">${this.specials[index].flowername}</span>
            </div>
            <div class="card-action">
          <a href="${this.specials[index].flowerlink}"><i class="material-icons center">movie</i>${this.specials[index].flname}</a>
            </div>
          </div>
        </div>


`;
}

html+=`






 `;
   this.reRender(`
      ${html}
      `,document.getElementById("lpage"));
    $('#buyFlowers').hide();
    $('#flowerList').hide();
    $('#viewFlowers').hide();
     $('#viewInfo').hide();
     $('#flowerShop').hide();
     $('#viewBoquet').hide();
    $('#recentFlowers').hide(); 
     $('#lpage').show();  
    $('#flowerPage').show();  
   

}

}

let component = new Component();
component.flowerDesign();
