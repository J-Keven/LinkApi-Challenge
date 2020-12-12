import AppError from '@shared/error/AppError';
import axios, { AxiosInstance } from 'axios';
import ICRMService from '../model/ICRMService';
import IDealDTO from '../dtos/IDealDTO';

class PipedriveService implements ICRMService {
  private ApiClient: AxiosInstance;

  constructor() {
    const baseURL = process.env.PIPEDRIVE_URL;
    this.ApiClient = axios.create({
      baseURL,
    });
  }

  async getDeals(status: string): Promise<IDealDTO[] | undefined> {
    const pipedriveKey = process.env.PIPEDRIVE_API_KEY;
    if (!pipedriveKey) {
      throw new AppError(
        'Api key of Pipedriver is required. See https://github.com/J-Keven/LinkApi-Challenge#linkapi-challenge',
        500,
      );
    }

    try {
      const { data } = await this.ApiClient.get(
        `deals?status=${status}&start=0&api_token=${pipedriveKey}`,
      );
      return data.data;
    } catch (error) {
      throw new AppError('The request for the Pipedrive API failed', 500);
    }
  }
}
export default PipedriveService;
