import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const STORAGE_KEY = 'mylist';
const STORAGE_KEY2 = 'mylist2';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private storage:Storage) { 
    this.init();
  }

  async init(){
    console.log('INIT');
    await this.storage.create();
    console.log('DONE');
  }

  getData(){
    console.log('GET DATA');
    return this.storage.get(STORAGE_KEY) || [];
  }

  async addData(item){
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    storedData.push(item);
    return this.storage.set(STORAGE_KEY, storedData);
  }

  async removeItem(index){
    const storedData2 = await this.storage.get(STORAGE_KEY) || [];
    storedData2.splice(index, 1);
    return this.storage.set(STORAGE_KEY, storedData2);
  }



  async init2(){
    console.log('INIT');
    await this.storage.create();
    console.log('DONE');
  }

  getData2(){
    console.log('GET DATA');
    return this.storage.get(STORAGE_KEY2) || [];
  }

  async addData2(item){
    const storedData2 = await this.storage.get(STORAGE_KEY2) || [];
    storedData2.push(item);
    return this.storage.set(STORAGE_KEY2, storedData2);
  }

  async removeItem2(index){
    const storedData2 = await this.storage.get(STORAGE_KEY2) || [];
    storedData2.splice(index, 1);
    return this.storage.set(STORAGE_KEY2, storedData2);
  }
}
