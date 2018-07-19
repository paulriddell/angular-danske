export class GitHubRepo
{
    constructor(
        public id:number, 
        public name: string, 
        public description: string,
        public avatarUrl: string,
        public isVisible = false) { }
}
