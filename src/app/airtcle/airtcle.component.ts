import { Component, OnInit } from '@angular/core';
import {BlogsService} from '../pl-blog/blogs.service';
import {ParamMap, ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-airtcle',
  templateUrl: './airtcle.component.html',
  styleUrls: ['./airtcle.component.css']
})
export class AirtcleComponent implements OnInit {
  private imagePath = 'http://assets.ackosoft.co.uk/pb/';
  airtcle: any[];
  totalComments: number;

  constructor(private  blogService: BlogsService,  private route: ActivatedRoute) {
  }

  ngOnInit() {
    //this.totalComments = 0;
    this.route.paramMap
      .switchMap((params: ParamMap) => this.blogService.getAirtcleDetail(params.get('id') , params.get('slug')))
      .subscribe(res => {
        this.airtcle = res;
        this.totalComments = res.data.comments.length;
      });
  }
}
