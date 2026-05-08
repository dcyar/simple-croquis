import AFRAME from 'aframe';

// Componente para limitar el movimiento de la cámara
AFRAME.registerComponent('camera-bounds', {
  schema: {
    minX: { type: 'number', default: -1.5 },
    maxX: { type: 'number', default: 1.5 },
    minZ: { type: 'number', default: -14 },
    maxZ: { type: 'number', default: 8 }
  },
  
  tick: function() {
    const position = this.el.object3D.position;
    
    // Limitar posición en X (entre los planos laterales)
    if (position.x < this.data.minX) {
      position.x = this.data.minX;
    }
    if (position.x > this.data.maxX) {
      position.x = this.data.maxX;
    }
    
    // Limitar posición en Z (profundidad)
    if (position.z < this.data.minZ) {
      position.z = this.data.minZ;
    }
    if (position.z > this.data.maxZ) {
      position.z = this.data.maxZ;
    }
  }
});