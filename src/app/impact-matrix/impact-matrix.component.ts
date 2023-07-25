import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-impact-matrix',
  templateUrl: 'impact-matrix.component.html',
  styleUrls: ['impact-matrix.component.scss'],
})
export class ImpactMatrixComponent implements OnInit {
  // @ts-ignore
  @Input() impact: number;
  // @ts-ignore
  @Input() likelihood: number;
  // @ts-ignore
  @Input() descriptor: boolean;
  // @ts-ignore
  @Input() colorConfig: { green: string; yellow: string; amber: string; red: string };
  // @ts-ignore
  @Input() riskSource: any;
  // @ts-ignore
  @Input() showFGSs: boolean;
  // @ts-ignore
  likelihoodArrow: string;
  // @ts-ignore
  impactArrow: string;
  // @ts-ignore
  matrixDescriptionText: string;

  // @ts-ignore
  warningColour: string;
  // @ts-ignore
  imgSrc: string;

  ngOnInit() {
    this.likelihoodArrow = './assets/nswws_likelihood_arrow.svg';
    this.impactArrow = './assets/nswws_impact_arrow.svg';
    this.matrixDescriptionText = this.getMatrixDescriptor(this.impact, this.likelihood);
    this.warningColour = this.getWarningColour(this.impact, this.likelihood);
    this.imgSrc = this.getMatrixTick(this.warningColour);
    if(this.showFGSs) {
      this.descriptor = false;
    }
  }

  getMatrixTick(warningColour: string) {
    warningColour = this.getWarningColour(this.impact,this.likelihood);
    return `./assets/${warningColour === 'red' ? 'nswws_tick_white.svg' : 'nswws_tick.svg'}`;
  }

  getMatrixDescriptor = (impact: number, likelihood: number) => {
    switch ([impact, likelihood].join('')) {
      case '31':
        return 'Very low likelihood of medium impacts';
      case '41':
        return 'Very low likelihood of high impacts';
      case '32':
        return 'Low likelihood of medium impacts';
      case '42':
        return 'Low likelihood of high impacts';
      case '23':
        return 'Medium likelihood of low impacts';
      case '33':
        return 'Medium likelihood of medium impacts';
      case '43':
        return 'Medium likelihood of high impacts';
      case '24':
        return 'High likelihood of low impacts';
      case '34':
        return 'High likelihood of medium impacts';
      case '44':
        return 'High likelihood of high impacts';
      default:
        return '';
    }
  };

  getWarningColour = (impact: number, likelihood: number) => {
    const position = [impact, likelihood].join('');
    switch (position) {
      case '44':
        return 'red';
      case '43':
      case '42':
      case '34':
      case '33':
        return 'amber';
      case '23':
      case '24':
      case '31':
      case '32':
      case '41':
        return 'yellow';
      default:
        return '';
    }
  };
  getFGSPipe(data: any, matrixPosition: string): string {
    const riskLetters = [];
    for (let i = 0; i < data.riskSource.length; i++) {
      if (data.riskSource[i].matrixPosition === matrixPosition) {
        riskLetters.push(data.riskSource[i].letter);
      }
    }
    return riskLetters.join(' ');
  }

  getCellColor =(impact: number, likelihood: number) => {
  const position = [impact, likelihood].join('');
  switch (position) {
  case '44':
    return {
      background: '#cc0033',
    };
  case '43':
  case '42':
  case '34':
  case '33':
    return {
      background: '#ff9900',
    };
  case '23':
  case '24':
  case '31':
  case '32':
  case '41':
    return {
      background: '#ffe923',
    };
  default:
    return {
      display: 'none',
    }
  }
  }
}
