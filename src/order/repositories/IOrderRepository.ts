export default interface IOpportunitiesService {
  create(): Promise<void>;
  findAll(): Promise<void>;
}
