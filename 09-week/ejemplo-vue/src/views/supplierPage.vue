<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar color="primary">
          <ion-title class="header-title">Proveedor</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true" class="ion-padding vibrant-background">
        <ion-header collapse="condense">
          <ion-toolbar color="primary">
            <ion-title size="large" class="header-title">Proveedor</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <BasicData></BasicData>
        
        <div class="form-container">
          <ion-list class="form-list">
            <ion-item class="input-item">
              <ion-label position="stacked" class="label-style">Dirección</ion-label>
              <ion-input id="address" type="text" placeholder="Ej. Calle Falsa 123"></ion-input>
            </ion-item>
            <ion-item class="input-item">
              <ion-label position="stacked" class="label-style">Tipo de Producto</ion-label>
              <ion-select id="productType" placeholder="Seleccione un producto" class="select-style">
                <ion-select-option value="producto1">Carnes</ion-select-option>
                <ion-select-option value="producto2">Frutas</ion-select-option>
                <ion-select-option value="producto3">Verduras</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>
        </div>
  
        <!-- Espaciado adicional en los botones -->
        <div class="button-container">
          <ButtonComponent></ButtonComponent>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput } from '@ionic/vue';
  import BasicData from '@/components/ComponentBasicData.vue';
  import ButtonComponent from '@/components/ButtonComponent.vue';
  </script>
  
  <style scoped>
  /* Fondo vibrante */
  .vibrant-background {
    background: linear-gradient(135deg, #ff5722, #ff9800);
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  /* Título llamativo */
  .header-title {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  }
  
  /* Contenedor del formulario */
  .form-container {
    margin: 20px;
    padding: 16px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    flex-grow: 1;
  }
  
  /* Estilo de los botones */
  .button-container {
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: center;
  }
  
  ion-button {
    --background: #3498db;
    --color: #ffffff;
    width: 90%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  </style>