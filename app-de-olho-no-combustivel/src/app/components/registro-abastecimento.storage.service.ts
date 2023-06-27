import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroAbastecimentoStorageService {

  constructor() { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
