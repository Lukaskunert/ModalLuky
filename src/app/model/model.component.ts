import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent {

  @Input()
  public text = '';
  
  private hide = false;

  clickedButton() {
    this.hide = !this.hide;
  }
}
