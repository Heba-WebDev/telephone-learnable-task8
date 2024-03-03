class Telephone {
  constructor() {
    /* Set won't add duplicates */
    this.numbers = new Set();
    this.observers = new Set();
  }
  /* add a new phone number and invoke the observer */
  addPhoneNumber(phoneNumber) {
    this.numbers.add(phoneNumber);
    this.notifyObservers(`${phoneNumber}`);
  }

  /* remove a number and remove its invoked observer */
  removePhoneNumber(phoneNumber) {
    if (this.numbers.has(phoneNumber)) {
      this.numbers.delete(phoneNumber);
      this.notifyObservers(`Phone number ${phoneNumber} removed.`);
    } else {
      console.log(`Phone number ${phoneNumber} not found.`);
    }
  }

  /* dial a number and invoke the observer to show a message */
  dialPhoneNumber(phoneNumber) {
    if (this.numbers.has(phoneNumber)) {
      this.notifyObservers(`Now dialing ${phoneNumber}.`);
    } else {
      console.log(`Phone number ${phoneNumber} not found.`);
    }
  }

  /* add an observer */
  addObserver(observer) {
    this.observers.add(observer);
  }

  /* remove an observer */
  removeObserver(observer) {
    this.observers.delete(observer);
  }

  /* notify */
  notifyObservers(message) {
    this.observers.forEach((observer) => {
      observer.notify(message);
    });
  }
}

class PhoneNumberObserver {
  notify(message) {
    console.log(`${message}`);
  }
}

/* Example  */
const telephone = new Telephone();
const phoneNumberObserver = new PhoneNumberObserver();
telephone.addObserver(phoneNumberObserver);
/* add a number */
telephone.addPhoneNumber("56899533");
/* dial it */
telephone.dialPhoneNumber("56899533");
/* remove it */
telephone.removePhoneNumber("56899533");
/* now when we try to dail again, we get error message that the number is not found */
telephone.dialPhoneNumber("56899533");
