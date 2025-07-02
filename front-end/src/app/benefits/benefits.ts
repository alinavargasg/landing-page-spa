import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardModule, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardContent } from '@angular/material/card'; 
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-benefits',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardContent, MatIcon, CommonModule, MatCardModule],
  templateUrl: './benefits.html',
  styleUrl: './benefits.scss'
})
export class BenefitsComponent {
  beneficios = [
  { id: 1,
    isLiked: false, 
    icon: 'assets/icons/icon-riego.png', 
    title: 'Riego Inteligente con ESP32', 
    subtitle: 'Control automático según niveles de humedad del suelo en tiempo real', 
    imageUrl: 'assets/imgs/riego-inteligente.png', 
    description: 'Monitoreo en tiempo real de la humedad del suelo mediante sensores conectados a un micro-controlador ESP32, el cual activa el riego automáticamente cuando los niveles están por debajo del umbral establecido.' },
  { id: 2,
    isLiked: false,
    icon: 'assets/icons/icon-dashboard.png', 
    title: 'Datos en Tiempo Real', 
    subtitle: 'Visualización web interactiva de sensores para un acceso fácil y práctico', 
    imageUrl: 'assets/imgs/datos-tpo-real.png', 
    description: 'Visualización en tiempo real de los datos capturados por los sensores a través de una página web interactiva, facilitando de esta manera el acceso y uso por parte de los agricultores.' },
  { id: 3,
    isLiked: false,
    icon: 'assets/icons/icon-electronica.png',
    title: 'Agricultura con impacto local',
    subtitle: 'Tecnología accesible y sostenible para pequeños productores.', 
    imageUrl: 'assets/imgs/impacto-local.avif', 
    description: 'Enfoque socio-comunitario productivo, que involucra a la comunidad local, contribuyendo a una agricultura más eficiente, sostenible y tecnológicamente accesible para pequeños productores.' },
  { id: 4,
    isLiked: false,
    icon: 'assets/icons/icon-electronica.png',
    title: 'Control de plagas',
    subtitle: 'Cultivos de lechuga libres de plagas.', 
    imageUrl: 'assets/imgs/control-plagas.jpg', 
    description: 'El control de plagas en el cultivo de lechugas es crucial para obtener cosechas saludables y de calidad. Esto se logra mediante el monitoreo constante de las plantas, del agua y de la tierra.' },
  { id: 5,
    isLiked: false,
    icon: 'assets/icons/icon-electronica.png',
    title: 'Cuidado de la Tierra',
    subtitle: 'Control Inteligente de la calidad de la tierra ', 
    imageUrl: 'assets/imgs/cuidado-tierra.jfif', 
    description: 'Suelos ligeros, arenosos, con buen drenaje y ricos en materia orgánica, lo cual se logra mediante mediciones periódicas de los químicos presentes en la tierra, el abono, los nutrientes, y otros componnentes.' },
  { id: 6,
    isLiked: false,
    icon: 'assets/icons/icon-electronica.png',
    title: 'Seguimiento del crecimiento',
    subtitle: 'Monitoreo del comportamiento ciclo de vida de la planta.', 
    imageUrl: 'assets/imgs/crecimiento.jfif', 
    description: 'Esto se logra a través del aprendizaje profundo y la tecnología IoT.' }
];

toggleLike(benefitId: number) {
    const benefit = this.beneficios.find(b => b.id === benefitId);
    if (benefit) {
      benefit.isLiked = !benefit.isLiked;
    }
  }

  share(benefitId: number) {
    console.log('Compartir beneficio:', benefitId);
  }


}