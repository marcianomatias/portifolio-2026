import { Project } from "../entities/Project";

export interface IProjectRepository {
  getProjects(): Promise<Project[]>;
}
