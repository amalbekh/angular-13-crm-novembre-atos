import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  @Input('titreAttribut') public title!: {name: string};
  constructor() {
    console.log('Template Full W ---New Instance');
  }

  ngOnInit(): void {
    console.log('Template Full W ---OnInit');
    console.log('Template Full W ---OnInit', this.title);
  }

  ngOnChanges(): void {
    console.log('Template Full W ---OnChanges');
    console.log('Template Full W ---OnChanges', this.title);
  }

  ngDoCheck(): void {
    console.log('Template Full W ---OnDoCheck');
    console.log('Template Full W ---OnDoCheck', this.title);
  }

  ngOnDestroy(): void {
    console.log('Template Full W ---OnDestroy');
    console.log('Template Full W ---OnDestroy', this.title);
  }
}
