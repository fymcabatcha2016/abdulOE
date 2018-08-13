import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  defimg: string = "/assets/food_logo.png"
  recipes :  any = [{
    name: "Dosa",
    imgUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/03/dosa-recipe.jpg",
    desc:"Dosa is a popular South Indian thin crepe that is made of fermented rice and lentil batter. History of dosa says that they were made using only rice but with the passage of time, people started to add urad dal / black lentils to give texture and taste. Dosas became very popular with the rise of udupi restaurants which serve the best dosa varieties – plain, set and masala dosa."
  },
{
  name:"Idli",
  imgUrl : "https://simpleindianrecipes.com/portals/0/sirimages/Idli-M2.jpg",
  desc:"Idli is a soft & fluffy steamed cake made of fermented rice & lentil batter. . These are one of the healthiest protein packed Breakfasts from South Indian cuisine . Idli are easily digestible as the rice & lentils known as DAL  are soaked, ground, fermented & then prepared by steaming the batter. These are served with a chutney  and or with a tiffin sambar."
  
},
{
  name:"Medu wada",
  imgUrl : "https://simpleindianrecipes.com/portals/0/sirimages/Medhu-Vadai-M.jpg",
  desc:"medu vada is one of my favorite snack .Medu vada is one snack i loved as a kid and still do. i especially like the crispy and fluffy medu vada dunked in hot sambar with coconut chutney by the side. the combo of vada sambar with coconut chutney is very famous and taste awesome. you can enjoy medu vadas with "
}];
  constructor() { }

  ngOnInit() {
  }

}
