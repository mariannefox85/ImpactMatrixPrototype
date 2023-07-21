import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImpactMatrixPrototype';
  descriptor: boolean = true;
  impact: number = 4;
  likelihood: number = 4;
  colorConfig: any = {green: '#a3d700', yellow: '#ffe923', amber: '#ff9900', red: '#cc0033'}
  showFGSs: boolean = false;
riskSource:any = {riskSource: [
    {
      matrixPosition: '4,4',
      letter: 'R'
    },
    {
      matrixPosition: '3,4',
      letter: 'S'
    }
  ],}
  shellColorConfig: any = {green: '#a3d700', yellow: '#ffe923', amber: '#ff9900', red: '#cc0033'}
  matrixKey: boolean = false;
  userInput:any;

  hideDescriptor(showFGS: boolean) {
    if(showFGS){
      this.descriptor = false
    }
  }
  // @ts-ignore
  updateColorConfig(value) {
    this.colorConfig = value.value;
    console.log(value.value, 'value')
    this.userInput = value.value
    // try {
    //
    //   console.log(this.userInput)
    //   this.colorConfig = this.userInput ;
    //   console.log("Updated Colorconfig:", this.colorConfig);
    // } catch (error) {
    //   console.error("Invalid JSON format");
    // }
  }
}

// {green: 'pink', yellow: 'blue', amber: 'white', red: 'black'}
