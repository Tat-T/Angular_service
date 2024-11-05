import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonClikComponent } from '../button-clik/button-clik.component';

interface Painting {
  title: string;
  year: number;
  author: string;
  dimensions: string;
  location: string;
  imageUrl: string;
}
 
@Component({
  selector: 'app-painting',
  standalone: true, 
  imports: [CommonModule, ButtonClikComponent], 
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})

export class PaintingComponent {
  paintings: Painting[] = [
    {
      title: 'Утро в сосновом лесу',
      year: 1889,
      author: 'Иван Шишкин',
      dimensions: '139 cm × 219 cm',
      location: 'Хранится в Третьяковской галереи в Москве',
      imageUrl: 'images/img-1.jpg'
    },
    {
      title: 'Заросший пруд',
      year: 1883,
      author: 'Иван Шишкин',
      dimensions: '56 cm × 42 cm',
      location: 'Хранится в Государственной Третьяковской галереи',
      imageUrl: 'images/img-8.jpg'
    },
    {
      title: 'Всадница',
      year: 1832,
      author: 'Карл Брюллов',
      dimensions: '291,5 cm × 206 cm',
      location: 'Хранится в Государственной Третьяковской галерее в Москве',
      imageUrl: 'images/img-2.jpg'
    },
    {
      title: 'Гадающая Светлана',
      year: 1836,
      author: 'Карл Брюллов',
      dimensions: '94 cm × 81 cm',
      location: 'Хранится в Нижегородском государственном художественном музее',
      imageUrl: 'images/img-4.jpg'
    },
    {
      title: 'Итальянский полдень',
      year: 1827,
      author: 'Карл Брюллов',
      dimensions: '64 cm × 55 cm',
      location: 'Хранится в Государственном Русском музее',
      imageUrl: 'images/img-5.jpg'
    },
    {
      title: 'Автопортрет Айвазовский',
      year: 1827,
      author: 'Иван Айвазовский',
      dimensions: '70,5 cm × 62,5 cm',
      location: 'Хранится в Уффици, Флоренция (не на выставке)',
      imageUrl: 'images/img-6.jpg'
    },
    {
      title: 'Бурное море',
      year: 1853,
      author: 'Иван Айвазовский',
      dimensions: '82 cm × 117 cm',
      location: 'Частное собрание (не на выставке)',
      imageUrl: 'images/img-7.jpg'
    },
    {
      title: 'Девятый вал',
      year: 1850,
      author: 'Иван Айвазовский',
      dimensions: '221 cm × 332 cm',
      location: 'Хранится в Государственном Русском музее, Санкт-Петербурге',
      imageUrl: 'images/img-3.jpg'
    }
  ];
  
  selectedPainting: Painting | null = null;

  // Метод для выбора картины при клике
  selectPainting(painting: any) {
    this.selectedPainting = painting;
  }
   // Фильтрация картин одного автора, исключая выбранную картину
   getPaintingsBySameAuthor(): Painting[] {
    if (!this.selectedPainting) {
      return [];
    }
    return this.paintings.filter(
      painting => painting.author === this.selectedPainting?.author && painting !== this.selectedPainting
    );
  }
}
