import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-z-sections',
  templateUrl: './z-sections.component.html',
  styleUrls: ['./z-sections.component.css']
})
export class ZSectionsComponent {
  sections = [
  {
    title: 'Velvet Matte Lipstick',
    description: 'Long-lasting and hydrating color.',
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSDSmndIXiWjawuO2Ptrh2zB2JJLSgeEHuWuvvroQFbtTTkedbdu6G-WwEivbcSFNLeSVJcDn1itvYbDBWoo5bPBBtXwtD8y-J4rHgVZHOGCH1I4N4W9Qf5'
  },
  {
    title: 'Hydrating Face Moisturizer',
    description: 'For smooth, glowing skin all day.',
    img: 'https://thesolvedskin.com/cdn/shop/files/Moisturiser_a3d3e0f5-4f29-4d69-a95c-9a787610730f.jpg?v=1718697353&width=1100'
  },
  {
    title: 'Vitamin C Serum',
    description: 'Brightens complexion & fades dark spots.',
    img: 'https://www.juhst.com/cdn/shop/files/clipboard-image-1752144847.webp?v=1752144883&width=960'
  },
  {
    title: 'Silk Finish Foundation',
    description: 'Full coverage with a natural finish.',
    img: 'https://sabnatural.com/cdn/shop/files/3525801659068_1_713x.jpg?v=1750247613'
  },
  {
    title: 'Clay Detox Mask',
    description: 'Deep cleansing and pore tightening.',
    img: 'https://viahbeauty.com/cdn/shop/files/Rectangle614.png?v=1732539515&width=1080'
  }
]; // Feel free to expand


  currentSection = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sectionHeight = window.innerHeight/2;
    const scrollTop = window.scrollY;
    const index = Math.round(scrollTop / sectionHeight);

    // Clamp index to avoid overflow
    this.currentSection = Math.min(Math.max(0, index), this.sections.length - 1);
  }

   getClass(index: number): string {

    let classes = '';

  // Alignment logic
  classes += index % 2 === 0 ? ' align-right' : ' align-left';

  // Animation logic
  if (index === this.currentSection) {
    classes += ' active';
  } else if (index < this.currentSection * 2.5) {
    classes += ' exit-left';
  } else if (index > this.currentSection / 2.5) {
    classes += ' enter-right';
  }

  return classes.trim();
  }
}
