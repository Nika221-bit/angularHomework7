import { Component } from '@angular/core';
import { Share } from '../share';
import { CommonModule, NgForOf } from "../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
   constructor(public todo : Share){}
}
