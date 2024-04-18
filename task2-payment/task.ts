// Enum representing available payment processors
enum PaymentProcessorType {
    Stripe,
    Braintree,
    PayPal,
}

// Define a common interface for payment processing strategies
interface PaymentProcessor {
    processPayment(amount: number): Promise<string>;
}

// Stripe payment processor
class Stripe implements PaymentProcessor {
    async processPayment(amount: number): Promise<string> {
        // Call Stripe API to process payment
        console.log(`Processing payment of $${amount} via Stripe...`);
        // Simulate Stripe response with a payment ID
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve('Stripe payment ID');
            }, 1000);
        });
    }
}

// Braintree payment processor
class Braintree implements PaymentProcessor {
    async processPayment(amount: number): Promise<string> {
        // Call Braintree API to process payment
        console.log(`Processing payment of $${amount} via Braintree...`);
        // Simulate Braintree response with a payment ID
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve('Braintree payment ID');
            }, 1000);
        });
    }
}

// PayPal payment processor
class PayPal implements PaymentProcessor {
    async processPayment(amount: number): Promise<string> {
        // Call PayPal API to process payment
        console.log(`Processing payment of $${amount} via PayPal...`);
        // Simulate PayPal response with a payment ID
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve('PayPal payment ID');
            }, 1000);
        });
    }
}

// Order processing class
class OrderProcessor {
    paymentProcessor: PaymentProcessor;
    // Mapping between payment processor types and their corresponding classes
    private paymentProcessorMap: Record<PaymentProcessorType, new () => PaymentProcessor> = {
        [PaymentProcessorType.Stripe]: Stripe,
        [PaymentProcessorType.Braintree]: Braintree,
        [PaymentProcessorType.PayPal]: PayPal,
    };

    constructor(paymentProcessorType: PaymentProcessorType) {
        // Create payment processor instance based on the provided type
        this.paymentProcessor = new this.paymentProcessorMap[paymentProcessorType]();
    }

    async processOrder(amount: number): Promise<string> {
        try {
            // Process payment using the selected payment processor
            return this.paymentProcessor.processPayment(amount);
        } catch (error) {
            throw new Error(`${PaymentProcessorType} payment processing error: ${error.message}`);
        }
    }
}

function payOrder(amount: number, type: PaymentProcessorType): Promise<string> {
    const orderProcessor = new OrderProcessor(type);
    return orderProcessor.processOrder(amount);
}
