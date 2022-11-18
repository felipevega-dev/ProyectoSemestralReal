import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const STORAGE_KEY = 'mylist';
const STORAGE_KEY2 = 'mylist2';
const STORAGE_KEY3 = 'mylist3';
const STORAGE_KEY4 = 'mylist4';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private storage:Storage) { 
    this.init();
  }

  //PROGRAMACION
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
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    storedData.splice(index, 1);
    return this.storage.set(STORAGE_KEY, storedData);
  }


  // BASE DE DATOS
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

  // CALIDAD SW
  async init3(){
    console.log('INIT');
    await this.storage.create();
    console.log('DONE');
  }

  getData3(){
    console.log('GET DATA');
    return this.storage.get(STORAGE_KEY3) || [];
  }

  async addData3(item){
    const storedData3 = await this.storage.get(STORAGE_KEY3) || [];
    storedData3.push(item);
    return this.storage.set(STORAGE_KEY3, storedData3);
  }

  async removeItem3(index){
    const storedData3 = await this.storage.get(STORAGE_KEY3) || [];
    storedData3.splice(index, 1);
    return this.storage.set(STORAGE_KEY3, storedData3);
  }

  // ARQUITECTURA
  async init4(){
    console.log('INIT');
    await this.storage.create();
    console.log('DONE');
  }

  getData4(){
    console.log('GET DATA');
    return this.storage.get(STORAGE_KEY4) || [];
  }

  async addData4(item){
    const storedData4 = await this.storage.get(STORAGE_KEY4) || [];
    storedData4.push(item);
    return this.storage.set(STORAGE_KEY4, storedData4);
  }

  async removeItem4(index){
    const storedData4 = await this.storage.get(STORAGE_KEY4) || [];
    storedData4.splice(index, 1);
    return this.storage.set(STORAGE_KEY4, storedData4);
  }
}
