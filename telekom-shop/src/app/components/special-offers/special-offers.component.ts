import { Component, ElementRef, ViewChild } from '@angular/core';

// Example for template driven forms

interface SpecialOffer {
  title: string
  description: string
}
@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css']
})
export class SpecialOffersComponent {
  public editorMode = false
  public specialOffer: SpecialOffer

  @ViewChild('title') titleRef?: ElementRef

  constructor() {
    this.specialOffer = {
      title: 'Sonderangebot des Tages',
      description: 'Kaufen Sie den Akkustik Koppler Dataphone 1200'
    }
  }
  public titleChange(event: any) {
    console.log(event.target.value)
    this.specialOffer.title = event.target.value
  }
  public toggleEditor() {
    this.editorMode = !this.editorMode
  }

  onSubmit() {
    if(this.specialOffer.title.length < 2) {
      alert('nix da')
      return
    }
    console.log(this.titleRef)
    console.log('saving', this.specialOffer)
  }
}
