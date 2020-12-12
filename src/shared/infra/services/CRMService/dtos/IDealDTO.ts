export default interface IDealDTO {
  id: number;
  title: string;
  value: number;
  update_time: Date;
  add_time: Date;
  products_count: number;
  user_id: {
    name: string;
    email: string;
  };
  person_id: {
    name: string;
    email: {
      value: string;
    };
  };
}
