import React from 'react';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, 
  IonCardTitle, IonCardContent, IonImg, IonGrid, IonRow, IonCol, IonInput, IonButtons, IonIcon
} from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import '../theme/variables.css';
import '../theme/Reservas.css';

const Reservas: React.FC = () => {
  return (
    <IonPage>
      {/* 🔹 Barra de navegación superior */}
      <IonHeader>
        <IonToolbar className="nav-toolbar">
          <IonButtons slot="start">
            <IonButton className="nav-button" routerLink="/inicio">Inicio</IonButton>
            <IonButton className="nav-button" routerLink="/destino">Destino</IonButton>
            <IonButton className="nav-button active" routerLink="/reservas">Reservas</IonButton>
            <IonButton className="nav-button" routerLink="/contacto">Contacto</IonButton>
          </IonButtons>
          
          <IonButtons slot="end">
            <IonButton className="nav-button login" routerLink="/login">
              <IonIcon icon={personCircleOutline} className="login-icon" />
              Iniciar sesión
            </IonButton>
          </IonButtons>

        </IonToolbar>
      </IonHeader>
      
      <IonContent className="reservas-content">
        <IonGrid>
          {/* 🔹 Barra de búsqueda */}
          <IonRow className="search-bar">
            <IonCol size="12" size-md="3">
              <IonInput className="search-input" placeholder="Nombre" />
            </IonCol>
            <IonCol size="12" size-md="3">
              <IonInput className="search-input" placeholder="Fecha" type="date" />
            </IonCol>
            <IonCol size="12" size-md="2">
              <IonInput className="search-input" placeholder="#" type="number" />
            </IonCol>
            <IonCol size="12" size-md="2">
              <IonButton expand="block" className="button-search">Buscar</IonButton>
            </IonCol>
          </IonRow>
          
          {/* 🔹 Lista de hoteles disponibles */}
          {[
            { titulo: "GHL Hotel Neiva", desc: "Ubicado en San Pedro Plaza.", img: "/assets/hoteles/ghl_hotel_neiva.jpg" },
            { titulo: "Casa hotel Mi Huila", desc: "Ofrece alojamiento con parking gratuito.", img: "/assets/hoteles/casa_hotel_mi_huila.jpg" },
            { titulo: "Hotel Escorial Neiva", desc: "Cuenta con aire libre y terraza.", img: "/assets/hoteles/hotel_escorial_neiva.jpg" }
          ].map((hotel, index) => (
            <IonRow key={index} className="hotel-card-row">
              <IonCol size="12" size-md="6" offset-md="3">
                <IonCard className="hotel-card">
                  <IonImg src={hotel.img} alt={hotel.titulo} className="hotel-img" />
                  <IonCardHeader>
                    <IonCardTitle className="hotel-title">{hotel.titulo}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent className="hotel-desc">{hotel.desc}</IonCardContent>
                  <IonButton expand="full" className="button-reservar">Reservar</IonButton>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>

        {/* 🔹 Botón para cargar más hoteles */}
        <IonRow>
          <IonCol size="12" className="center-button">
            <IonButton expand="full" className="button-ver-mas">Ver más</IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Reservas;
