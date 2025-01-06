import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerSerice } from "../services/CreateCustomerService";

class CreateCustomerController {
    async handle( request: FastifyRequest, reply: FastifyReply) {

        const { name, email } = request.body as { name: string, email: string}
    
        const customerSerice = new CreateCustomerSerice();

        const customer = await customerSerice.execute({ name, email});

        reply.send(customer)
    }
}

export { CreateCustomerController }