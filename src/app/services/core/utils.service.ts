import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {


  removeUrlQuery(url: string): string {
    if (url) {
      return url.replace(/\?.*/, '');
    }
    return '';
  }

  stringToSlug(value: string): string {
    let text = value?.toLowerCase();
    if (text?.charAt(0) == " ") {
      text = text.trim();
    }
    if (text?.charAt(text.length - 1) == "-") {
      text = (text?.replace(/-/g, ""));
    }
    text = text?.replace(/ +/g, "");
    text = text?.replace(/--/g, "");
    text = text?.normalize("NFKD").replace(/[\u0300-\u036f]/g, ""); // Note: Normalize('NFKD') used to normalize special alphabets like óã to oa
    text = text?.replace(/[^a-zA-Z0-9 -]/g, "");

    return text;
  }

}
