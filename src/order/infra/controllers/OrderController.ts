import { Request, Response } from 'express';
import CRMService from '@shared/infra/services/CRMService/implementations/PipledriveService';

const crmService = new CRMService();

class OrderController {
  async create(request: Request, response: Response): Promise<Response> {
    const data = await crmService.getOrder();
    return response.status(201).json(data);
  }
}

export default OrderController;
