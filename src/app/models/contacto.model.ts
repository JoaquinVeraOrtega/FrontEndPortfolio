export class Contacto {

    id?: number;
    email: string = "";
    github: string = "";
    linkedin: string = "";

    constructor(email: string, github: string, linkedin: string) {

        this.email = email;
        this.github = github;
        this.linkedin = linkedin;

    }

    public get Email(): string {
        return this.email;
    }
    public set Email(value: string) {
        this.email = value;
    }

    public get Github(): string {
        return this.github;
    }
    public set Github(value: string) {
        this.github = value;
    }

    public get Linkedin(): string {
        return this.linkedin;
    }
    public set Linkedin(value: string) {
        this.linkedin = value;
    }

}