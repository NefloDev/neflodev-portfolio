export class RepoInfo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  visibility: string;

  constructor(id: number, name: string, description: string, html_url: string, visibility: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.html_url = html_url;
    this.visibility = visibility;
  }
}
