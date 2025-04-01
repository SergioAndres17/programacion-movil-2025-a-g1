<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title class="header-title">Cliente</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding vibrant-background">
      <ion-header collapse="condense">
        <ion-toolbar color="primary">
          <ion-title size="large" class="header-title">Cliente</ion-title>
        </ion-toolbar>
      </ion-header>

      <BasicData></BasicData>

      <div class="form-container">
        <ion-list class="form-list">
          <ion-item class="input-item">
            <ion-label position="stacked" class="label-style">Municipio</ion-label>
            <ion-select placeholder="Seleccione un municipio" class="select-style" id="municipio">
              <ion-select-option value="Acevedo">Acevedo</ion-select-option>
              <ion-select-option value="Agrado">Agrado</ion-select-option>
              <ion-select-option value="Aipe">Aipe</ion-select-option>
              <ion-select-option value="Algeciras">Algeciras</ion-select-option>
              <ion-select-option value="Altamira">Altamira</ion-select-option>
              <ion-select-option value="Baraya">Baraya</ion-select-option>
              <ion-select-option value="Campoalegre">Campoalegre</ion-select-option>
              <ion-select-option value="Colombia">Colombia</ion-select-option>
              <ion-select-option value="Elías">Elías</ion-select-option>
              <ion-select-option value="Garzón">Garzón</ion-select-option>
              <ion-select-option value="Gigante">Gigante</ion-select-option>
              <ion-select-option value="Guadalupe">Guadalupe</ion-select-option>
              <ion-select-option value="Hobo">Hobo</ion-select-option>
              <ion-select-option value="Íquira">Íquira</ion-select-option>
              <ion-select-option value="Isnos">Isnos</ion-select-option>
              <ion-select-option value="La Argentina">La Argentina</ion-select-option>
              <ion-select-option value="La Plata">La Plata</ion-select-option>
              <ion-select-option value="Nátaga">Nátaga</ion-select-option>
              <ion-select-option value="Neiva">Neiva</ion-select-option>
              <ion-select-option value="Oporapa">Oporapa</ion-select-option>
              <ion-select-option value="Paicol">Paicol</ion-select-option>
              <ion-select-option value="Palermo">Palermo</ion-select-option>
              <ion-select-option value="Palestina">Palestina</ion-select-option>
              <ion-select-option value="Pital">Pital</ion-select-option>
              <ion-select-option value="Pitalito">Pitalito</ion-select-option>
              <ion-select-option value="Rivera">Rivera</ion-select-option>
              <ion-select-option value="Saladoblanco">Saladoblanco</ion-select-option>
              <ion-select-option value="San Agustín">San Agustín</ion-select-option>
              <ion-select-option value="Santa María">Santa María</ion-select-option>
              <ion-select-option value="Suaza">Suaza</ion-select-option>
              <ion-select-option value="Tarqui">Tarqui</ion-select-option>
              <ion-select-option value="Tello">Tello</ion-select-option>
              <ion-select-option value="Teruel">Teruel</ion-select-option>
              <ion-select-option value="Tesalia">Tesalia</ion-select-option>
              <ion-select-option value="Timaná">Timaná</ion-select-option>
              <ion-select-option value="Villavieja">Villavieja</ion-select-option>
              <ion-select-option value="Yaguará">Yaguará</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item class="input-item">
            <ion-label position="stacked" class="label-style">Dirección</ion-label>
            <ion-input id="direccion" type="text" placeholder="Ej. Calle Falsa 123" class="input-style"></ion-input>
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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonSelect, IonSelectOption } from '@ionic/vue';
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

/* Select estilizado */
.select-style {
  border-radius: 6px;
  --background: #ffffff;
  --placeholder-color: #cccccc;
  padding: 10px;
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