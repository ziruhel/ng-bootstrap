import { Component, OnInit } from '@angular/core';
import {BlogsService} from '../pl-blog/blogs.service';
import {config} from '../../../config';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  private imagePath = 'http://pbadmin.ackosoft.co.uk/public/images/';
  blogs:any[];

  constructor(private  blogService: BlogsService) { }

  ngOnInit() {
    this.blogService.getBlog().then(
      res => {
        this.blogs = res;
      }
    );
  }

}
