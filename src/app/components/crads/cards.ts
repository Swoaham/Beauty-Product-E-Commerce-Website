import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'cards',
  templateUrl: './cards.html',
  styleUrls: ['./cards.css']
})
export class cardsComponent implements AfterViewInit {
  @ViewChild('scrollContent') scrollContent!: ElementRef;

  ngAfterViewInit(): void {
    const original = this.scrollContent.nativeElement;
    const clone = original.cloneNode(true);
    // original.parentNode.appendChild(clone);
  }
}
