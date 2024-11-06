import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  newsId: number | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Lấy tham số newsid từ query parameters
    this.route.queryParamMap.subscribe(params => {
      this.newsId = +params.get('newsid')!; // Lấy tham số 'newsid' từ URL và chuyển sang kiểu số
    });
  }
}
