import axios, { AxiosInstance } from 'axios';
import AppError from '@shared/error/AppError';
import IERPService from '../model/IERPService';
import IInsertOrderDTO from '../dtos/IInsertOrderDTO';
import xmlTemplate from '../../utils/xmlTemplate';

class BlingService implements IERPService {
  private ApiClient: AxiosInstance;

  constructor() {
    const baseURL = process.env.BLING_URL;
    this.ApiClient = axios.create({
      baseURL,
    });
  }

  async insertOrder(data: IInsertOrderDTO): Promise<void> {
    const blingKey = process.env.BLING_API_KEY;
    if (!blingKey) {
      throw new AppError(
        'Api key of Bling is required. See https://github.com/J-Keven/LinkApi-Challenge#linkapi-challenge',
        500,
      );
    }
    try {
      const {
        code,
        date,
        description,
        products_qtd,
        unit_value,
        salesman_name,
        cliente_email,
        cliente_name,
      } = data;

      const xml = xmlTemplate({
        code,
        description,
        cliente_email,
        cliente_name,
        products_qtd,
        salesman_name,
        unit_value,
      });

      await this.ApiClient.post(`/pedido/json/?apikey=${blingKey}&xml=${xml}`);
    } catch (err) {
      throw new AppError('The request for the Bling API failed', 500);
    }
    // to-do
  }
}

export default BlingService;
