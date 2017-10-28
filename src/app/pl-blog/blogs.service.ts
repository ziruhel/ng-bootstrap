import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class BlogsService {

  constructor(private http: HttpClient) {
  }

  getBlog() {
    return this.http.get('http://pbapi.ackosoft.co.uk/api/blogs')
      .toPromise().then(res => res['data']['data'])
      .catch(this.handleError);

  }

  getAirtcleDetail(id, slug) {
    return this.http.get('http://pbapilive.ackosoft.co.uk/api/blogs/' + id + '/' + slug)
      .toPromise().then(res => res['data'])
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
