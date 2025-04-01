<template>
  <ion-list class="form-list">
    <ion-item class="input-item">
      <ion-label position="stacked" class="label-style">Tipo de Documento</ion-label>
      <ion-select placeholder="Seleccionar" class="select-style">
        <ion-select-option value="CC">CC</ion-select-option>
        <ion-select-option value="TI">TI</ion-select-option>
        <ion-select-option value="DNI">DNI</ion-select-option>
        <ion-select-option value="Pasaporte">Pasaporte</ion-select-option>
        <ion-select-option value="CE">CE</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item class="input-item">
      <ion-input id="documentNumber" label="Número de Documento" type="number" placeholder="Ingresar número de documento" class="input-style"></ion-input>
    </ion-item>
    <ion-item class="input-item">
      <ion-input id="name" label="Nombre" type="text" placeholder="Ingresar nombre" class="input-style"></ion-input>
    </ion-item>
    <ion-item class="input-item">
      <ion-input id="lastname" label="Apellido" type="text" placeholder="Ingresar apellido" class="input-style"></ion-input>
    </ion-item>
    <ion-item class="input-item">
      <ion-input id="email" label="Correo" type="email" placeholder="email@project.edu.co" class="input-style"></ion-input>
    </ion-item>
    <ion-item class="input-item">
      <ion-input id="phone" label="Teléfono" type="tel" placeholder="888-888-8888" class="input-style"></ion-input>
    </ion-item>
    <ion-item class="input-item">
      <ion-input id="dateBirth" label="Fecha Nacimiento" type="date" placeholder="mm/dd/yyyy" class="input-style"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
import { IonInput, IonItem, IonList, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
</script>

<style scoped>
/* Fondo elegante */
.form-list {
  margin: 20px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Estilo de los ítems */
.input-item {
  --ion-item-background: #ffffff;
  --ion-color-label: #ffffff;
  border: 1px solid #4e5f70;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Estilo de las etiquetas */
.label-style {
  font-size: 16px;
  font-weight: 500;
  color: #f4f4f4;
}

/* Estilo de los selects */
.select-style {
  border-radius: 6px;
  --background: #ffffff;
  --placeholder-color: #cccccc;
  padding: 10px;
}

/* Estilo de las entradas */
.input-style {
  --background: #ffffff;
  --placeholder-color: #8e8e8e;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}
</style>