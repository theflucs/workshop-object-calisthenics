class Car {
    constructor(make, model) {
      this._make = make;
      this._model = model;
      this._speed = 0;
      this._engineStatus = 'off';
    }
  
    // Restituisce la velocità attuale
    get speed() {
      return this._speed;
    }

    set speed(value) {
      this._speed = value;
    }
  
    // Restituisce lo stato del motore
    set engineStatus(status) {
      if (status !== 'on' && status !== 'off') {
          throw new Error(`Wrong status '${status}'. Engine should be either 'on' or 'off'`);
      }

      if (status === 'off') {
        this._speed = 0;
      }

      return this._engineStatus = status;
    }
  }
  
  // Funzione esterna che incrementa la velocità
  function accelerate(car, delta) {
    if (car.engineStatus === 'off') {
      console.log("La macchina è spenta. Non si può accelerare.");
      return;
    }

    const newSpeed = car.speed + delta;

    if (newSpeed >= 0) {
      car.speed = newSpeed;
    }
  }
  
  // Funzione esterna che decrementa la velocità
  function decelerate(car, delta) {
    if (car.engineStatus === 'off') {
      console.log("La macchina è spenta. Non si può decelerare.");
      return;
    }

    const newSpeed = car.speed - delta;

    // Impediamo che la velocità diventi negativa
    car.speed = newSpeed >= 0 ? newSpeed : 0;
  }
   
  // Esempio di utilizzo nel canvas:
  const myCar = new Car('Toyota', 'Corolla');
  
  // Proviamo ad accelerare con la macchina spenta
  accelerate(myCar, 20); // Non funzionerà: la macchina è spenta
  
  // Accendiamo il motore
  myCar.engineStatus = 'on';
  console.log("Motore acceso? ", myCar.engineStatus === 'on');
  
  // Acceleriamo e deceleriamo
  accelerate(myCar, 30);
  console.log("Velocità dopo accelerazione:", myCar.speed, "km/h");
  
  decelerate(myCar, 10);
  console.log("Velocità dopo decelerazione:", myCar.speed, "km/h");
  
  // Spegniamo il motore e proviamo ad accelerare/decelerare
  myCar.engineStatus = 'off';
  accelerate(myCar, 20);
  decelerate(myCar, 20);
  console.log("Velocità con la macchina spenta:", myCar.speed, "km/h");