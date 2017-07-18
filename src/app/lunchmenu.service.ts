import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { LunchMenu } from './lunchmenu';

//service defined as injectable, to be used by all others
@Injectable()
export class LunchMenuService {
   private lunchmenusUrl = 'api/LUNCHMENUS';  // URL to web api
  //private lunchmenusUrl = './lunchmenudata.json';
  //can also be added via the sample file created here as lunchmenudata.json file
  //but in memory db used to here, to allow add/remove or data
  private headers = new Headers({'Content-Type': 'application/json'});

constructor(private http: Http) { }
 
getLunchMenus(): Promise<LunchMenu[]> {
  return this.http.get(this.lunchmenusUrl)
             .toPromise()
             .then(response => response.json().data as LunchMenu[])
             .catch(this.handleError);
}
 
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

 getLunchMenu(id: number): Promise<LunchMenu> {
    const url = `${this.lunchmenusUrl}/${id}`;
	
	return this.http.get(url).toPromise().then(response => response.json().data as LunchMenu)
    .catch(this.handleError);
}

update(lunchmenu: LunchMenu): Promise<LunchMenu> {
  const url = `${this.lunchmenusUrl}/${lunchmenu.id}`;
  return this.http
    .put(url, JSON.stringify(lunchmenu), {headers: this.headers})
    .toPromise()
    .then(() => lunchmenu)
    .catch(this.handleError);
}
create(recommendation: string): Promise<LunchMenu> {
  return this.http
    .post(this.lunchmenusUrl, JSON.stringify({recommendation: recommendation}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as LunchMenu)
    .catch(this.handleError);
}
delete(id: number): Promise<void> {
  const url = `${this.lunchmenusUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}
}
