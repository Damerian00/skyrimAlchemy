import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import ingredients from '../../DB/ingredients.json'

interface ingredients {
  id: string,
  name: string,
  effects : string[]
}

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  unsorted = (a:any, b:any) => {
    return a;
  }
  ingredients : ingredients[] = ingredients;
  effects: string[] = [];
  selectedEff: String = '';
  SIL: Boolean = false;
  ingredientsList: string[] = [];

  ngOnInit(): void {
    this.mergeEffects();
  }

// takes all the effects in the ingredients and merges them into an array while removing duplicates
mergeEffects(){
  let eff: string[] = []
  for(let i=0;i<ingredients.length; i++){
    for (let j=0; j<4;j++){
      if(!eff.includes(ingredients[i].effects[j])){
        eff.push(ingredients[i].effects[j])
      }
    }
  }
  eff.sort()
  this.effects = eff;
}

// accepts user input to locate ingredients that contain chosen effect and display it
chosenEffect(selection: any){
this.ingredientsList = []
  if(selection.value == "None Selected"){
    this.SIL = false;
    this.selectedEff = '';
    return;
  }else{
    this.selectedEff = selection.value
    this.SIL = true;
  }
for(let i = 0; i<ingredients.length;i++){
  if(ingredients[i].effects.includes(selection.value)){
    this.ingredientsList.push(ingredients[i].name)
  }

}
  this.ingredientsList.sort();
}


}
