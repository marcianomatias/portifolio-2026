import { IProjectRepository } from "../../domain/repositories/IProjectRepository";

export class GetProjectsUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute() {
    return await this.projectRepository.getProjects();
  }
}
