// Define a common interface for payment providers
interface PaymentProvider {
    processPayment(amount: number): Promise<boolean>;
}

// Define the factory interface
interface PaymentProviderFactory {
    createProvider(): PaymentProvider;
}

// Stripe payment provider
class StripeProvider implements PaymentProvider {
    async processPayment(amount: number): Promise<boolean> {
        // Call Stripe API to process payment
        console.log(`Processing payment of $${amount} via Stripe...`);
        // Simulate response
        return true;
    }
}

// Braintree payment provider
class BraintreeProvider implements PaymentProvider {
    async processPayment(amount: number): Promise<boolean> {
        // Call Braintree API to process payment
        console.log(`Processing payment of $${amount} via Braintree...`);
        // Simulate response
        return true;
    }
}

// PayPal payment provider
class PayPalProvider implements PaymentProvider {
    async processPayment(amount: number): Promise<boolean> {
        // Call PayPal API to process payment
        console.log(`Processing payment of $${amount} via PayPal...`);
        // Simulate response
        return true;
    }
}

// Stripe factory
class StripeFactory implements PaymentProviderFactory {
    createProvider(): PaymentProvider {
        return new StripeProvider();
    }
}

// Braintree factory
class BraintreeFactory implements PaymentProviderFactory {
    createProvider(): PaymentProvider {
        return new BraintreeProvider();
    }
}

// PayPal factory
class PayPalFactory implements PaymentProviderFactory {
    createProvider(): PaymentProvider {
        return new PayPalProvider();
    }
}

// Order processing class
class OrderProcessor {
    paymentProviderFactory: PaymentProviderFactory;

    constructor(paymentProviderFactory: PaymentProviderFactory) {
        this.paymentProviderFactory = paymentProviderFactory;
    }

    async processOrder(amount: number): Promise<void> {
        // Get the payment provider based on customer's choice
        const paymentProvider = this.paymentProviderFactory.createProvider();
        // Process payment
        await paymentProvider.processPayment(amount);
        console.log('Payment processed successfully.');
    }
}

// Example usage
const stripeFactory = new StripeFactory();
const braintreeFactory = new BraintreeFactory();
const paypalFactory = new PayPalFactory();

const orderProcessor = new OrderProcessor(stripeFactory);
orderProcessor.processOrder(100);

// Change payment provider dynamically
orderProcessor.paymentProviderFactory = braintreeFactory;
orderProcessor.processOrder(150);

// Change payment provider again
orderProcessor.paymentProviderFactory = paypalFactory;
orderProcessor.processOrder(200);
