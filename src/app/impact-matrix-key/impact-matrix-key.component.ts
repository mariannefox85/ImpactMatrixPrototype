import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-impact-matrix-key',
  templateUrl: './impact-matrix-key.component.html',
  styleUrls: ['./impact-matrix-key.component.scss']
})
export class ShellImpactMatrixComponent {
  // @ts-ignore
  @Input() colorConfig: { green: string; yellow: string; amber: string; red: string };
  // @ts-ignore
  @Input() matrixKey: boolean;

}
