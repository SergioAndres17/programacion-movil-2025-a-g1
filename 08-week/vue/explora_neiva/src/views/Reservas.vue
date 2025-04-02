<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="light">
        <ion-buttons slot="start">
          <ion-button>INICIO</ion-button>
          <ion-button>DESTINO</ion-button>
          <ion-button>RESERVAS</ion-button>
          <ion-button>CONTACTO</ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="personCircleOutline" />
            INICIAR SESIÓN
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Filtros de búsqueda -->
      <ion-card>
        <!-- Campo de nombre -->
        <ion-item>
          <ion-label position="floating"></ion-label>
          <ion-input
          placeholder="Nombre del hotel">
          </ion-input>
        </ion-item>

        <!-- Campo de fecha -->
        <ion-item>
          <ion-label position="floating"></ion-label>
          <ion-input
            :value="selectedDate"
            placeholder="seleccione la fecha"
            readonly
            @click="openDatePicker"
          ></ion-input>
        </ion-item>

        <!-- Campo que acepta solo números -->
        <ion-item>
          <ion-label position="floating"></ion-label>
          <ion-input
            type="number"
            inputmode="numeric"
            placeholder="Cantidad de personas"
          ></ion-input>
        </ion-item>

        <ion-button expand="full" color="primary">BUSCAR</ion-button>
      </ion-card>

      <!-- Lista de Hoteles -->
      <ion-card>
        <img src="/public/ghl_hotel_neiva.jpg" alt="Hotel">
        <ion-card-content>
          <h2>GHL Hotel Neiva</h2>
          <p>Ubicado en San Pedro Plaza.</p>
        </ion-card-content>
        <ion-button expand="full" color="primary">RESERVAR</ion-button>
      </ion-card>

      <ion-card>
        <img src="/public/casa_hotel_mi_huila.jpg" alt="Hotel 2">
        <ion-card-content>
          <h2>Casa hotel mi huila</h2>
          <p>Ubicado en Neiva.</p>
        </ion-card-content>
        <ion-button expand="full" color="primary">RESERVAR</ion-button>
      </ion-card>

      <!-- Información adicional según diseño -->
      <ion-card>
        <img src="/public/hotel_escorial_neiva.jpg" alt="Hotel 2">
        <ion-card-header>
          <ion-card-title>Hotel Escorial Neiva</ion-card-title>
          <ion-card-subtitle>Cuenta con aire libre y terraza</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>Perfecto para disfrutar del paisaje.</p>
          <ion-button expand="full" color="primary">RESERVAR</ion-button>
          <ion-button expand="full" color="secondary">VER MÁS</ion-button>
        </ion-card-content>
      </ion-card>

      <!-- Modal para el selector de fecha -->
      <ion-modal :is-open="showDatePicker" @didDismiss="closeDatePicker">
        <ion-content>
          <ion-datetime
            display-format="DD/MM/YYYY"
            @ionChange="updateDate"
          ></ion-datetime>
          <ion-button expand="full" @click="closeDatePicker">Cerrar</ion-button>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
  IonIcon,
  IonModal,
} from "@ionic/vue";
import { ref } from "vue";
import { personCircleOutline } from "ionicons/icons";

// Variables de estado
const showDatePicker = ref(false);
const selectedDate = ref("");

// Funciones para el selector de fecha
const openDatePicker = () => {
  showDatePicker.value = true;
};

const closeDatePicker = () => {
  showDatePicker.value = false;
};

const updateDate = (event) => {
  selectedDate.value = event.detail.value;
  closeDatePicker(); // Cierra el modal después de seleccionar la fecha.
};
</script>

<style scoped>
ion-toolbar {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}

ion-buttons ion-button {
  font-size: 12px;
}

ion-card img {
  width: 100%;
  height: auto;
}

ion-card h2 {
  font-size: 18px;
  font-weight: bold;
}

ion-card p {
  font-size: 14px;
  color: gray;
}
</style>