import { initializeStripePaymentElement } from './stripe-payment-element.js';

initialize();

// Fetches a payment intent and captures the client secret
async function initialize() {
  document.querySelector("#radio-checkoutSession").addEventListener('change', function() {
    handleRadioSelection(this);
  });
  
  document.querySelector("#radio-checkoutSessionSubscription").addEventListener('change', function() {
    handleRadioSelection(this);
  });
  
  document.querySelector("#radio-paymentElement").addEventListener('change', function() {
    handleRadioSelection(this);
  });
  
  document.querySelector("#radio-paymentElementSubscription").addEventListener('change', function() {
    handleRadioSelection(this);
  });
}

async function handleRadioSelection(radioStripePayment) {
    switch (radioStripePayment.value) {
      case 'CheckoutSession':
        enableStripeCheckout();
        break;
      case 'CheckoutSessionSubscription':
          enableStripeCheckout();
          break;
      case 'PaymentElement':
        enableStripePaymentElement();
        break;
      case 'PaymentElementSubscription':
        enableStripePaymentElement();
        break;
      default:
        console.log(`Sorry.`);
    }
}

async function enableStripeCheckout() {
  document.querySelector("#checkoutButton").classList.remove("hidden");
  document.querySelector("#div-stripe-payment-container").classList.add("hidden");
}

async function enableStripePaymentElement() {
  document.querySelector("#checkoutButton").classList.add("hidden");
  initializeStripePaymentElement();
}
