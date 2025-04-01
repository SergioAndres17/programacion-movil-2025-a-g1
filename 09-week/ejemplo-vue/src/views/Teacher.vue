<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title class="header-title">Profesor</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding vibrant-background">
      <ion-header collapse="condense">
        <ion-toolbar color="primary">
          <ion-title size="large" class="header-title">Profesor</ion-title>
        </ion-toolbar>
      </ion-header>

      <BasicData></BasicData>

      <div class="form-container">
        <ion-list class="form-list">
          <ion-item class="input-item">
            <ion-label position="stacked" class="label-style">Fecha Ingreso</ion-label>
            <ion-input id="entryDate" type="date" placeholder="dd-mm-yyyy" class="input-style"></ion-input>
          </ion-item>
          <ion-item class="input-item">
            <ion-label position="stacked" class="label-style">Salario</ion-label>
            <ion-input id="salary" type="text" placeholder="1.430.000" class="input-style"></ion-input>
          </ion-item>
          <ion-item class="input-item">
            <ion-checkbox slot="start" id="status" class="checkbox-style"></ion-checkbox>
            <ion-label class="label-style">Estado</ion-label>
          </ion-item>
        </ion-list>
      </div>

      <div class="button-container">
        <ButtonComponent></ButtonComponent>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonCheckbox } from '@ionic/vue';
import BasicData from '@/components/ComponentBasicData.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
</script>

<style scoped>
/* Fondo vibrante */
.vibrant-background {
  background: linear-gradient(135deg, #007aff, #5ac8fa);
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

/* Lista de entradas */
.form-list {
  margin-bottom: 20px;
}

/* Estilo de los ítems */
.input-item {
  --ion-item-background: #ffffff;
  --ion-color-label: #ffffff;
  border: 1px solid #5ac8fa;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Estilo de las entradas */
.input-style {
  --background: #ffffff;
  --placeholder-color: #8e8e8e;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

/* Estilo de las etiquetas */
.label-style {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
}

/* Estilo del checkbox */
.checkbox-style {
  --background-checked: #007aff;
  --border-color: #ffffff;
}

/* Contenedor de los botones */
.button-container {
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
}

ion-button {
  --background: #34c759;
  --color: #ffffff;
  width: 90%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>