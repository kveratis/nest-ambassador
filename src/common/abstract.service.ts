import { Repository } from 'typeorm';

export abstract class AbstractService {
  protected constructor(protected readonly repository: Repository<any>) {}

  async find(options = {}) {
    return this.repository.find(options);
  }

  async findOne(options: any) {
    return this.repository.findOne(options);
  }

  async save(options) {
    return this.repository.save(options);
  }

  async update(id: number, options) {
    return this.repository.update(id, options);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}
